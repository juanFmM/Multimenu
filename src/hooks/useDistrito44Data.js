import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { distrito44Categories, distrito44Items } from '../data/distrito44Menu'

const USE_SUPABASE = !!(
  import.meta.env.VITE_SUPABASE_URL &&
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'http://localhost'
)

// Normaliza campos snake_case de Supabase → camelCase para el UI
function normalizeItem(item) {
  if (!item) return item
  return {
    ...item,
    categoryId: item.category_id ?? item.categoryId,
    imageUrl:   item.image_url  ?? item.imageUrl ?? null,
  }
}

// Normaliza categorías: si vienen de Supabase pueden no tener campo `icon`
// Se asigna un ícono por defecto según el id de la categoría
const ICON_MAP = {
  'entradas':      'fa-solid fa-cheese',
  'papas':         'fa-solid fa-bowl-food',
  'sandwiches':    'fa-solid fa-bread-slice',
  'smash-burgers': 'fa-solid fa-burger',
  'burgers':       'fa-solid fa-fire',
  'postres':       'fa-solid fa-ice-cream',
}
function normalizeCategory(cat) {
  return {
    ...cat,
    icon: cat.icon || ICON_MAP[cat.id] || 'fa-solid fa-utensils',
  }
}

async function fetchAll() {
  const [cRes, iRes] = await Promise.all([
    supabase.from('categories').select('*').order('sort_order').order('created_at'),
    supabase.from('items').select('*').order('sort_order').order('created_at'),
  ])
  if (cRes.error) throw cRes.error
  if (iRes.error) throw iRes.error
  return {
    categories: cRes.data.map(normalizeCategory),
    items:      iRes.data.map(normalizeItem),
  }
}

export function useDistrito44Data() {
  const [categories, setCategories] = useState(distrito44Categories)
  const [items, setItems]           = useState(distrito44Items)
  const [loading, setLoading]       = useState(USE_SUPABASE)

  // ── Carga inicial ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!USE_SUPABASE) return

    fetchAll()
      .then(({ categories: cats, items: itms }) => {
        setCategories(cats)
        setItems(itms)
      })
      .catch((err) => {
        console.warn('[MultiMenu] Supabase fetch error — usando datos locales:', err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  // ── Tiempo real — refleja cambios del admin panel instantáneamente ───────────
  // Requiere Replication habilitado en Supabase Dashboard >
  // Database > Replication para las tablas 'categories' e 'items'.
  useEffect(() => {
    if (!USE_SUPABASE) return

    const channel = supabase
      .channel('multimenu-distrito44-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'categories' },
        () => {
          fetchAll()
            .then(({ categories: cats }) => setCategories(cats))
            .catch(() => {})
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'items' },
        () => {
          fetchAll()
            .then(({ items: itms }) => setItems(itms))
            .catch(() => {})
        }
      )
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [])

  return { categories, items, loading }
}
