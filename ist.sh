#!/bin/bash

if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

# Disk setup
DEVICE="/dev/nvme0n1"
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

# Create partitions with specific partition type GUIDs
sgdisk -n 1:0:+1G -t 1:ef00 -c 1:"EFI System Partition" ${DEVICE}    # Larger EFI partition
sgdisk -n 2:0:+8G -t 2:8200 -c 2:"Linux swap" ${DEVICE}             # Swap partition
sgdisk -n 3:0:0 -t 3:8300 -c 3:"Linux root" ${DEVICE}               # Root partition

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

# Install essential packages (removed grub)
echo "Installing base system..."
pacstrap -K /mnt base linux linux-firmware \
    base-devel intel-ucode rust \
    networkmanager vim efibootmgr \
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
arch-chroot /mnt /bin/bash <<'CHROOT_COMMANDS'
# Set timezone
ln -sf /usr/share/zoneinfo/Europe/Stockholm /etc/localtime
hwclock --systohc

# Set locale
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "sv_SE.UTF-8 UTF-8" >> /etc/locale.gen
echo "ko_KR.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=ko_KR.UTF-8" > /etc/locale.conf

# Set hostname
echo "lisa" > /etc/hostname
cat > /etc/hosts <<EOF
127.0.0.1   localhost
::1         localhost
127.0.1.1   lisa.localdomain lisa
EOF

# Set root password
echo "root:1234" | chpasswd

# Create user
useradd -m -G wheel -s /bin/bash crux
echo "crux:1234" | chpasswd
echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/wheel

# Install and configure systemd-boot
bootctl --path=/boot/efi install

# Create boot loader configuration
mkdir -p /boot/efi/loader/entries
cat > /boot/efi/loader/loader.conf <<EOF
default arch
timeout 3
console-mode max
editor no
EOF

# Create arch boot entry
cat > /boot/efi/loader/entries/arch.conf <<EOF
title   Arch Linux
linux   /vmlinuz-linux
initrd  /intel-ucode.img
initrd  /initramfs-linux.img
options root=PARTUUID=$(blkid -s PARTUUID -o value ${ROOT_PART}) rw
EOF

# Enable services
systemctl enable NetworkManager
systemctl enable sddm

# Generate initial ramdisk
mkinitcpio -P

# Install juliaup from AUR
echo "Installing juliaup..."
cd /tmp
sudo -u ${USERNAME} git clone https://aur.archlinux.org/juliaup.git
cd juliaup
sudo -u ${USERNAME} makepkg -si --noconfirm
cd /

# Install Julia using juliaup (as user)
echo "Setting up Julia..."
sudo -u ${USERNAME} bash <<EOF
juliaup add release
juliaup default release
EOF

# Install Korean IME (nimf) and fonts
echo "Installing Korean fonts and input method..."
cd /tmp

# Install Korean fonts from AUR
FONT_PACKAGES=(
    "spoqa-han-sans"
    "ttf-d2coding"
    "ttf-nanum"
    "ttf-nanumgothic_coding"
    "ttf-kopub"
    "ttf-kopubworld"
)

for font in "${FONT_PACKAGES[@]}"; do
    echo "Installing $font..."
    sudo -u ${USERNAME} git clone https://aur.archlinux.org/${font}.git
    cd ${font}
    sudo -u ${USERNAME} makepkg -si --noconfirm
    cd ..
done

# Install nimf from source
echo "Installing nimf..."
wget https://gitlab.com/nimf-i18n/nimf/-/archive/master/nimf-master.tar.gz
tar xf nimf-master.tar.gz
cd nimf-master
./autogen.sh --disable-nimf-anthy --disable-nimf-m17n --disable-nimf-rime
make
make install
ldconfig

# Configure input method settings for the user
sudo -u ${USERNAME} cat > /home/${USERNAME}/.xprofile <<EOF
export GTK_IM_MODULE=nimf
export QT4_IM_MODULE="nimf"
export QT_IM_MODULE=nimf
export XMODIFIERS="@im=nimf"
nimf &
EOF

# Set proper permissions for the .xprofile
chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.xprofile

# Update font cache
fc-cache -fv

# Create nimf autostart for the user
sudo -u ${USERNAME} mkdir -p /home/${USERNAME}/.config/autostart
sudo -u ${USERNAME} cat > /home/${USERNAME}/.config/autostart/nimf.desktop <<EOF
[Desktop Entry]
Type=Application
Name=Nimf
Comment=Korean Input Method
Exec=nimf
Icon=nimf
Categories=System;
X-GNOME-Autostart-Phase=Applications
X-GNOME-AutoRestart=true
X-GNOME-Autostart-enabled=true
EOF

# Create nimf configuration directory
sudo -u ${USERNAME} mkdir -p /home/${USERNAME}/.config/nimf

# Configure nimf settings
sudo -u ${USERNAME} cat > /home/${USERNAME}/.config/nimf/nimf.conf <<EOF
[Nimf]
hidden-on-launch=false
xkb-options=
default-engine=nimf-system-keyboard
default-locale=ko_KR.UTF-8
gtk-im-module=nimf
qt4-im-module=nimf
qt5-im-module=nimf
xim-name=nimf
use-singleton=true
EOF

CHROOT_COMMANDS

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
echo "      - First: nvme0n1"
echo "      - Disable or remove other boot options"
echo "   e. Save changes and exit"
echo ""
echo "Login credentials:"
echo "Username: crux"
echo "Password: 1234"
