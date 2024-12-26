#!/bin/bash

if [ "$EUID" -ne 0 ]; then 
    echo "Please run as root"
    exit 1
fi

# 1. 모든 하드 드라이브 목록 출력
echo "Here are all the hard drives in the system:"
drives=($(lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. ' | awk '{print $2}'))  # 드라이브 이름을 배열에 저장
lsblk -d -o NAME,SIZE,TYPE | grep disk | nl -w2 -s'. '  # 번호 매기기 출력

# 2. 드라이브 선택
read -p "Please enter the number of the desired hard drive (e.g., 1, 2, etc.): " choice

# 3. 선택한 드라이브 확인 및 출력
if [[ $choice -gt 0 && $choice -le ${#drives[@]} ]]; then
    DEVICE="/dev/${drives[$choice-1]}"  # 선택한 드라이브를 DEVICE 변수로 설정
    echo "Selected hard drive: $DEVICE"
else
    echo "Invalid number. Exiting..."
    exit 1  # 잘못된 입력 시 스크립트 종료
fi

EFI_PART="${DEVICE}p1"
SWAP_PART="${DEVICE}p2"
ROOT_PART="${DEVICE}p3"

# 고정된 자격 증명
USERNAME="crux"
USER_PASSWORD="1234"
ROOT_PASSWORD="1234"
HOSTNAME="lisa"  # 호스트 이름 추가

# 파티션 변수 설정
EFI_PART="${DEVICE}p1"
SWAP_PART="${DEVICE}p2"
ROOT_PART="${DEVICE}p3"

echo "WARNING: This will COMPLETELY ERASE all data on ${DEVICE}. Are you sure? (y/N)"
read confirm
if [ "$confirm" != "y" ]; then
    echo "Aborted"
    exit 1
fi

# 디스크 완전 초기화
echo "Cleaning disk..."
dd if=/dev/zero of=${DEVICE} bs=1M count=100
dd if=/dev/zero of=${DEVICE} bs=1M seek=$(( $(blockdev --getsz ${DEVICE}) / 2048 - 100)) count=100
wipefs -af ${DEVICE}
sgdisk -Z ${DEVICE}

# 새로운 GPT 생성
sgdisk -o ${DEVICE}

# 특정 파티션 유형 GUID로 파티션 생성
sgdisk -n 1:0:+1G -t 1:ef00 -c 1:"EFI System Partition" ${DEVICE}
sgdisk -n 2:0:+8G -t 2:8200 -c 2:"Linux swap" ${DEVICE}
sgdisk -n 3:0:0 -t 3:8300 -c 3:"Linux root" ${DEVICE}

# 커널이 파티션 테이블을 업데이트할 때까지 대기
sleep 3
partprobe ${DEVICE}
sleep 3

# 파티션 포맷
echo "Formatting partitions..."
mkfs.fat -F 32 ${EFI_PART}
mkswap ${SWAP_PART}
mkfs.ext4 ${ROOT_PART}

# 파티션 마운트
echo "Mounting partitions..."
mount ${ROOT_PART} /mnt
mkdir -p /mnt/boot
mount ${EFI_PART} /mnt/boot
swapon ${SWAP_PART}

# 필수 패키지 설치
echo "Installing base system..."
pacstrap -K /mnt base linux linux-firmware \
    base-devel intel-ucode \
    networkmanager efibootmgr \
    base-devel intel-ucode rust \
    xorg plasma plasma-desktop sddm \
    firefox konsole dolphin \
    sudo dosfstools mtools os-prober \
    noto-fonts-cjk adobe-source-han-sans-kr-fonts ttf-baekmuk \
    gtk3 gtk2 qt5-base qt5-tools \
    libappindicator-gtk3 libhangul anthy \
    git automake autoconf libtool pkg-config


# fstab 생성
echo "Generating fstab..."
genfstab -U /mnt >> /mnt/etc/fstab

# 시스템 구성
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

# 호스트 이름 설정
echo "${HOSTNAME}" > /etc/hostname
cat > /etc/hosts <<EOF
127.0.0.1   localhost
::1         localhost
127.0.1.1   ${HOSTNAME}.localdomain ${HOSTNAME}
EOF

# 비밀번호 설정
echo "root:${ROOT_PASSWORD}" | chpasswd
# useradd -m -G wheel,docker -s /bin/bash ${USERNAME}  # docker 그룹 추가
echo "${USERNAME}:${USER_PASSWORD}" | chpasswd
echo "%wheel ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/wheel

# systemd-boot 설치 및 구성
bootctl --path=/boot install

# 부트 로더 구성 생성
mkdir -p /boot/loader/entries
cat > /boot/loader/loader.conf <<EOF
default arch
timeout 3
console-mode max
editor no
EOF

# arch 부트 항목 생성
cat > /boot/loader/entries/arch.conf <<EOF
title   Arch Linux
linux   /vmlinuz-linux
initrd  /intel-ucode.img
initrd  /initramfs-linux.img
options root=PARTUUID=$(blkid -s PARTUUID -o value ${ROOT_PART}) rw
EOF

# 서비스 활성화
systemctl enable NetworkManager
systemctl enable sddm

# AUR에서 한국어 폰트 설치
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

# 사용자에 대한 fcitx5 입력기 구성
sudo -u ${USERNAME} bash <<EOF
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

# 초기 ramdisk 생성
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
echo "2. Run 'fcitx5-configtool' to configure input method"
echo "3. Use 'fcitx5 --debug &' if you need to troubleshoot"
