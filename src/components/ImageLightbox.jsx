import { useEffect } from 'react'

export default function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full anim-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
        />

        {/* Nombre del plato */}
        <div
          className="absolute bottom-0 left-0 right-0 px-5 py-4 rounded-b-sm"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}
        >
          <p className="font-display text-2xl text-[#f0f0f0] tracking-wide">{alt}</p>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-sm border border-[#262626] text-[#6a6a6a] hover:text-[#f0f0f0] hover:border-[#d9a818]/40 transition-all cursor-pointer backdrop-blur-sm"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          aria-label="Cerrar"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <p className="absolute bottom-5 left-0 right-0 text-center label-caps"
        style={{ color: 'rgba(100,100,100,0.5)' }}>
        Clic en cualquier lugar para cerrar · Esc
      </p>
    </div>
  )
}
