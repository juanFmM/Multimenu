import MenuItemCard from './MenuItemCard'

export default function MenuSection({ category, items, brand, reorderMode, onMove }) {
  // Modo elegante (serif + gold-rule con ícono) para Chiguire y la vista unificada.
  const isChiguire = brand === 'chiguire' || brand === 'unified'

  return (
    <section id={`section-${category.id}`} className="mb-16 anim-fade-in">

      {/* ── Section header ──────────────────────────────────────────────── */}
      <div className="mb-7">
        {isChiguire ? (
          /* ChiguireFood: gold rule accent */
          <div className="flex items-center gap-3.5 mb-2.5">
            <span className="flex-shrink-0 w-8 gold-rule" />
            {category.icon && (
              <i
                className={`${category.icon} text-xs flex-shrink-0`}
                style={{ color: 'var(--accent)' }}
              />
            )}
            <span className="flex-shrink-0 w-8 gold-rule" />
          </div>
        ) : (
          /* Distrito44: emoji + orange dot */
          <div className="flex items-center gap-2.5 mb-2.5">
            {category.emoji && (
              <span className="text-lg leading-none">{category.emoji}</span>
            )}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </div>
        )}

        <h2
          className="leading-none mb-1"
          style={{
            color: 'var(--text-primary)',
            fontFamily: isChiguire
              ? "'Playfair Display', Georgia, serif"
              : "'Bebas Neue', sans-serif",
            fontSize: isChiguire ? '2rem' : '2.25rem',
            fontWeight: isChiguire ? 700 : 400,
            letterSpacing: isChiguire ? '0' : '0.05em',
          }}
        >
          {category.name}
        </h2>

        {category.description && (
          <p
            className="text-sm mt-0.5"
            style={{
              color: 'var(--text-muted)',
              fontStyle: isChiguire ? 'italic' : 'normal',
              fontFamily: isChiguire
                ? "'Cormorant Garamond', serif"
                : "'Inter', sans-serif",
              fontSize: isChiguire ? '1rem' : '0.875rem',
            }}
          >
            {category.description}
          </p>
        )}

        <div className="mt-3 section-line" />
      </div>

      {/* ── Items grid ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <div key={item.id} className={`relative ${reorderMode ? 'reorder-mode-card' : ''}`}>
            {reorderMode && (
              <div className="reorder-controls absolute top-2 right-2 z-20 flex gap-1.5">
                <button
                  type="button"
                  disabled={i === 0}
                  onClick={(e) => { e.stopPropagation(); onMove?.(item.id, 'up') }}
                  className="reorder-btn"
                  aria-label="Mover arriba"
                  title="Mover arriba"
                >
                  <i className="fa-solid fa-chevron-up" />
                </button>
                <button
                  type="button"
                  disabled={i === items.length - 1}
                  onClick={(e) => { e.stopPropagation(); onMove?.(item.id, 'down') }}
                  className="reorder-btn"
                  aria-label="Mover abajo"
                  title="Mover abajo"
                >
                  <i className="fa-solid fa-chevron-down" />
                </button>
              </div>
            )}
            <MenuItemCard item={item} index={i} brand={brand} />
          </div>
        ))}
      </div>
    </section>
  )
}
