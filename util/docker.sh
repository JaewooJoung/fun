#!/bin/bash

# 스크립트가 root 권한으로 실행되고 있는지 확인
if [ "$EUID" -ne 0 ]; then
    echo "이 스크립트는 root 권한으로 실행되어야 합니다."
    exit 1
fi

# 패키지 업데이트
echo "패키지를 업데이트합니다..."
apt update
apt upgrade -y

# 필수 패키지 설치
echo "필수 패키지를 설치합니다..."
apt install -y apt-transport-https ca-certificates curl software-properties-common

# Docker GPG 키 추가
echo "Docker GPG 키를 추가합니다..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

# Docker 저장소 추가
echo "Docker 저장소를 추가합니다..."
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# 패키지 목록 업데이트
echo "패키지 목록을 업데이트합니다..."
apt update

# Docker 설치 (docker.io 패키지)
echo "Docker를 설치합니다..."
apt install -y docker.io

# Docker 서비스 시작 및 활성화
echo "Docker 서비스를 시작하고 활성화합니다..."
systemctl start docker
systemctl enable docker

# Docker 설치 확인
echo "Docker 설치를 확인합니다..."
docker --version

# 사용자 권한 설정
echo "현재 사용자를 docker 그룹에 추가합니다..."
usermod -aG docker $USER

echo "Docker 설치가 완료되었습니다. 로그아웃 후 다시 로그인하세요."
