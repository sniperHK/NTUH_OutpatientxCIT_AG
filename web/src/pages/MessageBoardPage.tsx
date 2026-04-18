import { useEffect, useState } from 'react'
import { MessageSquare, Heart, Reply as ReplyIcon, RefreshCw, Send } from 'lucide-react'
import {
  fetchMessages,
  postMessage,
  postReply,
  toggleLike,
  hasLiked,
  type Message,
} from '@/lib/message-board'

const NICKNAME_KEY = 'cit-nickname'

function formatTime(iso: string): string {
  const d = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  if (diffMin < 1) return '剛剛'
  if (diffMin < 60) return `${diffMin} 分鐘前`
  const diffHr = Math.floor(diffMin / 60)
  if (diffHr < 24) return `${diffHr} 小時前`
  const diffDay = Math.floor(diffHr / 24)
  if (diffDay < 7) return `${diffDay} 天前`
  return d.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

export default function MessageBoardPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [nickname, setNickname] = useState(() => localStorage.getItem(NICKNAME_KEY) || '')
  const [newContent, setNewContent] = useState('')
  const [posting, setPosting] = useState(false)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [replyPosting, setReplyPosting] = useState(false)

  async function load() {
    setLoading(true)
    setError('')
    try {
      const data = await fetchMessages()
      setMessages(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : '載入失敗')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (nickname) localStorage.setItem(NICKNAME_KEY, nickname)
  }, [nickname])

  async function handlePost() {
    if (!newContent.trim()) return
    setPosting(true)
    setError('')
    try {
      await postMessage(nickname, newContent)
      setNewContent('')
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : '發言失敗')
    } finally {
      setPosting(false)
    }
  }

  async function handleReply(messageId: string) {
    if (!replyContent.trim()) return
    setReplyPosting(true)
    setError('')
    try {
      await postReply(messageId, nickname, replyContent)
      setReplyContent('')
      setReplyingTo(null)
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : '回覆失敗')
    } finally {
      setReplyPosting(false)
    }
  }

  async function handleLike(m: Message) {
    try {
      const newLikes = await toggleLike(m.id, m.likes)
      setMessages((prev) => prev.map((x) => (x.id === m.id ? { ...x, likes: newLikes } : x)))
    } catch (e) {
      setError(e instanceof Error ? e.message : '按讚失敗')
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#D5F5E3] flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-[#1E8449]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#1B2A4A]">留言板</h1>
            <p className="text-sm text-gray-500">課前課後提問、現場互動、經驗分享</p>
          </div>
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          重新整理
        </button>
      </div>

      {/* 發言區 */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value.slice(0, 20))}
            placeholder="暱稱（留空為匿名）"
            className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E8449]"
            maxLength={20}
          />
        </div>
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value.slice(0, 500))}
          placeholder="分享你的想法、問題或經驗...（最多 500 字）"
          rows={3}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E8449] resize-none"
          maxLength={500}
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-gray-400">{newContent.length}/500</span>
          <button
            onClick={handlePost}
            disabled={!newContent.trim() || posting}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-[#1E8449] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {posting ? '發送中…' : '發言'}
          </button>
        </div>
      </div>

      {/* 錯誤訊息 */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* 留言列表 */}
      {loading && messages.length === 0 ? (
        <div className="text-center py-12 text-gray-400">載入中…</div>
      ) : messages.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <MessageSquare className="w-10 h-10 mx-auto mb-2 opacity-30" />
          <p className="text-sm">還沒有留言，來當第一個吧！</p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((m) => {
            const liked = hasLiked(m.id)
            return (
              <article key={m.id} className="bg-white border border-gray-200 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-sm text-[#1B2A4A]">{m.nickname}</span>
                  <span className="text-xs text-gray-400">{formatTime(m.created_at)}</span>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-700 whitespace-pre-wrap break-words mb-3">{m.content}</p>

                {/* Actions */}
                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={() => handleLike(m)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors ${
                      liked ? 'bg-[#FADBD8] text-[#C0392B]' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
                    {m.likes > 0 ? m.likes : '讚'}
                  </button>
                  <button
                    onClick={() => {
                      setReplyingTo(replyingTo === m.id ? null : m.id)
                      setReplyContent('')
                    }}
                    className="flex items-center gap-1 px-2 py-1 rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <ReplyIcon className="w-3.5 h-3.5" />
                    回覆 {m.replies.length > 0 && `(${m.replies.length})`}
                  </button>
                </div>

                {/* Reply form */}
                {replyingTo === m.id && (
                  <div className="mt-3 pl-3 border-l-2 border-[#1E8449]">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value.slice(0, 240))}
                      placeholder="寫下回覆…（最多 240 字）"
                      rows={2}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E8449] resize-none"
                      maxLength={240}
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">{replyContent.length}/240</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setReplyingTo(null)}
                          className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md"
                        >
                          取消
                        </button>
                        <button
                          onClick={() => handleReply(m.id)}
                          disabled={!replyContent.trim() || replyPosting}
                          className="px-3 py-1 text-xs font-medium bg-[#1E8449] text-white rounded-md hover:opacity-90 disabled:opacity-50"
                        >
                          {replyPosting ? '送出中…' : '送出回覆'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {m.replies.length > 0 && (
                  <div className="mt-3 space-y-2 pl-3 border-l-2 border-gray-100">
                    {m.replies.map((r) => (
                      <div key={r.id} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-[#1B2A4A]">{r.nickname}</span>
                          <span className="text-xs text-gray-400">{formatTime(r.created_at)}</span>
                        </div>
                        <p className="text-xs text-gray-700 whitespace-pre-wrap break-words">{r.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
