#!/bin/bash

if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

# Initialize pacman
init_pacman() {
    pacman-key --init
    pacman-key --populate archlinux
    pacman -Sy archlinux-keyring
}

# 1. Show all hard drives
echo "Here are all the hard drives in the system:"
drives=($(lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. ' | awk '{print $2}'))
lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. '

# 2. Drive selection
read -p "Please enter the number of the desired hard drive (e.g., 1, 2, etc.): " choice

# 3. Validate selection
if [[ $choice -gt 0 && $choice -le ${#drives[@]} ]]; then
    DEVICE="/dev/${drives[$choice-1]}"
    echo "Selected hard drive: $DEVICE"
else
    echo "Invalid number. Exiting..."
    exit 1
fi

# Fixed credentials
USERNAME="crux"
USER_PASSWORD="1234"
ROOT_PASSWORD="1234"
HOSTNAME="lisa"

# Set partition variables based on device type
if [[ ${DEVICE} == *"nvme"* ]]; then
    # NVMe drives use 'p' suffix for partitions
    EFI_PART="${DEVICE}p1"
    SWAP_PART="${DEVICE}p2"
    ROOT_PART="${DEVICE}p3"
else
    # SATA/IDE drives just append numbers
    EFI_PART="${DEVICE}1"
    SWAP_PART="${DEVICE}2"
    ROOT_PART="${DEVICE}3"
fi

# Show installation plan
echo "==========================="
echo "Installation Plan:"
echo "Device: ${DEVICE}"
echo "EFI: ${EFI_PART}"
echo "Swap: ${SWAP_PART}"
echo "Root: ${ROOT_PART}"
echo "Username: ${USERNAME}"
echo "Hostname: ${HOSTNAME}"
echo "==========================="
echo "WARNING: This will COMPLETELY ERASE the selected drive!"
echo "Press Ctrl+C within 5 seconds to cancel..."
sleep 5

# Initialize pacman
init_pacman

# Clean disk
echo "Cleaning disk..."
dd if=/dev/zero of=${DEVICE} bs=1M count=100
dd if=/dev/zero of=${DEVICE} bs=1M seek=$(( $(blockdev --getsz ${DEVICE}) / 2048 - 100)) count=100
wipefs -af ${DEVICE}
sgdisk -Z ${DEVICE}

# Create new GPT
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
mount ${ROOT_PART} /mnt || exit 1
mkdir -p /mnt/boot
mount ${EFI_PART} /mnt/boot || exit 1
swapon ${SWAP_PART}

# Check if mounted in UEFI mode
if [ ! -d "/sys/firmware/efi" ]; then
    echo "Error: Not booted in UEFI mode!"
    exit 1
fi

# Check available space
available_space=$(df -BG --output=avail /mnt | tail -n1 | tr -dc '0-9')
if [ "$available_space" -lt 15 ]; then
    echo "Error: Not enough space. Need at least 15GB free."
    exit 1
fi

# Install base system
echo "Installing base system..."
pacstrap -K /mnt base linux linux-firmware base-devel intel-ucode networkmanager

# Generate fstab
echo "Generating fstab..."
genfstab -U /mnt >> /mnt/etc/fstab

# System configuration
arch-chroot /mnt /bin/bash <<CHROOT_COMMANDS
# Set timezone
ln -sf /usr/share/zoneinfo/Europe/Stockholm /etc/localtime
hwclock --systohc

# Enable time sync
systemctl enable systemd-timesyncd

# Set locale
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "sv_SE.UTF-8 UTF-8" >> /etc/locale.gen
echo "ko_KR.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=ko_KR.UTF-8" > /etc/locale.conf

# Set hostname
echo "${HOSTNAME}" > /etc/hostname
cat > /etc/hosts <<EOF
127.0.0.1   localhost
::1         localhost
127.0.1.1   ${HOSTNAME}.localdomain ${HOSTNAME}
EOF

# Set passwords
echo "root:${ROOT_PASSWORD}" | chpasswd
useradd -m -G wheel -s /bin/bash ${USERNAME}
echo "${USERNAME}:${USER_PASSWORD}" | chpasswd
echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/wheel

# Install and configure bootloader
bootctl install

# Create bootloader configuration
mkdir -p /boot/loader/entries
cat > /boot/loader/loader.conf <<EOF
default arch.conf
timeout 0
console-mode max
editor no
EOF

# Create arch boot entry
cat > /boot/loader/entries/arch.conf <<EOF
title   Arch Linux
linux   /vmlinuz-linux
initrd  /intel-ucode.img
initrd  /initramfs-linux.img
options root=PARTUUID=$(blkid -s PARTUUID -o value ${ROOT_PART}) rw quiet
EOF

# Install additional packages in smaller groups
pacman -Sy --noconfirm
pacman -S --noconfirm xorg plasma plasma-desktop sddm
pacman -S --noconfirm firefox konsole dolphin
pacman -S --noconfirm noto-fonts-cjk adobe-source-han-sans-kr-fonts ttf-baekmuk
pacman -S --noconfirm gtk3 gtk2 qt5-base qt5-tools
pacman -S --noconfirm libappindicator-gtk3 libhangul anthy fcitx5 fcitx5-configtool fcitx5-hangul fcitx5-gtk fcitx5-qt
pacman -S --noconfirm efibootmgr sudo dosfstools mtools os-prober
pacman -S --noconfirm git automake autoconf libtool pkg-config

# Enable services
systemctl enable NetworkManager
systemctl enable sddm

# Configure Korean fonts and input method
cd /tmp
sudo -u ${USERNAME} bash <<EOF
# Install AUR fonts
git clone https://aur.archlinux.org/spoqa-han-sans.git
cd spoqa-han-sans
yes | makepkg -si --noconfirm
cd ..

for font in ttf-d2coding ttf-nanum ttf-nanumgothic_coding ttf-kopub ttf-kopubworld; do
    git clone https://aur.archlinux.org/\${font}.git
    cd \${font}
    yes | makepkg -si --noconfirm
    cd ..
done

# Configure fcitx5
mkdir -p /home/${USERNAME}/.config/autostart
cat > /home/${USERNAME}/.config/autostart/fcitx5.desktop <<EOL
[Desktop Entry]
Type=Application
Name=Fcitx5
Comment=Chinese, Japanese and Korean Input Method Framework
Exec=fcitx5
Icon=fcitx5
Categories=InputMethod;
X-GNOME-Autostart-Phase=Applications
X-GNOME-AutoRestart=true
X-GNOME-Autostart-enabled=true
EOL

cat > /home/${USERNAME}/.xprofile <<EOL
export GTK_IM_MODULE=fcitx5
export QT_IM_MODULE=fcitx5
export XMODIFIERS="@im=fcitx5"
fcitx5 &
EOL
EOF

# Generate initramfs
mkinitcpio -P
CHROOT_COMMANDS

# Unmount all partitions
umount -R /mnt

echo "Installation complete!"
echo ""
echo "IMPORTANT POST-INSTALLATION STEPS:"
echo "1. Power off the computer completely (not reboot)"
echo "2. Remove the USB drive"
echo "3. Enter BIOS setup and make these changes:"
echo "   a. Load BIOS defaults first"
echo "   b. Disable Secure Boot"
echo "   c. Set UEFI boot mode (disable CSM/Legacy completely)"
echo "   d. Set Boot Device Priority to ${DEVICE}"
echo ""
echo "After first boot:"
echo "1. Korean input can be toggled with Shift+Space"
echo "2. Run 'fcitx5-configtool' to configure input method"
echo "3. Use 'fcitx5 --debug &' if you need to troubleshoot"
