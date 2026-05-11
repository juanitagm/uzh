const POINTS = [
  'Strategic communication + AI fluency = the profile companies can\'t find',
  'No Computer Science degree needed — the strategic thinking you\'re building at UZH is the foundation',
  'Roles that didn\'t exist 2 years ago are waiting for people like you',
  'The opportunity: designing HOW organizations use AI',
]

export default function ScreenA3C() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '36px',
    }}>
      <div>
        <div className="label-mono" style={{ marginBottom: '16px' }}>The Bridge</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '52px',
          fontWeight: 700,
          color: 'var(--cream)',
          lineHeight: 1.1,
        }}>
          What this means for{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>you</em>
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '860px' }}>
        {POINTS.map((point, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              padding: '20px 24px',
              background: 'var(--dim)',
              borderRadius: '6px',
              animation: `fadeUp 0.5s ease ${i * 0.12}s both`,
            }}
          >
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '26px',
              color: 'var(--coral)',
              flexShrink: 0,
              lineHeight: 1.3,
              fontWeight: 700,
            }}>
              →
            </span>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '20px',
              fontWeight: 400,
              color: 'var(--cream)',
              lineHeight: 1.55,
            }}>
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
