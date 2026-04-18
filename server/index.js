import express from 'express'
import compression from 'compression'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import messagesRoutes from './routes/messages.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = process.env.PUBLIC_DIR || join(__dirname, '..', 'public')
const PORT = Number(process.env.PORT || 3000)

const app = express()

app.use(compression())
app.use(express.json({ limit: '100kb' }))

// API
app.use('/api/messages', messagesRoutes)

// Static assets (aggressive cache for /assets/)
app.use(
  '/assets',
  express.static(join(PUBLIC_DIR, 'assets'), {
    maxAge: '1y',
    immutable: true,
  }),
)

// Other static files
app.use(express.static(PUBLIC_DIR, { index: 'index.html', maxAge: '1h' }))

// SPA fallback — all non-API, non-existing paths serve index.html
app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(join(PUBLIC_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`[cit-workshop] listening on :${PORT}`)
  console.log(`[cit-workshop] PUBLIC_DIR=${PUBLIC_DIR}`)
})
