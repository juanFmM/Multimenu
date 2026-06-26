export default function ReorderToggle({ active, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="reorder-toggle fixed bottom-5 left-4 z-[9998] flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer"
      style={{
        background: active
          ? 'var(--accent)'
          : 'color-mix(in srgb, var(--surface) 92%, transparent)',
        border: active ? '1px solid var(--accent)' : '1px solid var(--border-c)',
        color: active ? '#0a0a0a' : 'var(--text-muted)',
        boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
      }}
      title={active ? 'Terminar de ordenar' : 'Ordenar productos del menú'}
      aria-label={active ? 'Terminar de ordenar' : 'Ordenar productos del menú'}
    >
      <i className={`fa-solid ${active ? 'fa-check' : 'fa-arrow-up-arrow-down'} text-xs`} />
      <span className="label-caps text-[0.6rem]" style={{ color: active ? '#0a0a0a' : 'var(--accent)' }}>
        {active ? 'Listo' : 'Ordenar'}
      </span>
    </button>
  )
}
