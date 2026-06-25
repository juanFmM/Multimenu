import { useEffect, useRef } from 'react'
import CategoryNav from './CategoryNav'
import MenuSection from './MenuSection'
import FeaturedStrip from './FeaturedStrip'

// Vista unificada: un solo menú agnóstico de marca, organizado por categorías
// de comida. Reutiliza CategoryNav y MenuSection en modo brand="unified".
export default function UnifiedMenuPage({ categories, items, onShowBrands }) {
  const heroRef = useRef(null)

  const activeCategories = categories.filter((cat) =>
    items.some((item) => item.categoryId === cat.id)
  )

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current)
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-16 pb-12">
        {/* Parallax ambient glow — mezcla dorado→naranja */}
        <div
          ref={heroRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 78% 55% at 50% -2%, rgba(240,130,15,0.10) 0%, transparent 68%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Logos flotantes de ambos restaurantes */}
          <div className="anim-scale-in delay-0 flex items-center justify-center gap-5 sm:gap-7 mb-5">
            <img
              src="/logo-chiguire.png"
              alt="ChiguireFood"
              className="logo-float h-20 sm:h-28 w-auto"
              style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.55))' }}
            />
            <span
              className="text-2xl sm:text-3xl font-light grad-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ×
            </span>
            <img
              src="/logo-distrito44.svg"
              alt="Distrito 44"
              className="logo-float-delay h-14 sm:h-20 w-auto"
              style={{ filter: 'drop-shadow(0 0 12px rgba(255,102,0,0.25))' }}
            />
          </div>

          {/* Divider */}
          <div className="anim-fade-in delay-2 flex items-center justify-center gap-4 mb-3">
            <span
              className="flex-shrink-0 w-14 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(240,130,15,0.5))' }}
            />
            <span className="label-caps tracking-[0.28em]">Dos cocinas, un solo menú</span>
            <span
              className="flex-shrink-0 w-14 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(240,130,15,0.5), transparent)' }}
            />
          </div>

          <p
            className="anim-fade-in delay-3 italic text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-muted)' }}
          >
            Sabor venezolano artesanal y street food de autor
          </p>
        </div>
      </header>

      {/* ── Destacados ────────────────────────────────────────────────── */}
      <FeaturedStrip items={items} />

      {/* ── Category nav ──────────────────────────────────────────────── */}
      <CategoryNav categories={activeCategories} brand="unified" />

      {/* ── Menu sections ─────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-14">
        {activeCategories.map((cat) => (
          <MenuSection
            key={cat.id}
            category={cat}
            items={items.filter((i) => i.categoryId === cat.id)}
            brand="unified"
          />
        ))}
      </main>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer
        className="text-center py-12"
        style={{ borderTop: '1px solid var(--border-c)' }}
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-10 gold-rule" />
          <i className="fa-solid fa-utensils text-xs" style={{ color: 'var(--text-faint)' }} />
          <span className="w-10 gold-rule" />
        </div>

        {/* Acceso secundario: ver menú por restaurante */}
        {onShowBrands && (
          <button
            onClick={onShowBrands}
            className="label-caps cursor-pointer px-4 py-2 mb-5 inline-flex items-center gap-2"
            style={{
              color: 'var(--accent)',
              border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
              borderRadius: '4px',
              transition: 'background 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 10%, transparent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <i className="fa-solid fa-store text-[0.7rem]" />
            Ver menú por restaurante
          </button>
        )}

        <p className="label-caps" style={{ color: 'var(--text-faint)' }}>
          República Dominicana
        </p>
      </footer>
    </div>
  )
}
