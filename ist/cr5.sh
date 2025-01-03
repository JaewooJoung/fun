#!/bin/bash

# Installation script title
clear
echo "==============================================="
echo "     Arch Linux Korean Installation Script"
echo "==============================================="

# Logging setup
exec > >(tee -i install.log)
exec 2>&1

# Check root privileges
if [ "$EUID" -ne 0 ]; then 
    echo "This script must be run as root. Please use 'sudo' or log in as the root user."
    exit 1
fi

# Display disk list
echo "Here are all the disks in the system:"
drives=($(lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. ' | awk '{print $2}'))
lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. '

# Disk selection
read -p "Enter the disk number to install (e.g., 1, 2): " choice

# Validate selection
if [[ $choice -gt 0 && $choice -le ${#drives[@]} ]]; then
    DEVICE="/dev/${drives[$choice-1]}"
    echo "Selected disk: $DEVICE"
else
    echo "Invalid selection. Exiting..."
    exit 1
fi

# CPU type selection
clear
echo "Select CPU type:"
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
        echo "Invalid choice. Defaulting to no microcode."
        CPU_UCODE=""
        ;;
esac

# Basic configuration
USERNAME="crux"
USER_PASSWORD="1234"
ROOT_PASSWORD="1234"
HOSTNAME="lia"

# Partition variables
if [[ ${DEVICE} == *"nvme"* ]]; then
    EFI_PART="${DEVICE}p1"
    SWAP_PART="${DEVICE}p2"
    ROOT_PART="${DEVICE}p3"
else
    EFI_PART="${DEVICE}1"
    SWAP_PART="${DEVICE}2"
    ROOT_PART="${DEVICE}3"
fi

# Display installation plan
clear
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
echo "WARNING: All data on the selected disk will be erased!"
echo "Press Ctrl+C within 5 seconds to cancel..."
sleep 5

# Initialize pacman
echo "Initializing pacman..."
pacman-key --init
pacman-key --populate archlinux
pacman -Sy archlinux-keyring --noconfirm

# Initialize disk
echo "Initializing disk..."
dd if=/dev/zero of=${DEVICE} bs=1M count=100
dd if=/dev/zero of=${DEVICE} bs=1M seek=$(( $(blockdev --getsz ${DEVICE}) / 2048 - 100)) count=100
wipefs -af ${DEVICE}
sgdisk -Z ${DEVICE}

# Create GPT and partitions
echo "Creating partitions..."
sgdisk -o ${DEVICE}
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

# Desktop environment packages
AWESOME_PACKAGES="awesome lightdm lightdm-gtk-greeter thunar lxsession rxvt-unicode alsa-utils pulseaudio pulseaudio-alsa wireless_tools zsh dunst rofi feh lightdm-webkit2-greeter lightdm-webkit-theme-litarvan lxappearance qt5ct gsimplecal xautolock xclip scrot thunar-archive-plugin thunar-volman thunar-media-tags-plugin tumbler jq w3m geany nano viewnior pavucontrol parcellite neofetch htop picom gtk2-perl xfce4-power-manager imagemagick playerctl xsettingsd obconf"

CINNAMON_PACKAGES="cinnamon metacity gnome-shell gnome-terminal gnome-control-center gnome-tweaks"

KDE_PACKAGES="plasma plasma-desktop plasma-wayland-session kde-applications appstream-qt \
    qt6-doc qt6-examples qt6-translations qt6-5compat qt6-base qt6-declarative \
    qt6-quick3d qt6-quicktimeline qt6-shadertools qt6-svg qt6-tools qt6-wayland \
    qt6-imageformats qt6-3d qt6-networkauth pyside6 poppler-qt6 kde-applications \
    sddm konsole dolphin ark gwenview kate okular plasma-pa plasma-nm \
    plasma-wayland-protocols discover packagekit-qt6 \
    qgpgme-qt6 qt6-charts qt6-datavis3d qt6-lottie qt6-scxml qt6-virtualkeyboard \
    qt6-connectivity qt6-multimedia qt6-remoteobjects qt6-sensors \
    qt6-serialbus qt6-serialport qt6-webchannel qt6-webengine \
    qt6-websockets qt6-webview qt6-positioning qt6-languageserver \
    qt6-httpserver qt6-multimedia-ffmpeg qt6-multimedia-gstreamer \
    qt6-quick3dphysics qt6-speech qt6-grpc qt6-location qt6-quickeffectmaker \
    python-pyqt6 python-pyqt6-networkauth python-pyqt6-3d python-pyqt6-sip \
    python-qscintilla-qt6 qscintilla-qt6 python-pyqt6-charts \
    python-pyqt6-datavisualization python-pyqt6-webengine \
    kvantum libfm-qt libqtxdg qt6ct qxlsx-qt6 qxmpp-qt6 polkit-qt6 \
    qt6-graphs phonon-qt6 phonon-qt6-vlc libqaccessibilityclient-qt6 \
    kdsoap-qt6 qtpbfimageplugin-qt6 doublecmd-qt6 lazarus-qt6 qt6pas \
    deepin-qt6platform-plugins deepin-qt6integration qt6-xcb-private-headers \
    plasma5support futuresql libportal-qt6 qcoro-qt6 qmltermwidget-qt6"

GNOME_PACKAGES="gnome gnome-shell gnome-terminal gnome-control-center gnome-tweaks gnome-extra gnome-tweak-tool gdm"

XFCE_PACKAGES="xfce4 xfce4-goodies lightdm lightdm-gtk-greeter network-manager-applet"

MATE_PACKAGES="mate mate-extra network-manager-applet"

# Desktop environment selection
clear
echo "==================================="
echo "Select Desktop Environment:"
echo "==================================="
echo "1) Awesome WM (Lightweight Window Manager)"
echo "2) Cinnamon (Modern & Clean)"
echo "3) KDE Plasma (Feature Rich)"
echo "4) GNOME (Intuitive)"
echo "5) XFCE (Light & Stable)"
echo "6) MATE (Traditional)"
echo "==================================="

read -p "Enter your choice (1-6): " DE_CHOICE

case $DE_CHOICE in
    1) DE_PACKAGES="$AWESOME_PACKAGES"
       DE_NAME="awesome"
       DM_SERVICE="lightdm"
       ;;
    2) DE_PACKAGES="$CINNAMON_PACKAGES"
       DE_NAME="cinnamon"
       DM_SERVICE="lightdm"
       ;;
    3) DE_PACKAGES="$KDE_PACKAGES"
       DE_NAME="plasma"
       DM_SERVICE="sddm"
       ;;
    4) DE_PACKAGES="$GNOME_PACKAGES"
       DE_NAME="gnome"
       DM_SERVICE="gdm"
       ;;
    5) DE_PACKAGES="$XFCE_PACKAGES"
       DE_NAME="xfce"
       DM_SERVICE="lightdm"
       ;;
    6) DE_PACKAGES="$MATE_PACKAGES"
       DE_NAME="mate"
       DM_SERVICE="lightdm"
       ;;
    *) echo "Invalid selection. Exiting..."
       exit 1
       ;;
