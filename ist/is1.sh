#!/bin/bash

if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

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

# Show CPU type selection
echo "Select your CPU type:"
echo "1. Intel"
echo "2. AMD"
read -p "Enter your choice (1 or 2): " cpu_choice

case $cpu_choice in
    1)
        CPU_UCODE="intel-ucode"
        ;;
    2)
        CPU_UCODE="amd-ucode"
        ;;
    *)
        echo "Invalid choice. Exiting..."
        exit 1
        ;;
esac

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
echo "CPU Type: ${CPU_UCODE}"
echo "==========================="
echo "WARNING: This will COMPLETELY ERASE the selected drive!"
echo "Press Ctrl+C within 5 seconds to cancel..."
sleep 5

# Initialize pacman
pacman-key --init || { echo "Failed to initialize pacman-key"; exit 1; }
pacman-key --populate archlinux || { echo "Failed to populate pacman-key"; exit 1; }
pacman -Sy archlinux-keyring || { echo "Failed to sync archlinux-keyring"; exit 1; }

# Clean disk
echo "Cleaning disk..."
dd if=/dev/zero of=${DEVICE} bs=1M count=100 || { echo "Failed to clean disk"; exit 1; }
dd if=/dev/zero of=${DEVICE} bs=1M seek=$(( $(blockdev --getsz ${DEVICE}) / 2048 - 100)) count=100 || { echo "Failed to clean disk"; exit 1; }
wipefs -af ${DEVICE} || { echo "Failed to wipe filesystem signatures"; exit 1; }
sgdisk -Z ${DEVICE} || { echo "Failed to zero GPT"; exit 1; }

# Create new GPT
sgdisk -o ${DEVICE} || { echo "Failed to create new GPT"; exit 1; }

# Create partitions
sgdisk -n 1:0:+1G -t 1:ef00 -c 1:"EFI System Partition" ${DEVICE} || { echo "Failed to create EFI partition"; exit 1; }
sgdisk -n 2:0:+8G -t 2:8200 -c 2:"Linux swap" ${DEVICE} || { echo "Failed to create swap partition"; exit 1; }
sgdisk -n 3:0:0 -t 3:8300 -c 3:"Linux root" ${DEVICE} || { echo "Failed to create root partition"; exit 1; }

# Wait for kernel to update partition table
sleep 3
partprobe ${DEVICE} || { echo "Failed to update partition table"; exit 1; }
sleep 3

# Format partitions
echo "Formatting partitions..."
mkfs.fat -F 32 ${EFI_PART} || { echo "Failed to format EFI partition"; exit 1; }
mkswap ${SWAP_PART} || { echo "Failed to create swap partition"; exit 1; }
mkfs.ext4 ${ROOT_PART} || { echo "Failed to format root partition"; exit 1; }

# Mount partitions
echo "Mounting partitions..."
mount ${ROOT_PART} /mnt || { echo "Failed to mount root partition"; exit 1; }
mkdir -p /mnt/boot
mount ${EFI_PART} /mnt/boot || { echo "Failed to mount EFI partition"; exit 1; }
swapon ${SWAP_PART} || { echo "Failed to enable swap"; exit 1; }

# Install base system
echo "Installing base system..."
pacstrap -K /mnt base linux linux-firmware base-devel ${CPU_UCODE} networkmanager --noconfirm || { echo "Failed to install base system"; exit 1; }

# Generate fstab
echo "Generating fstab..."
genfstab -U /mnt >> /mnt/etc/fstab || { echo "Failed to generate fstab"; exit 1; }

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

# Set passwords and user groups
echo "root:${ROOT_PASSWORD}" | chpasswd
useradd -m -G wheel,vboxusers -s /bin/bash ${USERNAME}
echo "${USERNAME}:${USER_PASSWORD}" | chpasswd
echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/wheel

# Install and configure bootloader
bootctl install || { echo "Failed to install bootloader"; exit 1; }

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
initrd  /${CPU_UCODE}.img
initrd  /initramfs-linux.img
options root=PARTUUID=$(blkid -s PARTUUID -o value ${ROOT_PART}) rw quiet
EOF

# Install additional packages in smaller groups
pacman -Sy --noconfirm || { echo "Failed to sync package database"; exit 1; }
pacman -S --noconfirm xorg plasma plasma-desktop sddm sddm-kcm || { echo "Failed to install desktop environment"; exit 1; }
pacman -S --noconfirm qt5-graphicaleffects qt5-quickcontrols2 qt5-svg || { echo "Failed to install Qt5 packages"; exit 1; }
pacman -S --noconfirm firefox konsole dolphin || { echo "Failed to install additional applications"; exit 1; }
pacman -S --noconfirm noto-fonts-cjk adobe-source-han-sans-kr-fonts ttf-baekmuk || { echo "Failed to install fonts"; exit 1; }
pacman -S --noconfirm gtk3 gtk2 qt5-base qt5-tools qt6-tools || { echo "Failed to install GUI toolkits"; exit 1; }
pacman -S --noconfirm libappindicator-gtk3 libhangul anthy fcitx5 fcitx5-configtool fcitx5-hangul fcitx5-gtk fcitx5-qt || { echo "Failed to install input method packages"; exit 1; }
pacman -S --noconfirm efibootmgr sudo dosfstools mtools os-prober || { echo "Failed to install essential tools"; exit 1; }
pacman -S --noconfirm git automake autoconf libtool pkg-config || { echo "Failed to install development tools"; exit 1; }
pacman -S --noconfirm zsh htop wget curl || { echo "Failed to install user utilities"; exit 1; }
pacman -S --noconfirm powerdevil || { echo "Failed to install power management tool"; exit 1; }
pacman -S --noconfirm discover packagekit-qt6 flatpak phonon-qt6-vlc || { echo "Failed to install additional software management tools"; exit 1; }
pacman -S --noconfirm virtualbox virtualbox-host-dkms dkms linux-headers || { echo "Failed to install VirtualBox tools"; exit 1; }

