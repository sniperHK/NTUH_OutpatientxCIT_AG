const DEFAULT_MEDIA_PATH = `${import.meta.env.BASE_URL}videos/`

function withTrailingSlash(value: string) {
  return value.endsWith('/') ? value : `${value}/`
}

const mediaBase = withTrailingSlash(
  import.meta.env.VITE_MEDIA_BASE_URL?.trim() || DEFAULT_MEDIA_PATH,
)

export function mediaUrl(path: string) {
  const cleanPath = path.replace(/^\/+/, '')
  if (/^https?:\/\//i.test(mediaBase)) {
    return new URL(cleanPath, mediaBase).toString()
  }
  return `${mediaBase}${cleanPath}`
}
