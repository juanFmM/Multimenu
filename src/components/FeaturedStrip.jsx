import { FEATURED_NAMES } from '../data/featured'

export default function FeaturedStrip({ items }) {
  const featured = FEATURED_NAMES
    .map((name) => items.find((it) => it.name === name))
    .filter(Boolean)

  if (featured.length === 0) return null

  // Duplicamos la lista para crear un loop perfecto: al llegar a -50% del
  // ancho del track (que mide el doble por la duplicación), el contenido
  // visible es idéntico al inicio, así el reinicio de la animación es invisible.
  const loopItems = [...featured, ...featured]
  const duration = featured.length * 4.5 // segundos — ritmo constante sin importar la cantidad de destacados

  return (
    <section className="max-w-5xl mx-auto px-4 mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="label-caps tracking-[0.22em]" style={{ color: 'var(--text-muted)' }}>
          Destacados
        </span>
        <span className="flex-1 h-px" style={{ background: 'var(--border-c)' }} />
        <i className="fa-solid fa-fire-flame-curved text-[0.7rem]" style={{ color: 'var(--accent)' }} />
      </div>

      <div className="featured-viewport">
        <div
          className="featured-track flex gap-3"
          style={{ animationDuration: `${duration}s` }}
        >
          {loopItems.map((item, i) => (
            <FeaturedCard key={`${item.id}-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ item, index }) {
  const displayPrice = item.price ?? item.variants?.[0]?.price ?? null

  const handleClick = () => {
    document
      .getElementById(`section-${item.categoryId}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className="featured-card flex-shrink-0 relative overflow-hidden rounded-xl cursor-pointer"
      style={{ width: '185px', height: '255px' }}
      onClick={handleClick}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="featured-card-img absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      ) : (
        <div className="absolute inset-0" style={{ background: 'var(--surface-2)' }} />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 52%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      {item.badge && (
        <div className="absolute top-3 left-3">
          <span
            className="label-caps px-2 py-0.5 rounded"
            style={{
              background: 'color-mix(in srgb, var(--accent) 18%, rgba(0,0,0,0.55))',
              color: 'var(--accent)',
              fontSize: '0.57rem',
              letterSpacing: '0.18em',
            }}
          >
            {item.badge}
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p
          className="font-semibold leading-tight mb-1.5"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#f2f2f2',
            fontSize: '0.92rem',
          }}
        >
          {item.name}
        </p>
        {displayPrice != null && (
          <p className="grad-text font-bold" style={{ fontSize: '0.88rem' }}>
            ${displayPrice.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  )
}
