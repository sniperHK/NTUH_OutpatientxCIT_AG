import Database from 'better-sqlite3'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const DB_PATH = process.env.DB_PATH || './data/cit.db'

// 確保目錄存在
mkdirSync(dirname(DB_PATH), { recursive: true })

const db = new Database(DB_PATH)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

// Schema migration（冪等）
db.exec(`
  CREATE TABLE IF NOT EXISTS cit_messages (
    id TEXT PRIMARY KEY,
    nickname TEXT NOT NULL DEFAULT '匿名',
    content TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS cit_replies (
    id TEXT PRIMARY KEY,
    message_id TEXT NOT NULL REFERENCES cit_messages(id) ON DELETE CASCADE,
    nickname TEXT NOT NULL DEFAULT '匿名',
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_messages_created_at ON cit_messages(created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_replies_message_id ON cit_replies(message_id);
`)

export default db