# Enable services
systemctl enable vboxservice || { echo "Failed to enable VirtualBox service"; exit 1; }
systemctl enable NetworkManager || { echo "Failed to enable NetworkManager"; exit 1; }
systemctl enable sddm || { echo "Failed to enable SDDM"; exit 1; }

# Enable and configure display manager
mkdir -p /etc/sddm.conf.d
cat > /etc/sddm.conf.d/conf.d <<EOF
[General]
DisplayServer=X11

[Theme]
Current=breeze

[Users]
MaximumUid=60000
MinimumUid=1000
EOF

# Enable essential services
systemctl enable bluetooth || { echo "Failed to enable Bluetooth service"; exit 1; }
systemctl enable cups.service || { echo "Failed to enable CUPS service"; exit 1; }

# Configure Korean fonts and input method, install VSCode and Julia
cd /tmp
sudo -u ${USERNAME} bash <<EOF
# Install AUR fonts
git clone https://aur.archlinux.org/spoqa-han-sans.git
cd spoqa-han-sans
yes | makepkg -si --noconfirm || { echo "Failed to install Spoqa Han Sans"; exit 1; }
cd ..

# Install Visual Studio Code
git clone https://aur.archlinux.org/visual-studio-code-bin.git
cd visual-studio-code-bin
yes | makepkg -si --noconfirm || { echo "Failed to install Visual Studio Code"; exit 1; }
cd ..

# Install Juliaup
git clone https://aur.archlinux.org/juliaup.git
cd juliaup
yes | makepkg -si --noconfirm || { echo "Failed to install Juliaup"; exit 1; }
cd ..

for font in ttf-d2coding ttf-nanum ttf-nanumgothic_coding ttf-kopub ttf-kopubworld; do
    git clone https://aur.archlinux.org/\${font}.git
    cd \${font}
    yes | makepkg -si --noconfirm || { echo "Failed to install font: \${font}"; exit 1; }
    cd ..
done

# Install fcitx5 with all necessary components
pacman -S --noconfirm \
    fcitx5 \
    fcitx5-configtool \
    fcitx5-gtk \
    fcitx5-qt \
    fcitx5-hangul \
    kcm-fcitx5 \
    fcitx5-material-color || { echo "Failed to install fcitx5 components"; exit 1; }

# Configure fcitx5 for the user
sudo -u ${USERNAME} bash <<EOF
mkdir -p /home/${USERNAME}/.config/fcitx5/conf
mkdir -p /home/${USERNAME}/.config/autostart

# Create fcitx5 autostart entry
cat > /home/${USERNAME}/.config/autostart/fcitx5.desktop <<EOL
[Desktop Entry]
Name=Fcitx 5
GenericName=Input Method
Comment=Start Input Method
Exec=fcitx5
Icon=fcitx
Terminal=false
Type=Application
Categories=System;Utility;
X-GNOME-Autostart-Phase=Applications
X-GNOME-AutoRestart=false
X-GNOME-Autostart-Notify=false
X-KDE-autostart-after=panel
EOL

# Configure environment variables
cat > /home/${USERNAME}/.pam_environment <<EOL
GTK_IM_MODULE DEFAULT=fcitx5
QT_IM_MODULE  DEFAULT=fcitx5
XMODIFIERS    DEFAULT=\@im=fcitx5
EOL

# Configure hangul
cat > /home/${USERNAME}/.config/fcitx5/config <<EOL
[Hotkey]
# Enumerate when press trigger key repeatedly
EnumerateWithTriggerKeys=True
# Temporally switch between first and current Input Method
AltTriggerKeys=
# Enumerate Input Method Forward
EnumerateForwardKeys=
# Enumerate Input Method Backward
EnumerateBackwardKeys=
# Skip first input method while enumerating
EnumerateSkipFirst=False
# Toggle embedded preedit
TogglePreedit=

[Hotkey/TriggerKeys]
0=Shift+space

[Hotkey/EnumerateGroupForwardKeys]
0=Super+space

[Hotkey/EnumerateGroupBackwardKeys]
0=Shift+Super+space
EOL

chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/.config
chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.pam_environment
EOF
EOF

# Generate initramfs
mkinitcpio -P || { echo "Failed to generate initramfs"; exit 1; }

# Unmount all partitions
umount -R /mnt || { echo "Failed to unmount partitions"; exit 1; }

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
