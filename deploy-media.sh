#!/bin/bash
# Deploy the NAS-only media origin for media.henry780930.com.
set -euo pipefail

NAS_HOST="${NAS_HOST:-sniperhk920}"
REMOTE_DIR="${REMOTE_DIR:-/volume1/docker/cit-media}"
LEGACY_VIDEO_DIR="${LEGACY_VIDEO_DIR:-/volume1/docker/cit-workshop/videos}"
MEDIA_PORT="${MEDIA_PORT:-8914}"

echo "=== CIT media deploy to NAS ==="

if ! ssh -o ConnectTimeout=5 "$NAS_HOST" "echo ok" &>/dev/null; then
  echo "Cannot reach $NAS_HOST"
  exit 1
fi
echo "NAS OK"

ssh "$NAS_HOST" "mkdir -p '$REMOTE_DIR/deploy' '$REMOTE_DIR/videos'"

echo "Syncing media server config..."
COPYFILE_DISABLE=1 tar czf - -C deploy/media . \
  | ssh "$NAS_HOST" "cd '$REMOTE_DIR/deploy' && tar xzf -"

echo "Ensuring media root has the current CIT videos..."
ssh "$NAS_HOST" "REMOTE_DIR='$REMOTE_DIR' LEGACY_VIDEO_DIR='$LEGACY_VIDEO_DIR' sh -s" <<'REMOTE_SCRIPT'
set -e
if [ -d "$LEGACY_VIDEO_DIR" ] && [ -z "$(find "$REMOTE_DIR/videos" -type f -name '*.mp4' -print -quit 2>/dev/null)" ]; then
  cp -a "$LEGACY_VIDEO_DIR"/. "$REMOTE_DIR/videos"/
fi
find "$REMOTE_DIR/videos" -name '._*' -delete
REMOTE_SCRIPT

echo "Starting cit-media on NAS port $MEDIA_PORT..."
ssh "$NAS_HOST" "REMOTE_DIR='$REMOTE_DIR' MEDIA_PORT='$MEDIA_PORT' sh -s" <<'REMOTE_SCRIPT'
set -e
export PATH=/usr/local/bin:$PATH
cd "$REMOTE_DIR/deploy"
MEDIA_ROOT="$REMOTE_DIR/videos" MEDIA_PORT="$MEDIA_PORT" docker compose -f docker-compose.media.yml up -d
REMOTE_SCRIPT

echo "Health checking media origin..."
STATUS=$(ssh "$NAS_HOST" "curl -sf -o /dev/null -w '%{http_code}' http://localhost:$MEDIA_PORT/pretest1/session-a/clip-01.mp4" || echo "000")
if [ "$STATUS" = "200" ]; then
  echo "Media origin OK: http://$NAS_HOST:$MEDIA_PORT/"
  echo "Add Cloudflare Tunnel route: media.henry780930.com -> http://localhost:$MEDIA_PORT"
else
  echo "Media origin health check failed (HTTP $STATUS)"
  ssh "$NAS_HOST" "export PATH=/usr/local/bin:\$PATH; docker logs cit-media --tail 20" || true
  exit 1
fi
