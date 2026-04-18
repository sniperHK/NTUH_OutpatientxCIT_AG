import { Router } from 'express'
import { randomUUID } from 'node:crypto'
import db from '../db.js'

const router = Router()

const NICK_MAX = 20
const MSG_MAX = 500
const REPLY_MAX = 240

function cleanText(raw, max) {
  if (typeof raw !== 'string') return ''
  const trimmed = raw.trim()
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed
}

function cleanNickname(raw) {
  const nick = cleanText(raw, NICK_MAX)
  return nick || '匿名'
}

// GET /api/messages — list all messages + embedded replies
router.get('/', (_req, res) => {
  const messages = db
    .prepare('SELECT id, nickname, content, likes, created_at FROM cit_messages ORDER BY created_at DESC')
    .all()
  const replies = db
    .prepare('SELECT id, message_id, nickname, content, created_at FROM cit_replies ORDER BY created_at ASC')
    .all()
  const replyMap = new Map()
  for (const r of replies) {
    if (!replyMap.has(r.message_id)) replyMap.set(r.message_id, [])
    replyMap.get(r.message_id).push(r)
  }
  res.json(messages.map((m) => ({ ...m, replies: replyMap.get(m.id) || [] })))
})

// POST /api/messages — create a new message
router.post('/', (req, res) => {
  const content = cleanText(req.body?.content, MSG_MAX)
  if (!content) return res.status(400).json({ error: 'content required' })
  const id = randomUUID()
  const nickname = cleanNickname(req.body?.nickname)
  db.prepare('INSERT INTO cit_messages (id, nickname, content) VALUES (?, ?, ?)').run(id, nickname, content)
  const row = db.prepare('SELECT id, nickname, content, likes, created_at FROM cit_messages WHERE id = ?').get(id)
  res.status(201).json({ ...row, replies: [] })
})

// POST /api/messages/:id/replies — add a reply
router.post('/:id/replies', (req, res) => {
  const messageId = req.params.id
  const exists = db.prepare('SELECT 1 FROM cit_messages WHERE id = ?').get(messageId)
  if (!exists) return res.status(404).json({ error: 'message not found' })
  const content = cleanText(req.body?.content, REPLY_MAX)
  if (!content) return res.status(400).json({ error: 'content required' })
  const id = randomUUID()
  const nickname = cleanNickname(req.body?.nickname)
  db.prepare('INSERT INTO cit_replies (id, message_id, nickname, content) VALUES (?, ?, ?, ?)').run(
    id,
    messageId,
    nickname,
    content,
  )
  const row = db.prepare('SELECT id, message_id, nickname, content, created_at FROM cit_replies WHERE id = ?').get(id)
  res.status(201).json(row)
})

// POST /api/messages/:id/likes — adjust likes by delta (+1/-1)
router.post('/:id/likes', (req, res) => {
  const messageId = req.params.id
  const delta = Number(req.body?.delta)
  if (delta !== 1 && delta !== -1) return res.status(400).json({ error: 'delta must be 1 or -1' })
  const row = db.prepare('SELECT likes FROM cit_messages WHERE id = ?').get(messageId)
  if (!row) return res.status(404).json({ error: 'message not found' })
  const newLikes = Math.max(0, row.likes + delta)
  db.prepare('UPDATE cit_messages SET likes = ? WHERE id = ?').run(newLikes, messageId)
  res.json({ likes: newLikes })
})

export default router
