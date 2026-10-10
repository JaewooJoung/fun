# Linjen — Västtrafik Accessible Line (gt)

시각·인지 장애인, 고령자를 위한 **지도 없는** 대중교통 길안내. 출발→도착을 굵은 한 줄과 정류장 점으로만
보여 주고, 다음 정류장·하차·환승을 음성(TTS)으로 먼저 말해 준다. 스웨덴어·영어·한국어.

GitHub 에서는 `JaewooJoung/fun` 의 `gt/` 폴더 → https://jaewoojoung.github.io/fun/gt/

```
gt/
├─ web/                ← fun/gt/ 로 올라가는 파일 전부
│  ├─ index.html       화면(DOM, 스크린 리더용) · Web Speech TTS · 스와이프 · WebCrypto 복호화
│  ├─ graph.wasm       Rust 엔진: 경로 요약, 한 줄 모델, 현재 위치·안내 이벤트 계산
│  └─ token.enc        암호화된 액세스 토큰 (봇이 12시간마다 갱신)
├─ app/                Rust 소스 (./build.sh)
├─ bot/token_bot.jl    Julia 토큰 봇 (Phase 2)
├─ run_token.sh        cron 래퍼 · install_cron.sh 등록
├─ tools/              실제 Västtrafik 응답 샘플 + Node 시험 (엔진, 복호화)
└─ .env                ID·비밀키·앱 암호 (chmod 600, 절대 올리지 않음)
```

## 토큰과 보안

| 무엇 | 어디에 |
|---|---|
| Klientidentifierare / Hemlighet | `.env` 에만. 웹 파일·저장소에 없음 |
| 액세스 토큰 (24시간) | 봇이 발급 → `GT_PASSPHRASE` 로 AES-256 암호화(PBKDF2-SHA256 20만 회) → `token.enc` |
| 앱 암호 (`GT_PASSPHRASE`) | `.env` 에만. 테스트 사용자에게 따로 전달 → 각자 기기에서 설정에 한 번 입력 (기기에만 저장) |

- `token.enc` 는 공개 URL 에 있지만 암호 없이는 쓸 수 없다.
- **한계:** 암호를 아는 사용자는 자기 브라우저 개발자 도구에서 토큰을 볼 수 있다. 서버 없이 브라우저가
  API 를 직접 부르는 구조에서는 피할 수 없다. 일반 공개 서비스로 가려면 토큰을 숨겨 주는 작은
  프록시 서버(Cloudflare Worker 등)가 필요하다.
- 개발자용: 설정 → "액세스 토큰 직접 넣기" 에 토큰을 붙이면 그 기기에서만 쓴다 (Phase 1 수동 방식).

## 실행

```bash
./build.sh                                 # graph.wasm 빌드 + 엔진 시험
julia bot/token_bot.jl                     # 새 token.enc 만들기
julia bot/token_bot.jl --push-web          # 첫 배포: index.html + graph.wasm + token.enc
./install_cron.sh                          # 12시간마다 token.enc 갱신·푸시
```

## 안내 규칙 (graph.wasm)

출발 10·5·3·1분 전 → 탑승 → 매 정류장 "다음 정류장 …, N정류장 남음" → 내릴 곳 직전 "다음 정류장에서 내리세요"
(구간이 짧아도 반드시 먼저) → 도착 1분 전 "지금 내리세요" (+진동) → 환승 도보 안내 → 도착.
2분 이상 지연·조기 출발도 알린다. 위치는 GPS 가 아니라 **실시간 도착 예정 시각**으로 판단한다(20초마다 갱신).
