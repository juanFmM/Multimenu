import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

const CHIGUIRE_BADGE_CFG = {
  Popular:   { icon: 'fa-solid fa-star',           color: '#d9a818' },
  Especial:  { icon: 'fa-solid fa-fire',            color: '#e8c000' },
  Signature: { icon: 'fa-solid fa-crown',           color: '#e8c000' },
  Quesero:   { icon: 'fa-solid fa-cheese',          color: '#c9991a' },
  Favorito:  { icon: 'fa-solid fa-drumstick-bite',  color: '#c9991a' },
  Kids:      { icon: 'fa-solid fa-child-reaching',  color: '#d9a818' },
  Compartir: { icon: 'fa-solid fa-people-group',    color: '#d9a818' },
}

function stripEmoji(str) {
  if (!str) return null
  return str
    .replace(/[\u{1F300}-\u{1FFFF}]/gu, '')
    .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '')
    .replace(/[\u{2600}-\u{27BF}]/gu, '')
    .trim() || str.trim()
}

export default function MenuItemCard({ item, index = 0, brand }) {
  const [lightbox, setLightbox] = useState(false)
  const isChiguire = brand === 'chiguire'
  const delay = ['delay-0', 'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5'][index % 6]
  const image = item.image || item.imageUrl || item.image_url
  const chiguireBadge = isChiguire && item.badge ? CHIGUIRE_BADGE_CFG[item.badge] : null
  const distrito44Badge = !isChiguire && item.badge ? stripEmoji(item.badge) : null

  return (
    <>
      <article className={`menu-card anim-fade-up ${delay} rounded-lg overflow-hidden flex flex-col`}>

        {/* ── Image ──────────────────────────────────────────────────── */}
        {image && (
          <div
            className={`card-img h-48 sm:h-52 ${!isChiguire ? 'cursor-zoom-in group' : ''}`}
            onClick={!isChiguire ? () => setLightbox(true) : undefined}
            role={!isChiguire ? 'button' : undefined}
            tabIndex={!isChiguire ? 0 : undefined}
            onKeyDown={!isChiguire ? (e) => e.key === 'Enter' && setLightbox(true) : undefined}
          >
            <img
              src={image}
              alt={item.name}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover"
              onError={!isChiguire ? (e) => { e.target.closest('.card-img').style.display = 'none' } : undefined}
            />

            {/* Zoom hint — Distrito44 only */}
            {!isChiguire && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div
                  className="rounded-sm px-3 py-2 backdrop-blur-sm"
                  style={{ background: 'rgba(0,0,0,0.75)', border: '1px solid var(--border-c)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: 'var(--text-primary)' }}>
                    <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M6 8.5H11M8.5 6V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            )}

            {/* ChiguireFood badge on image */}
            {isChiguire && chiguireBadge && (
              <span
                className="badge-soft absolute top-3 left-3 z-10 text-[0.59rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm"
                style={{
                  background: 'rgba(0,0,0,0.82)',
                  border: '1px solid rgba(217,168,24,0.35)',
                  color: chiguireBadge.color,
                }}
              >
                <i className={`${chiguireBadge.icon} text-[0.52rem]`} />
                {item.badge}
              </span>
            )}

            {/* Distrito44 badge on image */}
            {!isChiguire && distrito44Badge && (
              <span
                className="absolute top-3 right-3 label-caps backdrop-blur-sm pointer-events-none px-2.5 py-1"
                style={{
                  borderRadius: '2px',
                  background: 'rgba(0,0,0,0.85)',
                  color: 'var(--accent)',
                  border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
                }}
              >
                {distrito44Badge}
              </span>
            )}
          </div>
        )}

        {/* ── Body ───────────────────────────────────────────────────── */}
        <div className="p-5 flex flex-col gap-2.5 flex-1">

          {/* Badge when no image */}
          {!image && isChiguire && chiguireBadge && (
            <span
              className="badge-soft self-start text-[0.59rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5"
              style={{
                background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
                color: chiguireBadge.color,
              }}
            >
              <i className={`${chiguireBadge.icon} text-[0.52rem]`} />
              {item.badge}
            </span>
          )}

          {!image && !isChiguire && distrito44Badge && (
            <span
              className="label-caps self-start pb-0.5"
              style={{
                color: 'var(--accent)',
                borderBottom: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)',
              }}
            >
              {distrito44Badge}
            </span>
          )}

          {/* Name */}
          <h3
            className="leading-tight"
            style={{
              color: 'var(--text-primary)',
              fontFamily: isChiguire
                ? "'Playfair Display', Georgia, serif"
                : "'Bebas Neue', sans-serif",
              fontSize: isChiguire ? '1.4rem' : '1.55rem',
              fontWeight: isChiguire ? 700 : 400,
              letterSpacing: isChiguire ? '0' : '0.04em',
            }}
          >
            {item.name}
          </h3>

          {/* Description */}
          <p
            className="flex-1 leading-snug"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: isChiguire
                ? "'Cormorant Garamond', serif"
                : "'Inter', sans-serif",
              fontSize: isChiguire ? '1.02rem' : '0.875rem',
              fontStyle: isChiguire ? 'italic' : 'normal',
              fontWeight: isChiguire ? 500 : 300,
            }}
          >
            {item.description}
          </p>

          {/* Price — variants (ChiguireFood) */}
          {item.variants ? (
            <div
              className="pt-3 mt-1 flex flex-col gap-1.5"
              style={{ borderTop: '1px solid var(--border-c)' }}
            >
              {item.variants.map((v) => (
                <div key={v.label} className="flex items-center justify-between">
                  <span
                    className="italic"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.02rem',
                    }}
                  >
                    {v.label}
                  </span>
                  <span className="flex items-baseline gap-1">
                    <span
                      className="price-tag leading-none"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.3rem',
                        fontWeight: 700,
                      }}
                    >
                      ${v.price}
                    </span>
                    <span className="label-caps text-[0.5rem]">RD$</span>
                  </span>
                </div>
              ))}
            </div>
          ) : (
            /* Price — single */
            <div
              className="flex items-center justify-between pt-3 mt-1"
              style={{ borderTop: '1px solid var(--border-c)' }}
            >
              {item.price ? (
                <span
                  className="price-tag leading-none"
                  style={{
                    fontFamily: isChiguire
                      ? "'Playfair Display', serif"
                      : "'Bebas Neue', sans-serif",
                    fontSize: isChiguire ? '1.75rem' : '1.9rem',
                    fontWeight: isChiguire ? 700 : 400,
                    letterSpacing: isChiguire ? '0' : '0.04em',
                  }}
                >
                  ${item.price}
                </span>
              ) : (
                <span
                  className="italic text-sm"
                  style={{
                    color: 'var(--text-faint)',
                    fontFamily: isChiguire ? "'Cormorant Garamond', serif" : "'Inter', sans-serif",
                  }}
                >
                  A consultar
                </span>
              )}
              <span className="label-caps text-[0.52rem]">RD$</span>
            </div>
          )}
        </div>
      </article>

      {lightbox && image && (
        <ImageLightbox src={image} alt={item.name} onClose={() => setLightbox(false)} />
      )}
    </>
  )
}
