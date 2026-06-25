import { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import { stripEmoji } from '../lib/stripEmoji'

// Config de badges para el modo elegante (Chiguire + Unificado). Incluye los
// badges propios de Distrito 44 para que también muestren ícono en la vista
// unificada. Cualquier badge desconocido cae en un ícono por defecto.
const BADGE_CFG = {
  Popular:        { icon: 'fa-solid fa-star',                color: '#d9a818' },
  Especial:       { icon: 'fa-solid fa-fire',                color: '#e8c000' },
  Signature:      { icon: 'fa-solid fa-crown',               color: '#e8c000' },
  Quesero:        { icon: 'fa-solid fa-cheese',              color: '#c9991a' },
  Favorito:       { icon: 'fa-solid fa-drumstick-bite',      color: '#c9991a' },
  Kids:           { icon: 'fa-solid fa-child-reaching',      color: '#d9a818' },
  Compartir:      { icon: 'fa-solid fa-people-group',        color: '#d9a818' },
  Picante:        { icon: 'fa-solid fa-pepper-hot',          color: '#e8c000' },
  Combo:          { icon: 'fa-solid fa-layer-group',         color: '#c9991a' },
  Clásica:        { icon: 'fa-solid fa-star',                color: '#d9a818' },
  Personalizable: { icon: 'fa-solid fa-wand-magic-sparkles', color: '#c9991a' },
}
const FALLBACK_BADGE = { icon: 'fa-solid fa-utensils', color: '#d9a818' }

export default function MenuItemCard({ item, index = 0, brand }) {
  const [lightbox, setLightbox] = useState(false)
  const isChiguire = brand === 'chiguire'
  const isUnified = brand === 'unified'
  const elegant = isChiguire || isUnified // tipografía serif elegante
  const delay = ['delay-0', 'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5'][index % 6]
  const image = item.image || item.imageUrl || item.image_url
  const allowZoom = !isChiguire // unificado y Distrito 44 permiten lightbox

  // Badge: en modo elegante usa la config con ícono; en Distrito 44 puro, texto.
  const elegantBadge = elegant && item.badge ? (BADGE_CFG[item.badge] || FALLBACK_BADGE) : null
  // En unificado el color del badge se unifica al acento (degradado del tema).
  const elegantBadgeColor = isUnified ? 'var(--accent)' : elegantBadge?.color
  const distrito44Badge = !elegant && item.badge ? stripEmoji(item.badge) : null

  return (
    <>
      <article className={`menu-card anim-fade-up ${delay} rounded-lg overflow-hidden flex flex-col`}>

        {/* ── Image ──────────────────────────────────────────────────── */}
        {image && (
          <div
            className={`card-img h-48 sm:h-52 ${allowZoom ? 'cursor-zoom-in group' : ''}`}
            onClick={allowZoom ? () => setLightbox(true) : undefined}
            role={allowZoom ? 'button' : undefined}
            tabIndex={allowZoom ? 0 : undefined}
            onKeyDown={allowZoom ? (e) => e.key === 'Enter' && setLightbox(true) : undefined}
          >
            <img
              src={image}
              alt={item.name}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.closest('.card-img').style.display = 'none' }}
            />

            {/* Zoom hint */}
            {allowZoom && (
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

            {/* Elegant badge on image */}
            {elegant && elegantBadge && (
              <span
                className="badge-soft absolute top-3 left-3 z-10 text-[0.59rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm"
                style={{
                  background: 'rgba(0,0,0,0.82)',
                  border: '1px solid color-mix(in srgb, var(--accent) 35%, transparent)',
                  color: elegantBadgeColor,
                }}
              >
                <i className={`${elegantBadge.icon} text-[0.52rem]`} />
                {item.badge}
              </span>
            )}

            {/* Distrito44 badge on image */}
            {!elegant && distrito44Badge && (
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
          {!image && elegant && elegantBadge && (
            <span
              className="badge-soft self-start text-[0.59rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5"
              style={{
                background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
                color: elegantBadgeColor,
              }}
            >
              <i className={`${elegantBadge.icon} text-[0.52rem]`} />
              {item.badge}
            </span>
          )}

          {!image && !elegant && distrito44Badge && (
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
              fontFamily: elegant
                ? "'Playfair Display', Georgia, serif"
                : "'Bebas Neue', sans-serif",
              fontSize: elegant ? '1.4rem' : '1.55rem',
              fontWeight: elegant ? 700 : 400,
              letterSpacing: elegant ? '0' : '0.04em',
            }}
          >
            {item.name}
          </h3>

          {/* Description */}
          <p
            className="flex-1 leading-snug"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: elegant
                ? "'Cormorant Garamond', serif"
                : "'Inter', sans-serif",
              fontSize: elegant ? '1.02rem' : '0.875rem',
              fontStyle: elegant ? 'italic' : 'normal',
              fontWeight: elegant ? 500 : 300,
            }}
          >
            {item.description}
          </p>

          {/* Price — variants */}
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
                    fontFamily: elegant
                      ? "'Playfair Display', serif"
                      : "'Bebas Neue', sans-serif",
                    fontSize: elegant ? '1.75rem' : '1.9rem',
                    fontWeight: elegant ? 700 : 400,
                    letterSpacing: elegant ? '0' : '0.04em',
                  }}
                >
                  ${item.price}
                </span>
              ) : (
                <span
                  className="italic text-sm"
                  style={{
                    color: 'var(--text-faint)',
                    fontFamily: elegant ? "'Cormorant Garamond', serif" : "'Inter', sans-serif",
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
