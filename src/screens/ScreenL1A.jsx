const BRANDS = ['Carrefour', 'Super U', 'E.Leclerc', 'Intermarché']

function BigStat({ number, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '80px',
        fontWeight: 900,
        color: label === 'pages' ? 'var(--coral)' : 'var(--cream)',
        lineHeight: 1,
        letterSpacing: '-2px',
      }}>
        {number}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        marginTop: '8px',
      }}>
        {label}
      </div>
    </div>
  )
}

export default function ScreenL1A() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      alignItems: 'center',
      padding: '48px 80px',
      gap: '80px',
    }}>
      <div style={{ flex: '1 1 0', minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--coral)',
          marginBottom: '14px',
        }}>
          Level 01
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '64px',
          fontWeight: 700,
          color: 'var(--cream)',
          lineHeight: 1.05,
          marginBottom: '28px',
        }}>
          AI as my{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>hands</em>
        </h1>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '18px',
          fontWeight: 400,
          color: 'var(--muted)',
          lineHeight: 1.7,
          maxWidth: '420px',
          marginBottom: '32px',
        }}>
          Managing 40+ retail pages across France with a custom GPT model that
          generates localized, brand-compliant content at scale.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {BRANDS.map((b) => (
            <span key={b} className="pill">{b}</span>
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '48px',
        flexShrink: 0,
      }}>
        <BigStat number="40+" label="pages" />
        <BigStat number="300K" label="users / month" />
      </div>
    </div>
  )
}
