#!/bin/bash
# cron 래퍼: 새 토큰 발급 → 암호화 → token.enc 푸시. 실패하면 30분 뒤 한 번 더.
export PATH="/home/crux/.juliaup/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
HERE="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$HERE/logs" "$HERE/state"
exec >>"$HERE/logs/token_$(date +%Y-%m).log" 2>&1
exec 9>"$HERE/state/lock"; flock -n 9 || exit 0
for i in 1 2; do
  julia "$HERE/bot/token_bot.jl" --push && exit 0
  echo "[run_token $(date '+%F %T')] 실패 — 재시도 대기"; sleep 1800
done
exit 1
