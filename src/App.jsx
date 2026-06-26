import { useState, useCallback } from 'react'
import LandingPage            from './components/LandingPage'
import MenuPage               from './components/MenuPage'
import UnifiedMenuPage        from './components/UnifiedMenuPage'
import BrandSwitcher          from './components/BrandSwitcher'
import ReorderToggle          from './components/ReorderToggle'
import { chiguireCategories, chiguireItems } from './data/chiguireMenu'
import { useDistrito44Data }  from './hooks/useDistrito44Data'
import { useUnifiedMenu }     from './hooks/useUnifiedMenu'

// Spinner minimalista para cuando Supabase está cargando
function LoadingScreen() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#080808' }}
    >
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <div
            className="w-5 h-5 rounded-full border-2"
            style={{
              borderColor: 'rgba(255,102,0,0.2)',
              borderTopColor: '#ff6600',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
        <p
          className="label-caps"
          style={{ color: '#404040', letterSpacing: '0.22em' }}
        >
          Cargando menú
        </p>
      </div>
    </div>
  )
}

// Vistas posibles:
//  'unified'    → menú unificado (pantalla principal)
//  'landing'    → selector de restaurantes
//  'chiguire'   → menú individual ChiguireFood
//  'distrito44' → menú individual Distrito 44
export default function App() {
  // unified storefront default
  const [view, setView]             = useState('unified')
  const [fading, setFading]         = useState(false)
  const [reorderMode, setReorderMode] = useState(false)

  // Distrito44 — datos en vivo desde Supabase (con fallback estático). Una sola
  // suscripción: se reutilizan estos items también para el menú unificado.
  const { categories: d44Categories, items: d44Items, loading: d44Loading } = useDistrito44Data()
  // Menú unificado (fusiona Chiguire + Distrito 44)
  const { categories: uCategories, items: uItems } = useUnifiedMenu(d44Items)

  const goTo = useCallback((next) => {
    if (next === view || fading) return
    setFading(true)
    setTimeout(() => {
      setView(next)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setFading(false)
    }, 320)
  }, [view, fading])

  // Si el usuario seleccionó Distrito44 y todavía está cargando Supabase
  if (view === 'distrito44' && d44Loading) {
    return <LoadingScreen />
  }

  const themeClass =
    view === 'unified'    ? 'theme-unified'
    : view === 'distrito44' ? 'theme-distrito44'
    : 'theme-chiguire' // landing + chiguire

  return (
    <div
      className={`theme-root ${themeClass}`}
      style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.32s ease' }}
    >
      {view === 'unified' && (
        <UnifiedMenuPage
          categories={uCategories}
          items={uItems}
          onShowBrands={() => goTo('landing')}
          reorderMode={reorderMode}
        />
      )}

      {view === 'landing' && <LandingPage onSelect={goTo} />}

      {(view === 'chiguire' || view === 'distrito44') && (
        <>
          <MenuPage
            categories={view === 'chiguire' ? chiguireCategories : d44Categories}
            items={view === 'chiguire' ? chiguireItems : d44Items}
            brand={view}
            reorderMode={reorderMode}
          />
          <BrandSwitcher
            activeBrand={view}
            onSwitch={goTo}
            onHome={() => goTo('unified')}
          />
        </>
      )}

      {/* Reordenar productos — disponible en todas las vistas con menú */}
      {view !== 'landing' && (
        <ReorderToggle active={reorderMode} onToggle={() => setReorderMode((v) => !v)} />
      )}
    </div>
  )
}
