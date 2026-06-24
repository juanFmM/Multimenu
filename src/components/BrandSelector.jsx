import { useState } from 'react'

function ArrowRight({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color }}>
      <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function BrandSelector({ onSelect }) {
  const [hovered, setHovered] = useState(null)

  const chiguireExpanded = hovered === 'chiguire'
  const distrito44Expanded = hovered === 'distrito44'

  return (
    <div className="flex flex-col sm:flex-row h-screen w-full overflow-hidden">

      {/* ── ChiguireFood panel ──────────────────────────────────────────── */}
      <div
        className="brand-panel flex flex-col items-center justify-center"
        style={{
          flex: chiguireExpanded ? 1.6 : distrito44Expanded ? 0.5 : 1,
          background: 'linear-gradient(145deg, #0a0a0a 0%, #080808 45%, #0d0d0d 100%)',
          minHeight: '50vh',
        }}
        onMouseEnter={() => setHovered('chiguire')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onSelect('chiguire')}
      >
        {/* Warm gold ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 85% 65% at 50% 25%, rgba(217,168,24,0.1) 0%, transparent 72%)',
            opacity: chiguireExpanded ? 1 : 0.45,
            transition: 'opacity 0.5s ease',
          }}
        />
        {/* Left decorative line */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-20"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(217,168,24,0.35), transparent)',
            opacity: chiguireExpanded ? 1 : 0.4,
            transition: 'opacity 0.4s ease',
          }}
        />

        <div className="relative text-center px-8 sm:px-12 select-none anim-reveal delay-0">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img
              src="/logo-chiguire.png"
              alt="ChiguireFood"
              className="w-auto mx-auto"
              style={{
                height: chiguireExpanded ? '9rem' : '7rem',
                transition: 'height 0.45s cubic-bezier(.22,.61,.36,1), filter 0.45s ease',
                filter: chiguireExpanded
                  ? 'drop-shadow(0 8px 28px rgba(217,168,24,0.4))'
                  : 'drop-shadow(0 4px 12px rgba(0,0,0,0.55))',
              }}
            />
          </div>

          <div
            className="label-caps mb-1.5"
            style={{
              color: 'rgba(217,168,24,0.65)',
              letterSpacing: '0.32em',
              transition: 'opacity 0.35s ease',
            }}
          >
            Comida Venezolana
          </div>

          <p
            className="italic text-base leading-snug"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(160,160,160,0.75)',
              fontSize: '1.05rem',
              opacity: chiguireExpanded ? 1 : 0.55,
              transform: chiguireExpanded ? 'translateY(0)' : 'translateY(5px)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            Sabor venezolano, hecho con honestidad
          </p>

          {/* CTA button */}
          <div
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5"
            style={{
              border: '1px solid rgba(217,168,24,0.32)',
              background: 'rgba(217,168,24,0.06)',
              borderRadius: '2px',
              opacity: chiguireExpanded ? 1 : 0.15,
              transform: chiguireExpanded ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
              transition: 'opacity 0.32s ease, transform 0.32s ease',
            }}
          >
            <span className="label-caps" style={{ color: '#d9a818', letterSpacing: '0.24em' }}>
              Ver Menú
            </span>
            <ArrowRight color="#d9a818" />
          </div>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div
        className="flex-shrink-0 sm:w-px sm:h-auto h-px w-auto"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(60,60,60,0.35) 20%, rgba(60,60,60,0.35) 80%, transparent)',
        }}
      />

      {/* ── Distrito 44 panel ───────────────────────────────────────────── */}
      <div
        className="brand-panel flex flex-col items-center justify-center"
        style={{
          flex: distrito44Expanded ? 1.6 : chiguireExpanded ? 0.5 : 1,
          background: 'linear-gradient(145deg, #0e0d0b 0%, #0c0b09 45%, #111009 100%)',
          minHeight: '50vh',
        }}
        onMouseEnter={() => setHovered('distrito44')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onSelect('distrito44')}
      >
        {/* Orange ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 85% 65% at 50% 25%, rgba(255,102,0,0.09) 0%, transparent 72%)',
            opacity: distrito44Expanded ? 1 : 0.45,
            transition: 'opacity 0.5s ease',
          }}
        />
        {/* Right decorative line */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-20"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(255,102,0,0.28), transparent)',
            opacity: distrito44Expanded ? 1 : 0.4,
            transition: 'opacity 0.4s ease',
          }}
        />

        <div className="relative text-center px-8 sm:px-12 select-none anim-reveal delay-1">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img
              src="/logo-distrito44.svg"
              alt="Distrito 44"
              className="w-auto mx-auto"
              style={{
                height: distrito44Expanded ? '7.5rem' : '5.5rem',
                transition: 'height 0.45s cubic-bezier(.22,.61,.36,1), filter 0.45s ease',
                filter: distrito44Expanded
                  ? 'drop-shadow(0 0 22px rgba(255,102,0,0.65))'
                  : 'drop-shadow(0 0 7px rgba(255,102,0,0.25))',
              }}
            />
          </div>

          <div
            className="label-caps mb-1.5"
            style={{
              color: 'rgba(255,102,0,0.65)',
              letterSpacing: '0.32em',
            }}
          >
            Garden Food Truck
          </div>

          <p
            className="text-sm font-light leading-snug"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(107,100,89,0.9)',
              opacity: distrito44Expanded ? 1 : 0.55,
              transform: distrito44Expanded ? 'translateY(0)' : 'translateY(5px)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            Smash burgers & street food · Bella Vista
          </p>

          {/* CTA button */}
          <div
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5"
            style={{
              border: '1px solid rgba(255,102,0,0.3)',
              background: 'rgba(255,102,0,0.06)',
              borderRadius: '2px',
              opacity: distrito44Expanded ? 1 : 0.15,
              transform: distrito44Expanded ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
              transition: 'opacity 0.32s ease, transform 0.32s ease',
            }}
          >
            <span className="label-caps" style={{ color: '#ff6600', letterSpacing: '0.24em' }}>
              Ver Menú
            </span>
            <ArrowRight color="#ff6600" />
          </div>
        </div>
      </div>

      {/* ── Bottom hint ─────────────────────────────────────────────────── */}
      <p
        className="fixed bottom-5 left-0 right-0 text-center pointer-events-none label-caps anim-fade-in delay-4"
        style={{ color: 'rgba(90,90,90,0.5)' }}
      >
        Selecciona un restaurante
      </p>
    </div>
  )
}
