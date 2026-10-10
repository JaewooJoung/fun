#!/bin/bash
# 토큰 봇을 crontab 에 등록 (12시간마다 + 부팅 후). 토큰은 24시간 유효라 항상 12시간 이상 여유가 있다.
#   ./install_cron.sh           등록
#   ./install_cron.sh --remove  삭제
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
TAG="# gt-token"
LINES="5 */12 * * * $HERE/run_token.sh $TAG
@reboot sleep 150 && $HERE/run_token.sh $TAG"
crontab -l > "$HERE/state/crontab.backup.$(date +%Y%m%d%H%M%S)" 2>/dev/null || true
CUR="$(crontab -l 2>/dev/null | grep -v "$TAG" || true)"
if [ "${1:-}" = "--remove" ]; then printf '%s\n' "$CUR" | crontab -; echo "삭제됨"
else printf '%s\n%s\n' "$CUR" "$LINES" | crontab -; echo "등록됨:"; crontab -l | grep "$TAG"; fi
