#!/bin/bash

if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

# Fixed disk setup
DEVICE="/dev/nvme0n1"
EFI_PART="${DEVICE}p1"
SWAP_PART="${DEVICE}p2"
ROOT_PART="${DEVICE}p3"

# Fixed credentials
USERNAME="crux"
USER_PASSWORD="1234"
ROOT_PASSWORD="1234"

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

# Create partitions with specific partition type GUIDs
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
mkdir -p /mnt/boot
mount ${EFI_PART} /mnt/boot
swapon ${SWAP_PART}

# Install essential packages
echo "Installing base system..."
pacstrap -K /mnt \
    base linux linux-firmware \
    base-devel intel-ucode \
    networkmanager vim efibootmgr \
    man-db man-pages texinfo \
    xorg plasma plasma-desktop plasma-wayland-session \
    plasma-pa plasma-nm plasma-workspace \
    kde-applications kio-extras \
    dolphin konsole kate \
    firefox \
    sudo dosfstools mtools \
    noto-fonts-cjk adobe-source-han-sans-kr-fonts ttf-baekmuk \
    gtk3 gtk2 qt6-base qt5-base \
    qt6-tools qt5-tools libappindicator-gtk3 \
    libhangul anthy \
    git automake autoconf libtool pkg-config \
    zsh htop wget curl powerdevil \
    discover packagekit-qt6 flatpak phonon-qt6-vlc \
    plasma-integration xdg-desktop-portal-kde

# Generate fstab
echo "Generating fstab..."
genfstab -U /mnt >> /mnt/etc/fstab

# Configure the system
arch-chroot /mnt /bin/bash <<CHROOT_COMMANDS
# Set timezone
ln -sf /usr/share/zoneinfo/Europe/Stockholm /etc/localtime
hwclock --systohc

# Enable time synchronization
systemctl enable systemd-timesyncd

# Set locale
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "sv_SE.UTF-8 UTF-8" >> /etc/locale.gen
echo "ko_KR.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=ko_KR.UTF-8" > /etc/locale.conf

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

# Install and configure systemd-boot
bootctl --path=/boot install

# Create boot loader configuration
mkdir -p /boot/loader/entries
cat > /boot/loader/loader.conf <<EOF
default arch
timeout 3
console-mode max
editor no
EOF

# Create arch boot entry
cat > /boot/loader/entries/arch.conf <<EOF
title   Arch Linux
linux   /vmlinuz-linux
initrd  /intel-ucode.img
initrd  /initramfs-linux.img
options root=PARTUUID=$(blkid -s PARTUUID -o value ${ROOT_PART}) rw
EOF

# Enable services
systemctl enable NetworkManager
systemctl enable sddm

# Install Korean fonts from AUR
cd /tmp
sudo -u ${USERNAME} bash <<EOF
git clone https://aur.archlinux.org/spoqa-han-sans.git
cd spoqa-han-sans
makepkg -si --noconfirm
cd ..

for font in ttf-d2coding ttf-nanum ttf-nanumgothic_coding ttf-kopub ttf-kopubworld; do
    git clone https://aur.archlinux.org/\${font}.git
    cd \${font}
    makepkg -si --noconfirm
    cd ..
done
EOF

# Install nimf input method
cd /tmp
wget https://gitlab.com/nimf-i18n/nimf/-/archive/master/nimf-master.tar.gz
tar xf nimf-master.tar.gz
cd nimf-master
./autogen.sh --disable-nimf-anthy --disable-nimf-m17n --disable-nimf-rime
make
make install
ldconfig

# Configure input method for user
sudo -u ${USERNAME} bash <<EOF
mkdir -p /home/${USERNAME}/.config/autostart
cat > /home/${USERNAME}/.config/autostart/nimf.desktop <<EOL
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
EOL

cat > /home/${USERNAME}/.xprofile <<EOL
export GTK_IM_MODULE=nimf
export QT_IM_MODULE=nimf
export XMODIFIERS="@im=nimf"
nimf &
EOL
EOF

# Generate initial ramdisk
mkinitcpio -P
CHROOT_COMMANDS

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
echo "2. Run 'nimf-settings' to configure input method"
echo "3. Use 'nimf --debug &' if you need to troubleshoot"
