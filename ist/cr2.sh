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
HOSTNAME="lia"

# Set partition variables based on device type
if [[ ${DEVICE} == *"nvme"* ]]; then
    EFI_PART="${DEVICE}p1"
    SWAP_PART="${DEVICE}p2"
    ROOT_PART="${DEVICE}p3"
else
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
pacman-key --init
pacman-key --populate archlinux
pacman -Sy archlinux-keyring

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
mount ${ROOT_PART} /mnt
mkdir -p /mnt/boot
mount ${EFI_PART} /mnt/boot
swapon ${SWAP_PART}

# Base packages that will be installed regardless of DE choice
BASE_PACKAGES="alsa-plugins alsa-utils autoconf automake \
    awesome-terminal-fonts bash-completion bind bison \
    blendr blueberry bluedevil blueman bluetui bluez bluez-libs bluez-utils \
    bridge-utils btrfs-progs celluloid cmatrix code cronie cups cups-pdf \
    dialog dmidecode dnsmasq dtc efibootmgr egl-wayland ethtool \
    exfat-utils flex fuse2 fuse3 fuseiso gamemode gcc gimp gparted \
    gptfdisk grub-customizer gst-libav gst-plugins-good gst-plugins-ugly \
    gtk2 gtk3 haveged htop hwdata hwloc jdk-openjdk jitterentropy \
    kitty libdvdcss libtool lshw lsof lutris lzop m4 make \
    neofetch nss-mdns ntfs-3g ntp openbsd-netcat openssh os-prober \
    p7zip papirus-icon-theme patch picom pkgconf powerline-fonts \
    pulseaudio pulseaudio-alsa pulseaudio-bluetooth python-notify2 \
    python-pip python-psutil python-pyqt5 qt5-base qt5-connectivity \
    qt5-sensors qt5-tools qemu sddm sddm-kcm snap-pac snapper steam \
    swtpm synergy terminus-font traceroute ttf-droid ttf-hack ttf-roboto \
    ufw unrar unzip virt-manager virt-viewer which wine-gecko wine-mono \
    winetricks xdg-user-dirs xdg-utils zip zsh zsh-autosuggestions \
    zsh-completions zsh-doc zsh-history-substring-search zsh-lovers \
    zsh-syntax-highlighting"

# Define desktop environment packages
AWESOME_PACKAGES="alsa-utils awesome dunst feh geany gsimplecal gtk2-perl htop \
    imagemagick jq lightdm lightdm-gtk-greeter lightdm-webkit-theme-litarvan \
    lightdm-webkit2-greeter lxappearance lxsession nano neofetch obconf \
    parcellite pavucontrol picom playerctl pulseaudio pulseaudio-alsa \
    qt5ct rofi rxvt-unicode scrot thunar thunar-archive-plugin \
    thunar-media-tags-plugin thunar-volman tumbler viewnior w3m \
    wireless_tools xautolock xclip xfce4-power-manager xsettingsd zsh"

CINNAMON_PACKAGES="cinnamon metacity gnome-shell"

DWM_PACKAGES="base-devel libx11 libxft libxinerama freetype2 kitty thunar xorg"

GNOME_PACKAGES="gnome gnome-shell gnome-extra"

HYPRLAND_PACKAGES="adobe-source-code-pro-fonts brightnessctl dunst ffmpeg \
    ffmpegthumbnailer grimblast-git hyprland hyprpicker-git \
    inter-font kitty neovim noise-suppression-for-voice \
    nordic-theme noto-fonts noto-fonts-emoji nwg-look-bin \
    otf-firamono-nerd otf-sora pamixer papirus-icon-theme \
    pavucontrol playerctl polkit-gnome rofi sddm-git starship \
    swaybg swaylock-effects thunar thunar-archive-plugin \
    ttf-comfortaa ttf-fantasque-nerd ttf-icomoon-feather \
    ttf-jetbrains-mono-nerd ttf-nerd-fonts-symbols-common tumbler \
    viewnior waybar-hyprland wf-recorder wl-clipboard wlogout"