esac

# Install base system and desktop environment
echo "Installing base system and selected desktop environment (${DE_NAME})..."
pacstrap -K /mnt base linux linux-firmware base-devel ${CPU_UCODE} \
    networkmanager vim efibootmgr \
    pipewire pipewire-alsa pipewire-pulse pipewire-jack \
    reflector dhcpcd bash-completion \
    sudo btrfs-progs htop pacman-contrib pkgfile less \
    git curl wget zsh openssh man-db \
    xorg xorg-server xorg-apps xorg-drivers xorg-xkill xorg-xinit xterm \
    mesa libx11 libxft libxinerama freetype2 noto-fonts-emoji usbutils xdg-user-dirs \
    konsole ${DE_PACKAGES} --noconfirm

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

# Create user and set passwords
echo "root:${ROOT_PASSWORD}" | chpasswd
useradd -m -G wheel,audio,video,optical,storage -s /bin/bash ${USERNAME}
echo "${USERNAME}:${USER_PASSWORD}" | chpasswd
echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/wheel

# Install and configure bootloader
bootctl install

mkdir -p /boot/loader/entries
cat > /boot/loader/loader.conf <<EOF
default arch.conf
timeout 0
console-mode max
editor no
EOF

cat > /boot/loader/entries/arch.conf <<EOF
title   Arch Linux
linux   /vmlinuz-linux
initrd  /${CPU_UCODE}.img
initrd  /initramfs-linux.img
options root=PARTUUID=$(blkid -s PARTUUID -o value ${ROOT_PART}) rw quiet
EOF

# Update system
pacman -Sy --noconfirm

