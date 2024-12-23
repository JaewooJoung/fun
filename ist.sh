#!/bin/bash

if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

# Function to display disk selection menu
select_disk() {
    echo "Available disks:"
    local disks=($(lsblk -dpno NAME,SIZE,MODEL | grep -E "nvme|sd"))
    local i=1
    
    for disk in "${disks[@]}"; do
        echo "$i) $disk"
        ((i++))
    done
    
    while true; do
        read -p "Select disk number (1-${#disks[@]}): " selection
        if [[ "$selection" =~ ^[0-9]+$ ]] && [ "$selection" -ge 1 ] && [ "$selection" -le "${#disks[@]}" ]; then
            DEVICE=$(echo "${disks[$((selection-1))]}" | awk '{print $1}')
            break
        fi
        echo "Invalid selection. Please try again."
    done
}

# Function to set up passwords
setup_passwords() {
    # Root password
    while true; do
        read -s -p "Enter root password: " ROOT_PASSWORD
        echo
        read -s -p "Confirm root password: " ROOT_PASSWORD_CONFIRM
        echo
        if [ "$ROOT_PASSWORD" = "$ROOT_PASSWORD_CONFIRM" ]; then
            break
        fi
        echo "Passwords don't match. Please try again."
    done

    # User setup
    read -p "Enter username: " USERNAME
    while true; do
        read -s -p "Enter password for $USERNAME: " USER_PASSWORD
        echo
        read -s -p "Confirm password for $USERNAME: " USER_PASSWORD_CONFIRM
        echo
        if [ "$USER_PASSWORD" = "$USER_PASSWORD_CONFIRM" ]; then
            break
        fi
        echo "Passwords don't match. Please try again."
    done
}

# Select disk and set up passwords
select_disk
setup_passwords

# Set partition variables
EFI_PART="${DEVICE}p1"
SWAP_PART="${DEVICE}p2"
ROOT_PART="${DEVICE}p3"

echo "WARNING: This will COMPLETELY ERASE all data on ${DEVICE}. Are you sure? (y/N)"
read confirm
if [ "$confirm" != "y" ]; then
    echo "Aborted"
    exit 1
fi

# Clean the disk completely
echo "Cleaning disk..."
dd if=/dev/zero of=${DEVICE} bs=1M count=100
dd if=/dev/zero of=${DEVICE} bs=1M seek=$(( $(blockdev --getsz ${DEVICE}) / 2048 - 100)) count=100
wipefs -af ${DEVICE}
sgdisk -Z ${DEVICE}

# Create fresh GPT
sgdisk -o ${DEVICE}

# Create partitions
sgdisk -n 1:0:+1G -t 1:ef00 -c 1:"EFI System Partition" ${DEVICE}
sgdisk -n 2:0:+8G -t 2:8200 -c 2:"Linux swap" ${DEVICE}
sgdisk -n 3:0:0 -t 3:8300 -c 3:"Linux root" ${DEVICE}

# Wait for kernel to update partition table
sleep 3
partprobe ${DEVICE}
sleep 3

# Format partitions
echo "Formatting partitions..."
mkfs.fat -F 32 ${EFI_PART}
mkswap ${SWAP_PART}
mkfs.ext4 ${ROOT_PART}

# Mount partitions
echo "Mounting partitions..."
mount ${ROOT_PART} /mnt
mkdir -p /mnt/boot/efi
mount ${EFI_PART} /mnt/boot/efi
swapon ${SWAP_PART}

# Install essential packages including Korean support
echo "Installing base system..."
pacstrap -K /mnt base linux linux-firmware \
    base-devel intel-ucode amd-ucode \
    networkmanager vim grub efibootmgr \
    xorg plasma plasma-desktop sddm \
    firefox konsole dolphin \
    sudo dosfstools mtools os-prober \
    noto-fonts-cjk adobe-source-han-sans-kr-fonts ttf-baekmuk \
    gtk3 gtk2 qt5-base qt4 qt5-tools \
    libappindicator-gtk3 libhangul anthy \
    git automake autoconf libtool pkg-config

# Generate fstab
echo "Generating fstab..."
genfstab -U /mnt >> /mnt/etc/fstab

# Configure the system
arch-chroot /mnt /bin/bash <<CHROOT_COMMANDS
# Set timezone
ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
hwclock --systohc

