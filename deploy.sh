#!/bin/bash
# Deploy CIT teaching website to NAS
set -euo pipefail

NAS_HOST="sniperhk920"
REMOTE_DIR="/volume1/docker/cit-workshop"

echo "=== CIT deploy to NAS ==="

if ! ssh -o ConnectTimeout=5 "$NAS_HOST" "echo ok" &>/dev/null; then
  echo "Cannot reach $NAS_HOST"
  exit 1
fi
echo "NAS OK"

ssh "$NAS_HOST" "mkdir -p $REMOTE_DIR $REMOTE_DIR/videos"

echo "Syncing files..."
tar czf - \
  --exclude='web/node_modules' \
  --exclude='web/dist' \
  --exclude='server/node_modules' \
  --exclude='.git' \
  --exclude='.superpowers' \
  --exclude='age-key.txt' \
  --exclude='.env' \
  --exclude='.DS_Store' \
  --exclude='web/public/slides' \
  --exclude='web/public/videos' \
  web/ docs/modules/ deploy/ server/ \
  | ssh "$NAS_HOST" "cd $REMOTE_DIR && tar xzf -"
echo "Sync done"

# Videos: synced independently to bind-mounted volume (not baked into image).
# Use tar|ssh|tar pipe (same pattern as above) — Synology blocks native rsync shell.
if [ -d "web/public/videos" ] && [ "$(ls -A web/public/videos 2>/dev/null)" ]; then
  echo "Syncing videos to NAS (tar pipe)..."
  tar cf - -C web/public/videos . \
    | ssh "$NAS_HOST" "cd $REMOTE_DIR/videos && tar xf -"
  echo "Videos synced"
else
  echo "No web/public/videos/ locally — skipping video sync"
fi

echo "Building on NAS..."
ssh "$NAS_HOST" "export PATH=/usr/local/bin:\$PATH && cd $REMOTE_DIR && docker compose -f deploy/docker-compose.yml build && docker compose -f deploy/docker-compose.yml up -d --force-recreate"

sleep 5
STATUS=$(ssh "$NAS_HOST" "curl -sf -o /dev/null -w '%{http_code}' http://localhost:8904/" || echo "000")
if [ "$STATUS" = "200" ]; then
  echo "Deploy OK: http://$NAS_HOST:8904/"
else
  echo "Health check failed (HTTP $STATUS)"
  ssh "$NAS_HOST" "docker logs cit-workshop --tail 10" || true
  exit 1
fi
