// Quita emojis de un texto (p. ej. badges de Distrito 44: "🌶️ Picante" → "Picante")
export function stripEmoji(str) {
  if (!str) return null
  return (
    str
      .replace(/[\u{1F300}-\u{1FFFF}]/gu, '')
      .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '')
      .replace(/[\u{2600}-\u{27BF}]/gu, '')
      .replace(/[\u{FE00}-\u{FE0F}]/gu, '')
      .trim() || str.trim()
  )
}