# Set locale
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "ko_KR.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=en_US.UTF-8" > /etc/locale.conf

# Set hostname
echo "arch" > /etc/hostname
cat > /etc/hosts <<EOF
127.0.0.1   localhost
::1         localhost
127.0.1.1   arch.localdomain arch
EOF

# Set passwords
echo "root:${ROOT_PASSWORD}" | chpasswd
useradd -m -G wheel -s /bin/bash ${USERNAME}
echo "${USERNAME}:${USER_PASSWORD}" | chpasswd
echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/wheel

# Configure GRUB
mkdir -p /boot/efi/EFI/BOOT
mkdir -p /boot/efi/EFI/GRUB
mkdir -p /boot/grub

cat > /etc/default/grub <<EOF
GRUB_DEFAULT=0
GRUB_TIMEOUT=5
GRUB_DISTRIBUTOR="Arch"
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
GRUB_CMDLINE_LINUX=""
GRUB_PRELOAD_MODULES="part_gpt part_msdos"
GRUB_TIMEOUT_STYLE=menu
GRUB_TERMINAL_INPUT=console
GRUB_GFXMODE=auto
GRUB_GFXPAYLOAD_LINUX=keep
GRUB_DISABLE_OS_PROBER=false
EOF

# Install GRUB
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB --recheck
grub-install --target=x86_64-efi --efi-directory=/boot/efi --removable --recheck
grub-mkconfig -o /boot/grub/grub.cfg

# Create additional EFI boot entries
cp /boot/efi/EFI/GRUB/grubx64.efi /boot/efi/EFI/BOOT/BOOTX64.EFI
cp /boot/grub/grub.cfg /boot/efi/EFI/GRUB/
cp /boot/grub/grub.cfg /boot/efi/EFI/BOOT/

# Create UEFI boot entries
efibootmgr --create --disk ${DEVICE} --part 1 --loader /EFI/GRUB/grubx64.efi --label "GRUB" --verbose
efibootmgr --create --disk ${DEVICE} --part 1 --loader /EFI/BOOT/BOOTX64.EFI --label "Arch Linux Fallback" --verbose

# Configure Korean input method
cat > /home/${USERNAME}/.xprofile <<EOF
export GTK_IM_MODULE=nimf
export QT4_IM_MODULE="nimf"
export QT_IM_MODULE=nimf
export XMODIFIERS="@im=nimf"
nimf &
EOF

chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.xprofile

# Enable services
systemctl enable NetworkManager
systemctl enable sddm

# Generate initial ramdisk
mkinitcpio -P
CHROOT_COMMANDS

# Post-installation Korean setup
arch-chroot /mnt /bin/bash <<'KOREAN_SETUP'
cd /tmp
git clone https://aur.archlinux.org/spoqa-han-sans.git
cd spoqa-han-sans
sudo -u ${USERNAME} makepkg -si --noconfirm
cd ..

for font in ttf-d2coding ttf-nanum ttf-nanumgothic_coding ttf-kopub ttf-kopubworld; do
    git clone https://aur.archlinux.org/${font}.git
    cd ${font}
    sudo -u ${USERNAME} makepkg -si --noconfirm
    cd ..
done

# Install nimf
wget https://gitlab.com/nimf-i18n/nimf/-/archive/master/nimf-master.tar.gz
tar zxf nimf-master.tar.gz
cd nimf-master
./autogen.sh --disable-nimf-anthy --disable-nimf-m17n --disable-nimf-rime
make
make install
ldconfig
KOREAN_SETUP

umount -R /mnt

echo "Installation complete!"
echo ""
echo "IMPORTANT POST-INSTALLATION STEPS:"
echo "1. Power off the computer completely (not reboot)"
echo "2. Remove the USB drive"
echo "3. Enter BIOS setup and make these EXACT changes:"
echo "   a. Load BIOS defaults first"
echo "   b. Disable Secure Boot"
echo "   c. Set UEFI boot mode (disable CSM/Legacy completely)"
echo "   d. Set Boot Device Priority:"
echo "      - First: ${DEVICE}"
echo "      - Disable or remove other boot options"
echo "   e. Save changes and exit"
echo ""
echo "After first boot:"
echo "1. Korean input can be toggled with Shift+Space"
echo "2. Run 'nimf --debug &' to start nimf with debugging"
echo "3. Run 'nimf-settings --gapplication-service &' to start the settings service"
