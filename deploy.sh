#!/bin/bash
# CIT 門診暴力去激化教學網站 — 手動部署到 NAS (sniperhk920)
# 用法：./deploy.sh

set -euo pipefail

NAS_HOST="sniperhk920"
REMOTE_DIR="/volume1/docker/cit-workshop"

echo "=== CIT 教學網站部署到 NAS ==="

# 確認 NAS 可達（Tailscale）
if ! ssh -o ConnectTimeout=5 "$NAS_HOST" "echo ok" &>/dev/null; then
  echo "❌ 無法連線到 $NAS_HOST（確認 Tailscale 已啟用）"
  exit 1
fi
echo "✅ NAS 連線成功"

# 確認遠端目錄
ssh "$NAS_HOST" "mkdir -p $REMOTE_DIR"

# 同步檔案（tar pipe，排除不需要的）
echo "📦 同步檔案到 NAS..."
tar czf - \
  --exclude='web/node_modules' \
  --exclude='web/dist' \
  --exclude='.git' \
  --exclude='.superpowers' \
  --exclude='age-key.txt' \
  --exclude='.env' \
  --exclude='.DS_Store' \
  --exclude='北市EMTP_CIT相關文件' \
  web/ docs/modules/ deploy/ \
  | ssh "$NAS_HOST" "cd $REMOTE_DIR && tar xzf -"
echo "✅ 檔案同步完成"

# Build 並啟動
echo "🐳 在 NAS 上建置並啟動..."
ssh "$NAS_HOST" "export PATH=/usr/local/bin:\$PATH && cd $REMOTE_DIR && docker compose -f deploy/docker-compose.yml build && docker compose -f deploy/docker-compose.yml up -d"

# Health check
echo "⏳ 等待服務啟動..."
sleep 5
STATUS=$(ssh "$NAS_HOST" "curl -sf -o /dev/null -w '%{http_code}' http://localhost:8904/" || echo "000")
if [ "$STATUS" = "200" ]; then
  echo "✅ 部署成功！"
  echo "📍 http://$NAS_HOST:8904/"
else
  echo "❌ Health check 失敗 (HTTP $STATUS)"
  ssh "$NAS_HOST" "docker logs cit-workshop --tail 10" || true
  exit 1
fi
