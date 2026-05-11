import GrayLogo from '../components/GrayLogo'

const MEMBERS = ['FDA', 'EMA', 'PMDA', 'Swissmedic', 'Health Canada']

export default function ScreenL3A() {
  return (
    <div className="screen screen--black" style={{
      display: 'flex',
      alignItems: 'center',
      padding: '48px 80px',
      gap: '64px',
    }}>
      <div style={{ flex: '1 1 0', minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--coral)',
          marginBottom: '16px',
        }}>
          Level 03 — The Climax
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '72px',
          fontWeight: 700,
          color: 'var(--cream)',
          lineHeight: 1.0,
          marginBottom: '28px',
        }}>
          AI as my{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>brain</em>
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <GrayLogo src="logos/ich-logo.png" alt="ICH" height={40} />
        </div>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '18px',
          color: 'var(--cream)',
          lineHeight: 1.75,
          maxWidth: '440px',
          marginBottom: '28px',
          opacity: 0.85,
        }}>
          ICH sets the global standards for how medicines are developed,
          tested, and approved. Their decisions affect every pharmaceutical
          company and every patient on the planet.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {MEMBERS.map((m) => (
            <span key={m} className="pill">{m}</span>
          ))}
        </div>
      </div>

      <div style={{
        flexShrink: 0,
        width: '360px',
        background: 'rgba(232, 86, 42, 0.08)',
        border: '1px solid rgba(232, 86, 42, 0.35)',
        borderRadius: '10px',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--coral)',
        }}>
          My Role
        </div>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '18px',
          color: 'var(--cream)',
          lineHeight: 1.7,
        }}>
          AI Consultant. Not a governance expert. Not a lawyer. Not a pharma specialist.
        </p>

        <div style={{
          height: '1px',
          background: 'rgba(232,86,42,0.25)',
        }} />

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          fontStyle: 'italic',
          color: 'var(--coral)',
          lineHeight: 1.6,
        }}>
          I designed the system. The client owned the domain.
        </p>
      </div>
    </div>
  )
}
