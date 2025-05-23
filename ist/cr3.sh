#!/bin/bash

# 설치 스크립트 제목 출력
clear
echo "==============================================="
echo "     아치 리눅스 한국어 설치 스크립트"
echo "     Arch Linux Korean Installation Script"
echo "==============================================="

# root 권한 확인
if [ "$EUID" -ne 0 ]; then 
    echo "root 권한으로 실행해주세요."
    echo "Please run as root"
    exit 1
fi

# 디스크 목록 표시
echo "시스템의 모든 디스크 목록입니다:"
echo "Here are all the disks in the system:"
drives=($(lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. ' | awk '{print $2}'))
lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. '

# 디스크 선택
read -p "설치할 디스크 번호를 입력하세요 (예: 1, 2): " choice

# 선택 검증
if [[ $choice -gt 0 && $choice -le ${#drives[@]} ]]; then
    DEVICE="/dev/${drives[$choice-1]}"
    echo "선택된 디스크: $DEVICE"
else
    echo "잘못된 선택입니다. 종료합니다..."
    exit 1
fi

# CPU 종류 선택
echo "CPU 종류를 선택하세요:"
echo "1. Intel"
echo "2. AMD"
read -p "선택하세요 (1 또는 2): " cpu_choice

case $cpu_choice in
    1)
        CPU_UCODE="intel-ucode"
        ;;
    2)
        CPU_UCODE="amd-ucode"
        ;;
    *)
        echo "잘못된 선택입니다. 종료합니다..."
        exit 1
        ;;
esac

# 기본 설정
USERNAME="user"
USER_PASSWORD="1234"
ROOT_PASSWORD="1234"
HOSTNAME="archlinux"

# 파티션 변수 설정
if [[ ${DEVICE} == *"nvme"* ]]; then
    EFI_PART="${DEVICE}p1"
    SWAP_PART="${DEVICE}p2"
    ROOT_PART="${DEVICE}p3"
else
    EFI_PART="${DEVICE}1"
    SWAP_PART="${DEVICE}2"
    ROOT_PART="${DEVICE}3"
fi

# 설치 계획 표시
echo "==========================="
echo "설치 계획:"
echo "디바이스: ${DEVICE}"
echo "EFI: ${EFI_PART}"
echo "스왑: ${SWAP_PART}"
echo "루트: ${ROOT_PART}"
echo "사용자명: ${USERNAME}"
echo "호스트명: ${HOSTNAME}"
echo "CPU 종류: ${CPU_UCODE}"
echo "==========================="
echo "경고: 선택한 디스크의 모든 데이터가 삭제됩니다!"
echo "취소하려면 5초 내에 Ctrl+C를 누르세요..."
sleep 5

# pacman 초기화
pacman-key --init
pacman-key --populate archlinux
pacman -Sy archlinux-keyring

# 디스크 초기화
echo "디스크 초기화 중..."
dd if=/dev/zero of=${DEVICE} bs=1M count=100
dd if=/dev/zero of=${DEVICE} bs=1M seek=$(( $(blockdev --getsz ${DEVICE}) / 2048 - 100)) count=100
wipefs -af ${DEVICE}
sgdisk -Z ${DEVICE}

# GPT 생성
sgdisk -o ${DEVICE}

# 파티션 생성
sgdisk -n 1:0:+1G -t 1:ef00 -c 1:"EFI System Partition" ${DEVICE}
sgdisk -n 2:0:+8G -t 2:8200 -c 2:"Linux swap" ${DEVICE}
sgdisk -n 3:0:0 -t 3:8300 -c 3:"Linux root" ${DEVICE}

# 커널이 파티션 테이블을 인식하도록 대기
sleep 3
partprobe ${DEVICE}
sleep 3

# 파티션 포맷
echo "파티션 포맷 중..."
mkfs.fat -F 32 ${EFI_PART}
mkswap ${SWAP_PART}
mkfs.ext4 ${ROOT_PART}

# 파티션 마운트
echo "파티션 마운트 중..."
mount ${ROOT_PART} /mnt
mkdir -p /mnt/boot
mount ${EFI_PART} /mnt/boot
swapon ${SWAP_PART}

# 데스크톱 환경 패키지 정의
AWESOME_PACKAGES="alsa-utils awesome dunst feh geany gsimplecal gtk2-perl htop imagemagick jq lightdm lightdm-gtk-greeter lxappearance lxsession nano neofetch obconf parcellite pavucontrol picom playerctl pulseaudio pulseaudio-alsa qt5ct rofi rxvt-unicode scrot thunar thunar-archive-plugin thunar-media-tags-plugin thunar-volman tumbler viewnior w3m wireless_tools xautolock xclip xfce4-power-manager xsettingsd"

CINNAMON_PACKAGES="cinnamon metacity gnome-shell gnome-terminal gnome-control-center gnome-tweaks"

KDE_PACKAGES="plasma plasma-desktop plasma-wayland-session kde-applications sddm konsole dolphin ark gwenview kate okular plasma-pa plasma-nm plasma-wayland-protocols discover packagekit-qt6"

GNOME_PACKAGES="gnome gnome-shell gnome-extra gnome-tweak-tool gdm"

XFCE_PACKAGES="xfce4 xfce4-goodies lightdm lightdm-gtk-greeter network-manager-applet"

MATE_PACKAGES="mate mate-extra network-manager-applet"

# 데스크톱 환경 선택 메뉴 표시
echo "==================================="
echo "데스크톱 환경을 선택하세요:"
echo "Select Desktop Environment:"
echo "==================================="
echo "1) Awesome WM (가벼운 창 관리자/Lightweight)"
echo "2) Cinnamon (모던하고 깔끔한/Modern & Clean)"
echo "3) KDE Plasma (풍부한 기능/Feature Rich)"
echo "4) GNOME (직관적인/Intuitive)"
echo "5) XFCE (가볍고 안정적/Light & Stable)"
echo "6) MATE (전통적인/Traditional)"
echo "==================================="

read -p "번호를 선택하세요 (1-6): " DE_CHOICE

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
    *) echo "잘못된 선택입니다. 종료합니다..."
       exit 1
       ;;
esac

# 기본 패키지 설치
echo "기본 시스템 및 선택한 데스크톱 환경(${DE_NAME}) 설치 중..."
pacstrap -K /mnt base linux linux-firmware base-devel ${CPU_UCODE} \
    networkmanager vim efibootmgr ${DE_PACKAGES} \
    pipewire pipewire-alsa pipewire-pulse pipewire-jack \
    reflector dhcpcd bash-completion \
    sudo btrfs-progs htop pacman-contrib pkgfile less \
    git curl wget zsh openssh man-db \
    xorg xorg-server xorg-apps xorg-drivers xorg-xkill xorg-xinit xterm \
    mesa libx11 libxft libxinerama freetype2 noto-fonts-emoji usbutils xdg-user-dirs \
    konsole --noconfirm

# fstab 생성
echo "fstab 생성 중..."
genfstab -U /mnt >> /mnt/etc/fstab

# 시스템 설정
arch-chroot /mnt /bin/bash <<CHROOT_COMMANDS
# 시간대 설정
ln -sf /usr/share/zoneinfo/Europe/Stockholm /etc/localtime
hwclock --systohc

# 시간 동기화 활성화
systemctl enable systemd-timesyncd

# 로케일 설정
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "sv_SE.UTF-8 UTF-8" >> /etc/locale.gen
echo "ko_KR.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=ko_KR.UTF-8" > /etc/locale.conf

# 호스트명 설정
echo "${HOSTNAME}" > /etc/hostname
cat > /etc/hosts <<EOF
127.0.0.1   localhost
::1         localhost
127.0.1.1   ${HOSTNAME}.localdomain ${HOSTNAME}
EOF

# 사용자 생성 및 비밀번호 설정
echo "root:${ROOT_PASSWORD}" | chpasswd
useradd -m -G wheel,audio,video,optical,storage -s /bin/bash ${USERNAME}
echo "${USERNAME}:${USER_PASSWORD}" | chpasswd
echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/wheel

# 부트로더 설치 및 설정
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

# 한국어 환경 설정
pacman -Sy --noconfirm \
    noto-fonts-cjk noto-fonts-emoji \
    adobe-source-han-sans-kr-fonts adobe-source-han-serif-kr-fonts \
    fcitx5 fcitx5-configtool fcitx5-gtk fcitx5-qt fcitx5-hangul \
    firefox-i18n-ko thunderbird-i18n-ko \
    libreoffice-fresh libreoffice-fresh-ko

# 기본 서비스 활성화
systemctl enable NetworkManager
systemctl enable ${DM_SERVICE}

# fcitx5 설정
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

# initramfs 생성
mkinitcpio -P
CHROOT_COMMANDS

# 파티션 언마운트
umount -R /mnt

echo "설치가 완료되었습니다!"
echo ""
echo "중요한 설치 후 단계:"
echo "1. 컴퓨터를 완전히 종료하세요 (재부팅 아님)"
echo "2. USB 드라이브를 제거하세요"
echo "3. BIOS 설정에서 다음을 변경하세요:"
echo "   a. BIOS 기본값을 먼저 로드"
echo "   b. 보안 부팅(Secure Boot) 비활성화"
echo "   c. UEFI 부팅 모드 설정(CSM/Legacy 완전히 비활성화)"
echo "   d. 부팅 장치 우선순위를 ${DEVICE}로 설정"
echo ""
echo "첫 부팅 후:"
echo "1. 한글 입력은 Shift+Space로 전환할 수 있습니다"
echo "2. 입력기 설정은 'fcitx5-configtool'로 할 수 있습니다"
echo "3. 문제해결이 필요하면 'fcitx5 --debug &'를 실행하세요"