const ROWS = [
  {
    project: 'IBUDI',
    ai: 'AI generates content at scale',
    human: 'Audience validates — rejected vs. accepted',
  },
  {
    project: 'dacadoo',
    ai: 'AI assists across training sessions',
    human: 'Legal pre-approves · Teams adopt independently',
  },
  {
    project: 'ICH',
    ai: 'AI analyzes 6 governance documents',
    human: 'Human CONFIRM gate · Independent audit',
  },
  {
    project: 'Tunon',
    ai: 'AI allowed throughout the course',
    human: 'Student must defend decisions under questioning',
  },
]

export default function ScreenL4B() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '32px',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '40px',
        fontWeight: 400,
        color: 'var(--cream)',
        lineHeight: 1.2,
        maxWidth: '820px',
      }}>
        4 full campaign strategies created. All built with AI.{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>All defended without it.</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr 1fr',
        gap: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--dim)',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)' }}>Project</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--coral)' }}>↳ AI Step</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--green)' }}>↳ Human Validation</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {ROWS.map((row) => (
          <div key={row.project} style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr 1fr',
            gap: '16px',
            alignItems: 'center',
            padding: '18px 20px',
            background: 'var(--dim)',
            borderRadius: '6px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              {row.project}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--coral)',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: 'var(--cream)',
                lineHeight: 1.5,
              }}>
                {row.ai}
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--green)',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: 'var(--green)',
                lineHeight: 1.5,
                opacity: 0.85,
              }}>
                {row.human}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '18px',
        color: 'var(--muted)',
        lineHeight: 1.7,
        borderLeft: '3px solid var(--dim)',
        paddingLeft: '18px',
        maxWidth: '680px',
      }}>
        This isn't accidental. It's a methodology.{' '}
        <strong style={{ color: 'var(--cream)' }}>AI proposes. Humans decide. Every time.</strong>
      </p>
    </div>
  )
}
