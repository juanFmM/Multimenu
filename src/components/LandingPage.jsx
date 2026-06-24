const CHIGUIRE_HIGHLIGHTS = [
  { icon: 'fa-solid fa-bread-slice',     label: 'Arepas venezolanas' },
  { icon: 'fa-solid fa-seedling',        label: 'Cachapas artesanales' },
  { icon: 'fa-solid fa-drumstick-bite',  label: 'Patacones crujientes' },
  { icon: 'fa-solid fa-burger',          label: 'Pepitos & Hot Dogs' },
]

const D44_HIGHLIGHTS = [
  { emoji: '🍔', label: 'Smash Burgers' },
  { emoji: '🥩', label: 'Burgers Premium 7oz' },
  { emoji: '🍟', label: 'Papas especiales' },
  { emoji: '🥖', label: 'Sándwiches callejeros' },
]

function ChevronRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M5.5 3L10 7.5L5.5 12" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function LandingPage({ onSelect }) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#080808', color: '#f0f0f0' }}
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.87' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '190px 190px',
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-16 pb-14 text-center"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(217,168,24,0.06) 0%, transparent 65%)',
        }}
      >
        {/* Dual logo lockup */}
        <div className="anim-scale-in flex items-center justify-center gap-5 mb-8">
          <img src="/logo-chiguire.png" alt="ChiguireFood" className="h-14 sm:h-18 w-auto"
            style={{ filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.55))' }} />
          <span className="text-2xl font-light" style={{ color: 'rgba(100,100,100,0.5)' }}>×</span>
          <img src="/logo-distrito44.svg" alt="Distrito 44" className="h-10 sm:h-14 w-auto"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255,102,0,0.2))' }} />
        </div>

        <h1
          className="anim-fade-up delay-1 text-4xl sm:text-5xl leading-tight mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
        >
          Dos sabores,<br />
          <span className="text-dual-brand" style={{ fontStyle: 'italic' }}>un mismo lugar</span>
        </h1>

        <p
          className="anim-fade-in delay-2 text-sm font-light max-w-sm mx-auto leading-relaxed"
          style={{ color: '#6a6a6a', fontFamily: "'Inter', sans-serif" }}
        >
          Comida venezolana artesanal y street food de autor.<br />
          Elige tu experiencia y explora el menú.
        </p>

        {/* Decorative divider */}
        <div className="anim-fade-in delay-3 flex items-center justify-center gap-4 mt-8">
          <span className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(80,80,80,0.45))' }} />
          <span className="label-caps" style={{ color: 'rgba(100,100,100,0.6)', letterSpacing: '0.28em' }}>
            nuestros restaurantes
          </span>
          <span className="w-16 h-px" style={{ background: 'linear-gradient(90deg, rgba(80,80,80,0.45), transparent)' }} />
        </div>
      </header>

      {/* ── Brand cards ────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── ChiguireFood card — negro puro + dorado ────────────────── */}
          <div
            className="anim-fade-up delay-2 flex flex-col rounded-lg overflow-hidden"
            style={{ border: '1px solid rgba(40,40,40,0.9)', background: '#0f0f0f' }}
          >
            {/* Card header */}
            <div
              className="relative px-7 pt-9 pb-7 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0a0a0a 0%, #111111 100%)',
                borderBottom: '1px solid rgba(40,40,40,0.7)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 70% at 50% -10%, rgba(217,168,24,0.08) 0%, transparent 70%)',
                }}
              />
              <div className="relative">
                <img
                  src="/logo-chiguire.png"
                  alt="ChiguireFood"
                  className="h-20 w-auto mb-5"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-px" style={{ background: 'rgba(217,168,24,0.45)' }} />
                  <span className="label-caps" style={{ color: 'rgba(217,168,24,0.65)', letterSpacing: '0.28em' }}>
                    Comida Venezolana
                  </span>
                </div>
                <p
                  className="italic leading-snug"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.15rem',
                    color: '#aaaaaa',
                  }}
                >
                  "Sabor venezolano, hecho con honestidad"
                </p>
              </div>
            </div>

            {/* Card body */}
            <div className="px-7 py-6 flex flex-col flex-1 gap-5">
              {/* Info row */}
              <div className="flex items-start gap-4 text-sm" style={{ color: '#6a6a6a' }}>
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-instagram text-xs" style={{ color: 'rgba(217,168,24,0.5)' }} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>@chiguirefoodrd</span>
                </div>
                <span style={{ color: 'rgba(70,70,70,0.6)' }}>·</span>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-tag text-xs" style={{ color: 'rgba(217,168,24,0.5)' }} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>10% servicio</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="label-caps mb-3" style={{ color: 'rgba(100,100,100,0.7)', letterSpacing: '0.2em' }}>
                  especialidades
                </p>
                <ul className="flex flex-col gap-2">
                  {CHIGUIRE_HIGHLIGHTS.map((h) => (
                    <li key={h.label} className="flex items-center gap-3 text-sm" style={{ color: '#aaaaaa' }}>
                      <i
                        className={`${h.icon} w-4 text-center text-xs flex-shrink-0`}
                        style={{ color: 'rgba(217,168,24,0.6)' }}
                      />
                      <span style={{ fontFamily: "'Nunito', sans-serif" }}>{h.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => onSelect('chiguire')}
                className="mt-auto w-full flex items-center justify-between px-5 py-3.5 cursor-pointer group"
                style={{
                  border: '1px solid rgba(217,168,24,0.3)',
                  background: 'rgba(217,168,24,0.06)',
                  borderRadius: '4px',
                  transition: 'background 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(217,168,24,0.11)'
                  e.currentTarget.style.borderColor = 'rgba(217,168,24,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(217,168,24,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(217,168,24,0.3)'
                }}
              >
                <span className="label-caps" style={{ color: '#d9a818', letterSpacing: '0.22em' }}>
                  Ver Menú ChiguireFood
                </span>
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* ── Distrito 44 card ───────────────────────────────────────── */}
          <div
            className="anim-fade-up delay-3 flex flex-col rounded-lg overflow-hidden"
            style={{ border: '1px solid rgba(30,27,23,0.9)', background: '#0d0c0a' }}
          >
            {/* Card header */}
            <div
              className="relative px-7 pt-9 pb-7 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0c0b09 0%, #101009 100%)',
                borderBottom: '1px solid rgba(30,27,23,0.8)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 70% at 50% -10%, rgba(255,102,0,0.08) 0%, transparent 70%)',
                }}
              />
              <div className="relative">
                <img
                  src="/logo-distrito44.svg"
                  alt="Distrito 44"
                  className="h-16 w-auto mb-5"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255,102,0,0.25))' }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-px" style={{ background: 'rgba(255,102,0,0.4)' }} />
                  <span className="label-caps" style={{ color: 'rgba(255,102,0,0.65)', letterSpacing: '0.28em' }}>
                    Garden Food Truck
                  </span>
                </div>
                <p
                  className="text-sm font-light leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#6b6459' }}
                >
                  Smash burgers y street food de autor en Bella Vista,<br />
                  con ingredientes seleccionados y técnica de parrilla.
                </p>
              </div>
            </div>

            {/* Card body */}
            <div className="px-7 py-6 flex flex-col flex-1 gap-5">
              {/* Info row */}
              <div className="flex items-start gap-4 text-sm" style={{ color: '#6b6459' }}>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-xs" style={{ color: 'rgba(255,102,0,0.5)' }} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>Bella Vista</span>
                </div>
                <span style={{ color: 'rgba(40,35,28,0.6)' }}>·</span>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-receipt text-xs" style={{ color: 'rgba(255,102,0,0.5)' }} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>ITBIS incluido</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="label-caps mb-3" style={{ color: 'rgba(40,35,28,0.9)', letterSpacing: '0.2em' }}>
                  especialidades
                </p>
                <ul className="flex flex-col gap-2">
                  {D44_HIGHLIGHTS.map((h) => (
                    <li key={h.label} className="flex items-center gap-3 text-sm" style={{ color: '#9ca3af' }}>
                      <span className="text-base leading-none flex-shrink-0">{h.emoji}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>{h.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => onSelect('distrito44')}
                className="mt-auto w-full flex items-center justify-between px-5 py-3.5 cursor-pointer"
                style={{
                  border: '1px solid rgba(255,102,0,0.28)',
                  background: 'rgba(255,102,0,0.06)',
                  borderRadius: '4px',
                  transition: 'background 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,102,0,0.11)'
                  e.currentTarget.style.borderColor = 'rgba(255,102,0,0.48)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,102,0,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(255,102,0,0.28)'
                }}
              >
                <span className="label-caps" style={{ color: '#ff6600', letterSpacing: '0.22em' }}>
                  Ver Menú Distrito 44
                </span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* ── Footer note ────────────────────────────────────────────── */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <span className="w-12 h-px" style={{ background: 'rgba(60,60,60,0.4)' }} />
          <p className="label-caps text-center" style={{ color: 'rgba(90,90,90,0.6)' }}>
            República Dominicana · 2025
          </p>
          <span className="w-12 h-px" style={{ background: 'rgba(60,60,60,0.4)' }} />
        </div>
      </main>
    </div>
  )
}
