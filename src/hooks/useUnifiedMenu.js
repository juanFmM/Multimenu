import { useMemo } from 'react'
import { chiguireItems } from '../data/chiguireMenu'
import { buildUnifiedMenu } from '../data/unifiedTaxonomy'

// Fusiona el menú de ChiguireFood (estático) con los items de Distrito 44 (que
// el llamador obtiene de useDistrito44Data) en categorías unificadas.
// Recibe d44Items como argumento para evitar suscribir Supabase dos veces.
export function useUnifiedMenu(d44Items = []) {
  return useMemo(
    () => buildUnifiedMenu(chiguireItems, d44Items),
    [d44Items]
  )
}
