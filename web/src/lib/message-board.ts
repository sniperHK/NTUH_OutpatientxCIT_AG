// CIT 留言板前端：呼叫同源 /api/messages（Express + SQLite 後端）

export interface Reply {
  id: string
  message_id: string
  nickname: string
  content: string
  created_at: string
}

export interface Message {
  id: string
  nickname: string
  content: string
  likes: number
  created_at: string
  replies: Reply[]
}

const LIKED_KEY = 'cit-liked-messages'

function getLikedIds(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(LIKED_KEY) || '[]'))
  } catch {
    return new Set()
  }
}

function saveLikedIds(ids: Set<string>) {
  localStorage.setItem(LIKED_KEY, JSON.stringify(Array.from(ids)))
}

export function hasLiked(messageId: string): boolean {
  return getLikedIds().has(messageId)
}

const JSON_HEADERS = { 'Content-Type': 'application/json' }

/** 讀取所有留言 + 回覆 */
export async function fetchMessages(): Promise<Message[]> {
  const res = await fetch('/api/messages')
  if (!res.ok) throw new Error(`載入訊息失敗: ${res.status}`)
  return res.json()
}

/** 新增留言 */
export async function postMessage(nickname: string, content: string): Promise<void> {
  const res = await fetch('/api/messages', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ nickname: nickname.trim() || '匿名', content: content.trim() }),
  })
  if (!res.ok) throw new Error(`發言失敗: ${res.status}`)
}

/** 新增回覆 */
export async function postReply(messageId: string, nickname: string, content: string): Promise<void> {
  const res = await fetch(`/api/messages/${messageId}/replies`, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ nickname: nickname.trim() || '匿名', content: content.trim() }),
  })
  if (!res.ok) throw new Error(`回覆失敗: ${res.status}`)
}

/** 切換按讚（本地端記住是否已按，送 delta ±1 到後端）*/
export async function toggleLike(messageId: string, _currentLikes: number): Promise<number> {
  const likedIds = getLikedIds()
  const wasLiked = likedIds.has(messageId)
  const delta = wasLiked ? -1 : 1

  const res = await fetch(`/api/messages/${messageId}/likes`, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ delta }),
  })
  if (!res.ok) throw new Error(`按讚失敗: ${res.status}`)
  const { likes } = (await res.json()) as { likes: number }

  if (wasLiked) likedIds.delete(messageId)
  else likedIds.add(messageId)
  saveLikedIds(likedIds)
  return likes
}
