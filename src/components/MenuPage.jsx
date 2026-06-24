import { useEffect, useRef } from 'react'
import CategoryNav from './CategoryNav'
import MenuSection from './MenuSection'

export default function MenuPage({ categories, items, brand }) {
  const isChiguire = brand === 'chiguire'
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
        {/* Parallax ambient glow */}
        <div
          ref={heroRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isChiguire
              ? 'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(217,168,24,0.08) 0%, transparent 65%)'
              : 'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(255,102,0,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Distrito44 horizontal texture */}
        {!isChiguire && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage:
                'repeating-linear-gradient(0deg,#c8b89a 0,#c8b89a 1px,transparent 1px,transparent 48px)',
            }}
          />
        )}

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="anim-scale-in delay-0 flex justify-center mb-6">
            {isChiguire ? (
              <img
                src="/logo-chiguire.png"
                alt="ChiguireFood"
                className="h-36 sm:h-44 w-auto"
                style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.52))' }}
              />
            ) : (
              <img
                src="/logo-distrito44.svg"
                alt="Distrito 44"
                className="logo-glow h-20 sm:h-28 w-auto"
              />
            )}
          </div>

          {/* Divider */}
          <div className="anim-fade-in delay-2 flex items-center justify-center gap-4 mb-3">
            <span
              className="flex-shrink-0 w-14 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 40%, transparent))',
              }}
            />
            <span className="label-caps tracking-[0.28em]">
              {isChiguire ? '@chiguirefoodrd' : 'Garden Food Truck · Bella Vista'}
            </span>
            <span
              className="flex-shrink-0 w-14 h-px"
              style={{
                background: 'linear-gradient(90deg, color-mix(in srgb, var(--accent) 40%, transparent), transparent)',
              }}
            />
          </div>

          {isChiguire && (
            <p
              className="anim-fade-in delay-3 italic text-lg"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--text-muted)',
              }}
            >
              Sabor venezolano, hecho con honestidad
            </p>
          )}

          <p
            className="anim-fade-in delay-3 label-caps mt-2.5"
            style={{ color: 'var(--text-faint)' }}
          >
            {isChiguire ? '10% de servicio no incluido' : 'Precios con impuestos incluidos'}
          </p>
        </div>
      </header>

      {/* ── Category nav ──────────────────────────────────────────────── */}
      <CategoryNav categories={activeCategories} brand={brand} />

      {/* ── Menu sections ─────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-14">

        {/* ChiguireFood special banner */}
        {isChiguire && (
          <div className="note-banner anim-fade-in delay-1 rounded-lg px-5 py-3.5 mb-12 flex items-center gap-3">
            <i
              className="fa-solid fa-calendar-days text-lg flex-shrink-0"
              style={{ color: 'var(--accent)' }}
            />
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                Bandeja Mixta
              </span>{' '}
              disponible{' '}
              <span className="font-semibold" style={{ color: 'var(--accent-soft)' }}>
                lunes y miércoles
              </span>{' '}
              · precio especial $1400
            </p>
          </div>
        )}

        {activeCategories.map((cat) => (
          <MenuSection
            key={cat.id}
            category={cat}
            items={items.filter((i) => i.categoryId === cat.id)}
            brand={brand}
          />
        ))}
      </main>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer
        className="text-center py-12"
        style={{ borderTop: '1px solid var(--border-c)' }}
      >
        {isChiguire ? (
          <>
            <img
              src="/logo-chiguire.png"
              alt=""
              className="h-14 w-auto mx-auto mb-4"
              style={{ opacity: 0.2 }}
            />
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-10 gold-rule" />
              <i className="fa-solid fa-utensils text-xs" style={{ color: 'var(--text-faint)' }} />
              <span className="w-10 gold-rule" />
            </div>
            <p className="label-caps" style={{ color: 'var(--text-faint)' }}>
              © ChiguireFood · Comida Venezolana
            </p>
            <p className="label-caps mt-1" style={{ color: 'var(--border-c)' }}>
              10% de servicio no incluido
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="w-8 h-px" style={{ background: 'var(--border-c)' }} />
              <img
                src="/logo-distrito44.svg"
                alt=""
                className="h-5 w-auto"
                style={{ opacity: 0.15 }}
              />
              <span className="w-8 h-px" style={{ background: 'var(--border-c)' }} />
            </div>
            <p className="label-caps" style={{ color: 'var(--text-faint)' }}>
              © Distrito 44 · Todos los derechos reservados
            </p>
          </>
        )}
      </footer>
    </div>
  )
}