KDE_PACKAGES="appstream-qt ark audiocd-kio bluedevil breeze breeze-gtk \
    deepin-qt6integration deepin-qt6platform-plugins discover doublecmd-qt6 \
    extra-cmake-modules fcitx-qt6 fcitx5-qt filelight futuresql \
    firefox dolphin gwenview kate \
    kate kde-applications kde-gtk-config kcodecs kcoreaddons \
    kdeplasma-addons kdsoap-qt6 kgamma5 kgpg kinfocenter konsole \
    kscreen kvantum kvantum-qt6 kwalletmanager kwayland-integration \
    layer-shell-qt lazarus-qt6 libfm-qt libportal-qt6 \
    libqaccessibilityclient-qt6 libqtxdg milou okular oxygen \
    packagekit-qt6 phonon-qt6 phonon-qt6-vlc plasma plasma-desktop \
    plasma-nm plasma-pa plasma-wayland-protocols plasma-wayland-session \
    plasma5support polkit-qt6 poppler-qt6 powerdevil print-manager \
    pulseaudio-bluetooth pyside6 python-pyqt6 python-pyqt6-3d \
    python-pyqt6-charts python-pyqt6-datavisualization python-pyqt6-graphs \
    python-pyqt6-networkauth python-pyqt6-sip python-pyqt6-webengine \
    python-qscintilla-qt6 qca-qt6 qcoro qgpgme-qt6 \
    qscintilla-qt6 qt6-3d qt6-5compat qt6-base qt6-charts \
    qt6-connectivity qt6-datavis3d qt6-declarative qt6-doc \
    qt6-examples qt6-graphs qt6-grpc qt6-httpserver qt6-imageformats \
    qt6-languageserver qt6-location qt6-lottie qt6-multimedia \
    qt6-multimedia-ffmpeg qt6-multimedia-gstreamer qt6-networkauth \
    qt6-positioning qt6-quick3d qt6-quick3dphysics qt6-quickeffectmaker \
    qt6-quicktimeline qt6-remoteobjects qt6-scxml qt6-sensors \
    qt6-serialbus qt6-serialport qt6-shadertools qt6-speech \
    qt6-svg qt6-tools qt6-translations qt6-virtualkeyboard \
    qt6-wayland qt6-webchannel qt6-webengine qt6-websockets \
    qt6-webview qt6-xcb-private-headers qt6ct qtpbfimageplugin-qt6 \
    qtkeychain-qt6 quazip-qt6 qxlsx-qt6 qxmpp-qt6 \
    sddm spectacle systemsettings xdg-desktop-portal-kde \
    xorg-xwayland zeroconf-ioslave"

# Function to display the menu
show_menu() {
    clear
    echo "==================================="
    echo "Select Desktop Environment"
    echo "==================================="
    echo "1) Awesome WM"
    echo "2) Cinnamon"
    echo "3) DWM"
    echo "4) GNOME"
    echo "5) Hyprland"
    echo "6) KDE Plasma"
    echo "==================================="
}

# Function to get selected packages
get_de_packages() {
    case $1 in
        1) echo "$AWESOME_PACKAGES";;
        2) echo "$CINNAMON_PACKAGES";;
        3) echo "$DWM_PACKAGES";;
        4) echo "$GNOME_PACKAGES";;
        5) echo "$HYPRLAND_PACKAGES";;
        6) echo "$KDE_PACKAGES";;
        *) echo "Invalid selection"; exit 1;;
    esac
}

# Main script
show_menu
read -p "Please select a desktop environment (1-6): " DE_CHOICE

# Get the selected DE packages
SELECTED_DE_PACKAGES=$(get_de_packages $DE_CHOICE)

# Install base system
echo "Installing base system..."
pacstrap -K /mnt base linux linux-firmware base-devel ${CPU_UCODE} \
    networkmanager terminus-font vim efibootmgr \
    pipewire pipewire-alsa pipewire-pulse pipewire-jack \
    reflector dhcpcd bash-completion \
    sudo btrfs-progs htop pacman-contrib pkgfile less \
    git curl wget zsh openssh man-db \
    xorg xorg-server xorg-apps xorg-drivers xorg-xkill xorg-xinit xterm \
    mesa libx11 libxft libxinerama freetype2 noto-fonts-emoji usbutils xdg-user-dirs \
    konsole  --noconfirm
    
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

