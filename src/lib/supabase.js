import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
  console.warn('[MultiMenu] Supabase env vars missing — Distrito44 usará datos locales')
}

export const supabase = createClient(
  url  ?? 'http://localhost',
  key  ?? 'placeholder'
)