# Install additional packages
pacman -S --noconfirm \
    noto-fonts-cjk noto-fonts-emoji \
    adobe-source-han-sans-kr-fonts adobe-source-han-serif-kr-fonts ttf-baekmuk \
    powerline-fonts nerd-fonts \
    ttf-lato \
    libhangul fcitx5 fcitx5-configtool fcitx5-hangul fcitx5-gtk fcitx5-qt \
    efibootmgr dosfstools mtools os-prober \
    zsh zsh-autosuggestions zsh-completions zsh-doc zsh-history-substring-search zsh-lovers zsh-syntax-highlighting zshdb \
    rsync inotify-tools btop tmux kitty \
    vim git autoconf pkg-config \
    imagemagick krita gimp gimp-help-ko \
    tectonic texlive-basic texlive-bibtexextra texlive-bin \
    texlive-binextra texlive-context texlive-doc texlive-fontsextra \
    texlive-fontsrecommended texlive-fontutils texlive-formatsextra \
    texlive-games texlive-humanities texlive-langchinese \
    texlive-langcjk texlive-langkorean texstudio \
    julia llvm-julia llvm-julia-libs \
    kotlin lua-stdlib \
    ruby neko \
    go go-tools \
    perl latex2html \
    nodejs nodejs-emojione nodejs-lts-hydrogen nodejs-lts-iron nodejs-material-design-icons nodejs-nopt \
    nodejs-source-map nodejs-yaml npm npm-check-updates \
    rust rust-analyzer rust-bindgen rust-kanban rust-musl rust-script rust-wasm rustic rustlings rustscan rustup \
    rustypaste rustypaste-cli \
    gcc gcc-libs gcc-ada gcc-fortran gcc-objc gcc-go lib32-gcc-libs libgccjit gcc-d gcc-m2 gcc-rust \
    code vscode-css-languageserver vscode-html-languageserver vscode-json-languageserver \
    mariadb mariadb-clients mariadb-libs mariadb-lts mariadb-lts-clients mariadb-lts-libs \
    sqlite sqlite-analyzer sqlite-doc sqlite-tcl sqlitebrowser vsqlite++ wxsqlite3 ruby-sqlite3 php-sqlite \
    cowsql \
    firefox thunderbird thunderbird-i18n-ko \
    libreoffice-fresh libreoffice-fresh-ko \
    flatpak remmina opentofu chromium \
    describeimage fortunecraft llm-manager ollama ollama-docs \
    xdg-user-dirs xdg-utils \
    cups cups-pdf nss-mdns \
    gtk3 gtk2 qt5-base qt5-tools qt5-connectivity qt5-sensors \
    sddm sddm-kcm \
    hwloc hwdata lshw ethtool jitterentropy \
    blendr blueberry bluedevil blueman bluetui bluez \
    zsh zsh-autosuggestions zsh-completions zsh-doc zsh-history-substring-search zsh-lovers zsh-syntax-highlighting

# Enable basic services
systemctl enable NetworkManager
systemctl enable ${DM_SERVICE}

# Configure fcitx5
mkdir -p /home/${USERNAME}/.config/fcitx5/conf
mkdir -p /home/${USERNAME}/.config/environment.d

cat > /home/${USERNAME}/.config/environment.d/fcitx5.conf <<EOF
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
EOF

cat > /home/${USERNAME}/.config/fcitx5/profile <<EOF
[Groups/0]
Name=Default
Default Layout=us
DefaultIM=hangul

[Groups/0/Items/0]
Name=keyboard-us
Layout=

[Groups/0/Items/1]
Name=hangul
Layout=

[GroupOrder]
0=Default
EOF

chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/.config

# Generate initramfs
mkinitcpio -P
CHROOT_COMMANDS

# Unmount partitions
umount -R /mnt

# Final message
clear
echo "Installation completed!"
echo ""
echo "Important post-installation steps:"
echo "1. Power off the computer completely (not reboot)"
echo "2. Remove the USB drive"
echo "3. Enter BIOS setup and make these changes:"
echo "   a. Load BIOS defaults first"
echo "   b. Disable Secure Boot"
echo "   c. Set UEFI boot mode (disable CSM/Legacy completely)"
echo "   d. Set Boot Device Priority to ${DEVICE}"
echo ""
echo "After first boot:"
echo "1. Set a password for the user '${USERNAME}' using the 'passwd' command."
echo "2. Korean input can be toggled with Shift+Space."
echo "3. Configure input method with 'fcitx5-configtool'."