function HomeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1.5 5.5L6.5 1.5L11.5 5.5V11.5H8.5V8.5H4.5V11.5H1.5V5.5Z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

export default function BrandSwitcher({ activeBrand, onSwitch, onHome }) {
  const other = activeBrand === 'chiguire' ? 'distrito44' : 'chiguire'
  const otherLabel = other === 'chiguire' ? 'ChiguireFood' : 'Distrito 44'

  return (
    <div
      className="brand-switcher fixed bottom-5 right-4 z-[9998] flex items-center gap-2.5 px-3 py-2 rounded-full"
      style={{
        background: 'color-mix(in srgb, var(--surface) 92%, transparent)',
        border: '1px solid var(--border-c)',
        boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
      }}
    >
      {/* Home button */}
      <button
        onClick={onHome}
        className="flex items-center cursor-pointer"
        title="Volver al inicio"
        aria-label="Volver al inicio"
        style={{
          color: 'var(--text-muted)',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
      >
        <HomeIcon />
      </button>

      {/* Divider */}
      <span className="w-px h-4 flex-shrink-0" style={{ background: 'var(--border-c)' }} />

      {/* Active brand logo — dimmed */}
      <div className="flex items-center opacity-30 pointer-events-none">
        {activeBrand === 'chiguire' ? (
          <img src="/logo-chiguire.png" alt="ChiguireFood" className="h-5 w-auto" />
        ) : (
          <img src="/logo-distrito44.svg" alt="Distrito 44" className="h-4 w-auto" />
        )}
      </div>

      {/* Divider */}
      <span className="w-px h-4 flex-shrink-0" style={{ background: 'var(--border-c)' }} />

      {/* Switch to other brand */}
      <button
        onClick={() => onSwitch(other)}
        className="flex items-center gap-2 cursor-pointer group"
        title={`Cambiar a ${otherLabel}`}
        aria-label={`Cambiar a ${otherLabel}`}
      >
        {other === 'chiguire' ? (
          <img src="/logo-chiguire.png" alt="ChiguireFood"
            className="h-5 w-auto transition-opacity duration-200 group-hover:opacity-75" />
        ) : (
          <img src="/logo-distrito44.svg" alt="Distrito 44"
            className="h-4 w-auto transition-opacity duration-200 group-hover:opacity-75" />
        )}
        <span className="label-caps text-[0.58rem] hidden sm:inline" style={{ color: 'var(--accent)' }}>
          Cambiar
        </span>
      </button>
    </div>
  )
}
