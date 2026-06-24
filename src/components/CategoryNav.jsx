import { useState, useEffect } from 'react'

export default function CategoryNav({ categories, brand }) {
  const [active, setActive] = useState(categories[0]?.id ?? '')
  const isChiguire = brand === 'chiguire'

  useEffect(() => {
    setActive(categories[0]?.id ?? '')
  }, [brand, categories])

  useEffect(() => {
    const observers = []
    categories.forEach((cat) => {
      const el = document.getElementById(`section-${cat.id}`)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(cat.id) },
        { rootMargin: '-28% 0px -65% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [categories])

  const scrollTo = (id) => {
    const el = document.getElementById(`section-${id}`)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 68
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <nav
      className="sticky top-0 z-50 overflow-x-auto"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-primary) 90%, transparent)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border-c)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-0.5 sm:gap-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className={`cat-pill text-[0.76rem] font-semibold whitespace-nowrap px-3 cursor-pointer flex items-center gap-1.5 ${
              active === cat.id ? 'active' : ''
            }`}
            style={{ color: active === cat.id ? 'var(--accent)' : 'var(--text-muted)' }}
          >
            {isChiguire && cat.icon && (
              <i className={`${cat.icon} text-[0.62rem]`} />
            )}
            {!isChiguire && cat.emoji && (
              <span className="text-[0.85rem] leading-none">{cat.emoji}</span>
            )}
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  )
}