# ----------------------------------------------------------------------------
clear
echo "ALL YOUR CHOICE OF PACKAGES ..."
# 데스크탑 및 필수 패키지 설치
pacman -Sy --noconfirm

# 데스크탑 환경
pacman -S --noconfirm $SELECTED_DE_PACKAGES

# -------------------------
# 글꼴 및 한국어 지원
pacman -S --noconfirm \
    noto-fonts-cjk noto-fonts-emoji \
    adobe-source-han-sans-kr-fonts adobe-source-han-serif-kr-fonts ttf-baekmuk \
    powerline-fonts nerd-fonts \
    ttf-lato

# 한국어 입력 및 개발 도구
pacman -S --noconfirm \
    libhangul fcitx5 fcitx5-configtool fcitx5-hangul fcitx5-gtk fcitx5-qt

# 시스템 도구
pacman -S --noconfirm \
    efibootmgr dosfstools mtools os-prober \
    zsh zsh-autosuggestions zsh-completions zsh-doc zsh-history-substring-search zsh-lovers zsh-syntax-highlighting zshdb \
    rsync inotify-tools btop tmux kitty

# 개발 및 그래픽 도구
pacman -S --noconfirm \
    vim git autoconf pkg-config \
    imagemagick krita gimp gimp-help-ko \
    tectonic texlive-basic texlive-bibtexextra texlive-bin \
    texlive-binextra texlive-context texlive-doc texlive-fontsextra \
    texlive-fontsrecommended texlive-fontutils texlive-formatsextra \
    texlive-games texlive-humanities texlive-langchinese \
    texlive-langcjk texlive-langkorean texstudio

# 프로그래밍 언어 및 도구
pacman -S --noconfirm \
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
    code vscode-css-languageserver vscode-html-languageserver vscode-json-languageserver

# 데이터베이스 관련 패키지
pacman -S --noconfirm \
    mariadb mariadb-clients mariadb-libs mariadb-lts mariadb-lts-clients mariadb-lts-libs \
    sqlite sqlite-analyzer sqlite-doc sqlite-tcl sqlitebrowser vsqlite++ wxsqlite3 ruby-sqlite3 php-sqlite \
    cowsql

# 응용 프로그램
pacman -S --noconfirm \
    firefox thunderbird thunderbird-i18n-ko \
    libreoffice-fresh libreoffice-fresh-ko \
    flatpak remmina opentofu chromium \
    describeimage fortunecraft llm-manager ollama ollama-docs

# Theme Plus
yay -S --noconfirm \
    autojump brave-bin bridge-utils dxvk-bin github-desktop-bin \
    lightly-git lightlyshaders-git mangohud mangohud-common \
    nerd-fonts-fira-code nordic-darker-standard-buttons-theme \
    nordic-darker-theme nordic-kde-git nordic-polar-theme \
    nordic-polar-theme-git nordic-theme ocs-url plymouth-git \
    sddm-nordic-theme-git snapper-gui-git ttf-meslo vde2 zoom 

# 시스템 설정
pacman -S --noconfirm \
    xdg-user-dirs xdg-utils \
    cups cups-pdf nss-mdns \
    gtk3 gtk2 qt5-base qt5-tools qt5-connectivity qt5-sensors\
    sddm sddm-kcm \
    hwloc hwdata lshw ethtool jitterentropy \
    blendr blueberry bluedevil blueman bluetui bluez \
    zsh zsh-autosuggestions zsh-completions zsh-doc zsh-history-substring-search zsh-lovers zsh-syntax-highlighting 

# ----------------------------------------------------------------------------
# Enable basic services
systemctl enable NetworkManager
systemctl enable sddm

# ------ post install
# Create directory for Korean setup scripts
mkdir -p /home/${USERNAME}/korean_install_script
cd /home/${USERNAME}/korean_install_script

# Set proper ownership
chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/korean_install_script

# Create the main installation script
cat > install_korean.sh << 'EOF'
#!/bin/bash

echo "==============================================="
echo "한국어 폰트 및 입력기 설치 스크립트"
echo "Korean Fonts and Input Method Installation"
echo "==============================================="

# Function to install yay if not present
install_yay() {
    if ! command -v yay &> /dev/null; then
        echo "Installing yay..."
        cd /tmp
        git clone https://aur.archlinux.org/yay.git
        cd yay
        makepkg -si --noconfirm
        cd ~
    fi
}

