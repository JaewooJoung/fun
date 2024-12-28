sudo apt install docker-compose-plugin docker.io -y
# 도커 서비스 시작
sudo systemctl start docker
sudo systemctl enable docker

# 사용자 권한 설정
sudo usermod -aG docker $USER

# 새 그룹 적용
newgrp docker
