# 아치 리눅스 미러 관리와 도커 설치 가이드

## Reflector를 이용한 미러 관리

### 기본 설치
```bash
pacman -S reflector
```

### 미러 설정
권장 설정:
```bash
reflector --country Sweden --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```

매개변수 설명:
- `--country Sweden`: 스웨덴 미러 사용
- `--age 12`: 최근 12시간 이내에 동기화된 미러만 포함
- `--protocol https`: 보안 HTTPS 프로토콜 사용
- `--sort rate`: 다운로드 속도순으로 미러 정렬
- `--save /etc/pacman.d/mirrorlist`: 설정 저장

### 선택사항: 주변 국가 포함
```bash
reflector --country Sweden,Denmark,Norway,Finland --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```

## 시스템 업데이트 단계
미러 업데이트 후:
```bash
# 패키지 데이터베이스 동기화
pacman -Syy
# 선택사항: 전체 시스템 업데이트
pacman -Syyu
```

## 도커 설치
```bash
# 도커 설치
pacman -S docker
# 도커 서비스 시작
systemctl start docker
# 부팅 시 도커 자동 시작 설정
systemctl enable docker
```

## 도커 사용자 관리
root 권한 없이 도커를 실행해야 하는 경우:
```bash
# docker 그룹 생성
groupadd docker
# 사용자를 docker 그룹에 추가
usermod -aG docker 사용자이름
```
참고: 그룹 변경사항을 적용하려면 로그아웃 후 다시 로그인하세요.

## 자주 사용하는 유용한 명령어
- 현재 미러 확인: `cat /etc/pacman.d/mirrorlist`
- 미러리스트 백업: `cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.backup`
- 패키지 캐시 정리: `pacman -Scc`

### 추가 참고사항
1. 미러 선택 시 지리적으로 가까운 서버를 선택하면 더 빠른 다운로드 속도를 기대할 수 있습니다.
2. HTTPS 프로토콜 사용은 보안상 권장되는 방식입니다.
3. 도커 그룹에 사용자를 추가하는 것은 보안상 root 권한을 부여하는 것과 비슷하므로 신중히 결정하세요.
