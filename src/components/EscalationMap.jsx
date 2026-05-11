const LEVELS = [
  { num: 4, label: 'AI as my vision', projects: 'Tunon + This Lecture' },
  { num: 3, label: 'AI as my brain',    projects: 'ICH Geneva' },
  { num: 2, label: 'AI as my voice',    projects: 'Webloyalty + dacadoo' },
  { num: 1, label: 'AI as my hands',    projects: 'IBUDI / Supermarkets' },
]

export default function EscalationMap({ activeLevel = 1, completedLevels = [] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '600px' }}>
      {LEVELS.map((lvl) => {
        const isActive    = lvl.num === activeLevel
        const isCompleted = completedLevels.includes(lvl.num)
        const isDimmed    = !isActive && !isCompleted

        const bg = isActive
          ? 'var(--coral)'
          : isCompleted
          ? 'var(--teal)'
          : 'var(--dim)'

        const textColor = isActive ? '#fff' : isCompleted ? 'var(--cream)' : 'var(--muted)'
        const opacity   = isDimmed ? 0.35 : 1

        return (
          <div
            key={lvl.num}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              background: bg,
              borderRadius: '6px',
              padding: '16px 24px',
              opacity,
              transition: 'all 0.4s ease',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '28px',
              fontWeight: 700,
              color: isActive ? '#fff' : isCompleted ? 'var(--coral)' : 'var(--muted)',
              minWidth: '52px',
            }}>
              L{lvl.num}
            </span>
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: isActive ? 700 : 400,
                color: textColor,
                fontStyle: 'italic',
              }}>
                {lvl.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: isActive ? 'rgba(255,255,255,0.7)' : 'var(--muted)',
                marginTop: '3px',
              }}>
                {lvl.projects}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
