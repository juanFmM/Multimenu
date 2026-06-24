import { useState, useCallback } from 'react'
import LandingPage            from './components/LandingPage'
import MenuPage               from './components/MenuPage'
import BrandSwitcher          from './components/BrandSwitcher'
import { chiguireCategories, chiguireItems } from './data/chiguireMenu'
import { useDistrito44Data }  from './hooks/useDistrito44Data'

// Spinner minimalista para cuando Supabase está cargando
function LoadingScreen() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#080808' }}
    >
      <div className="text-center">
        <img
          src="/logo-distrito44.svg"
          alt="Distrito 44"
          className="h-14 w-auto mx-auto mb-6"
          style={{ opacity: 0.4, filter: 'drop-shadow(0 0 8px rgba(255,102,0,0.2))' }}
        />
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

export default function App() {
  const [activeBrand, setActiveBrand] = useState(null)
  const [fading, setFading]           = useState(false)

  // Distrito44 — datos en vivo desde Supabase (con fallback estático)
  const { categories: d44Categories, items: d44Items, loading: d44Loading } = useDistrito44Data()

  const goTo = useCallback((brand) => {
    if (brand === activeBrand || fading) return
    setFading(true)
    setTimeout(() => {
      setActiveBrand(brand)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setFading(false)
    }, 320)
  }, [activeBrand, fading])

  const goHome = useCallback(() => goTo(null), [goTo])

  // Si el usuario seleccionó Distrito44 y todavía está cargando Supabase
  if (activeBrand === 'distrito44' && d44Loading) {
    return <LoadingScreen />
  }

  const menuData = {
    chiguire:   { categories: chiguireCategories, items: chiguireItems },
    distrito44: { categories: d44Categories,      items: d44Items      },
  }

  return (
    <div
      className={`theme-root theme-${activeBrand ?? 'chiguire'}`}
      style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.32s ease' }}
    >
      {activeBrand === null ? (
        <LandingPage onSelect={goTo} />
      ) : (
        <>
          <MenuPage
            categories={menuData[activeBrand].categories}
            items={menuData[activeBrand].items}
            brand={activeBrand}
          />
          <BrandSwitcher activeBrand={activeBrand} onSwitch={goTo} onHome={goHome} />
        </>
      )}
    </div>
  )
}