# Function to install official fonts
install_official_fonts() {
    echo "Installing official Korean fonts..."
    sudo pacman -S --noconfirm \
        noto-fonts-cjk \
        adobe-source-han-sans-kr-fonts \
        adobe-source-han-serif-kr-fonts \
        noto-fonts \
        ttf-dejavu
}

# Function to install AUR fonts
install_aur_fonts() {
    echo "Installing AUR Korean fonts..."
    yay -S --noconfirm \
        spoqa-han-sans \
        ttf-d2coding \
        ttf-nanum \
        ttf-nanumgothic_coding \
        ttf-kopub \
        ttf-kopubworld
}

# Function to install Korean input methods
install_input_methods() {
    echo "Installing Korean input methods..."
    sudo pacman -S --noconfirm \
        fcitx5 \
        fcitx5-gtk \
        fcitx5-qt \
        fcitx5-hangul \
        fcitx5-configtool

    # Create fcitx5 configuration directory
    mkdir -p ~/.config/fcitx5/conf
    mkdir -p ~/.config/environment.d

    # Add input method configuration
    echo "Input Method configuration..."
    cat > ~/.config/environment.d/envvars.conf << 'END'
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
END

    # Configure fcitx5 to use Hangul
    cat > ~/.config/fcitx5/profile << 'END'
[Groups/0]
# Group Name
Name=Default
# Layout
Default Layout=us
# Default Input Method
DefaultIM=hangul

[Groups/0/Items/0]
# Name
Name=keyboard-us
# Layout
Layout=

[Groups/0/Items/1]
# Name
Name=hangul
# Layout
Layout=

[GroupOrder]
0=Default
END
}

# Function to set up Korean locale
setup_locale() {
    echo "Setting up Korean locale..."
    sudo sed -i 's/#ko_KR.UTF-8/ko_KR.UTF-8/' /etc/locale.gen
    sudo locale-gen
}

# Main installation process
echo "Starting Korean language support installation..."

# Install base-devel and git if not present
sudo pacman -S --needed --noconfirm base-devel git

# Install yay
install_yay

# Install components
install_official_fonts
install_aur_fonts
install_input_methods
setup_locale

echo "==============================================="
echo "Installation completed!"
echo "Please log out and log back in for changes to take effect."
echo "After logging back in, run 'fcitx5' to start the input method."
echo "You can switch between English and Korean using Ctrl+Space"
echo "==============================================="
EOF

# Create uninstall script
cat > uninstall_korean.sh << 'EOF'
#!/bin/bash

echo "Uninstalling Korean language support..."

# Remove AUR fonts
yay -Rns --noconfirm \
    spoqa-han-sans \
    ttf-d2coding \
    ttf-nanum \
    ttf-nanumgothic_coding \
    ttf-kopub \
    ttf-kopubworld

# Remove official packages
sudo pacman -Rns --noconfirm \
    fcitx5 \
    fcitx5-gtk \
    fcitx5-qt \
    fcitx5-hangul \
    fcitx5-configtool \
    noto-fonts-cjk \
    adobe-source-han-sans-kr-fonts \
    adobe-source-han-serif-kr-fonts

# Remove configuration files
rm -rf ~/.config/fcitx5
rm -f ~/.config/environment.d/envvars.conf

echo "Korean language support has been removed."
EOF

# Make scripts executable
chmod +x install_korean.sh uninstall_korean.sh
chown ${USERNAME}:${USERNAME} install_korean.sh uninstall_korean.sh

echo "Korean installation scripts have been created in /home/${USERNAME}/korean_install_script/"
echo "To install Korean support, run: ./install_korean.sh"
echo "To uninstall Korean support, run: ./uninstall_korean.sh"

# ------

# Configure fcitx5
mkdir -p /home/${USERNAME}/.config/fcitx5/conf
mkdir -p /home/${USERNAME}/.config/autostart
mkdir -p /home/${USERNAME}/.local/share/fcitx5/themes

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

# Set ownership
chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/.config
chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}/.local
chown ${USERNAME}:${USERNAME} /home/${USERNAME}/.pam_environment

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