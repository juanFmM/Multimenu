import { useState, useEffect, useCallback } from 'react'

const STORAGE_PREFIX = 'mm_order_'

function loadOrder(scope) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + scope)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveOrder(scope, order) {
  try {
    localStorage.setItem(STORAGE_PREFIX + scope, JSON.stringify(order))
  } catch {
    /* localStorage no disponible — el orden simplemente no persiste */
  }
}

// Maneja el orden personalizado de productos dentro de cada categoría.
// `scope` aísla el orden por vista ('unified' | 'chiguire' | 'distrito44'),
// así reordenar en una vista no afecta a las demás. Persiste en localStorage.
export function useItemOrder(scope) {
  const [order, setOrder] = useState(() => loadOrder(scope))

  useEffect(() => {
    saveOrder(scope, order)
  }, [scope, order])

  // Aplica el orden guardado a una lista de items de una categoría.
  // Items nuevos (sin orden guardado) se agregan al final, en su orden original.
  const sortItems = useCallback((categoryId, items) => {
    const savedIds = order[categoryId]
    if (!savedIds || savedIds.length === 0) return items

    const pending = new Map(items.map((it) => [it.id, it]))
    const sorted = []
    savedIds.forEach((id) => {
      if (pending.has(id)) {
        sorted.push(pending.get(id))
        pending.delete(id)
      }
    })
    items.forEach((it) => {
      if (pending.has(it.id)) sorted.push(it)
    })
    return sorted
  }, [order])

  // Mueve un item una posición arriba o abajo dentro de su categoría.
  // `currentItems` debe ser la lista YA ordenada (la que se está mostrando).
  const moveItem = useCallback((categoryId, currentItems, itemId, direction) => {
    setOrder((prev) => {
      const ids = currentItems.map((it) => it.id)
      const idx = ids.indexOf(itemId)
      if (idx === -1) return prev
      const swapWith = direction === 'up' ? idx - 1 : idx + 1
      if (swapWith < 0 || swapWith >= ids.length) return prev
      ;[ids[idx], ids[swapWith]] = [ids[swapWith], ids[idx]]
      return { ...prev, [categoryId]: ids }
    })
  }, [])

  const resetCategory = useCallback((categoryId) => {
    setOrder((prev) => {
      const next = { ...prev }
      delete next[categoryId]
      return next
    })
  }, [])

  const hasCustomOrder = useCallback(
    (categoryId) => Boolean(order[categoryId]?.length),
    [order]
  )

  return { sortItems, moveItem, resetCategory, hasCustomOrder }
}
