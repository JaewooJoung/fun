#!/bin/bash

# Check for root privileges
if [ "$EUID" -ne 0 ]; then
    echo "이 스크립트는 root 권한으로 실행되어야 합니다."
    exit 1
fi

# Function for error handling
handle_error() {
    echo "오류가 발생했습니다: $1"
    exit 1
}

# Update packages
echo "패키지를 업데이트합니다..."
apt update || handle_error "패키지 업데이트 실패"
apt upgrade -y || handle_error "패키지 업그레이드 실패"

# Install essential packages
echo "필수 패키지를 설치합니다..."
apt install -y apt-transport-https ca-certificates curl software-properties-common || handle_error "필수 패키지 설치 실패"

# Add Docker GPG key
echo "Docker GPG 키를 추가합니다..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg || handle_error "Docker GPG 키 추가 실패"

# Add Docker repository with signed-by option
echo "Docker 저장소를 추가합니다..."
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null || handle_error "Docker 저장소 추가 실패"

# Update package list
echo "패키지 목록을 업데이트합니다..."
apt update || handle_error "패키지 목록 업데이트 실패"

# Install Docker
echo "Docker를 설치합니다..."
apt install -y docker.io || handle_error "Docker 설치 실패"

# Start and enable Docker service
echo "Docker 서비스를 시작하고 활성화합니다..."
systemctl start docker || handle_error "Docker 서비스 시작 실패"
systemctl enable docker || handle_error "Docker 서비스 활성화 실패"

# Install Docker Compose
echo "Docker Compose를 설치합니다..."
apt install -y docker-compose-plugin || handle_error "Docker Compose 설치 실패"

# Verify installations
echo "설치를 확인합니다..."
docker --version || handle_error "Docker 버전 확인 실패"
docker compose version || handle_error "Docker Compose 버전 확인 실패"

# Set up user permissions
echo "현재 사용자를 docker 그룹에 추가합니다..."
usermod -aG docker $SUDO_USER || handle_error "사용자 권한 설정 실패"

# Clean up
echo "불필요한 패키지를 제거합니다..."
apt autoremove -y
apt clean

echo "설치가 완료되었습니다!"
echo "변경사항을 적용하려면 시스템을 다시 로그인하거나 다음 명령어를 실행하세요:"
echo "newgrp docker"

# Test Docker
echo "Docker 테스트를 실행합니다..."
docker run hello-world || echo "Docker 테스트 실패 - 시스템 재로그인이 필요할 수 있습니다."
