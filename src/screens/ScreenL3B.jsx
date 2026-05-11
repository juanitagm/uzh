const ISSUES = [
  { icon: '⚠', title: 'Terminology drift',   desc: 'Same concept, different words across documents' },
  { icon: '⛔', title: 'Authority conflicts', desc: 'Lower docs contradicting higher-level rules' },
  { icon: '🔄', title: 'Structural overlap',  desc: 'Duplicated provisions with subtle differences' },
  { icon: '❓', title: 'Undefined terms',     desc: 'Operative terms triggering actions but never defined' },
]

export default function ScreenL3B() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '36px 64px',
      gap: '56px',
    }}>
      {/* ── Left: impact framing ── */}
      <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="label-mono">The Problem</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '36px',
          fontWeight: 400,
          color: 'var(--cream)',
          lineHeight: 1.2,
        }}>
          6 governance documents. Evolved independently{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>over years.</em>
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '18px',
          color: 'var(--muted)',
          lineHeight: 1.6,
        }}>
          Controlling how every medicine on the planet gets approved.
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          gap: '0',
          borderTop: '1px solid var(--dim)',
          borderLeft: '1px solid var(--dim)',
        }}>
          {[
            { n: '20', label: 'member\nauthorities' },
            { n: '36', label: 'observer\norganisations' },
            { n: '67', label: 'active\nguidelines' },
          ].map(({ n, label }) => (
            <div key={n} style={{
              flex: 1,
              borderRight: '1px solid var(--dim)',
              borderBottom: '1px solid var(--dim)',
              padding: '14px 16px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '40px',
                fontWeight: 900,
                color: 'var(--cream)',
                lineHeight: 1,
                letterSpacing: '-1px',
              }}>{n}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: '6px',
                lineHeight: 1.4,
                whiteSpace: 'pre-line',
              }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(232,86,42,0.08)',
          borderLeft: '4px solid var(--coral)',
          borderRadius: '0 6px 6px 0',
          padding: '14px 20px',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            color: 'var(--cream)',
            lineHeight: 1.6,
          }}>
            When these documents contradict each other,{' '}
            <strong style={{ color: 'var(--coral)' }}>patient safety is at stake.</strong>
          </p>
        </div>
      </div>

      {/* ── Right: issues + stakeholders ── */}
      <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--red)',
        }}>
          Issues Found
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ISSUES.map((issue) => (
            <div key={issue.title} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              background: 'var(--dim)',
              border: '1px solid rgba(204,68,68,0.15)',
              borderRadius: '6px',
              padding: '20px 24px',
            }}>
              <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{issue.icon}</span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--cream)',
                  marginBottom: '4px',
                }}>
                  {issue.title}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  color: 'var(--muted)',
                  lineHeight: 1.55,
                }}>
                  {issue.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stakeholders card */}
        <div style={{
          background: 'rgba(232,86,42,0.1)',
          border: '1px solid rgba(232,86,42,0.35)',
          borderRadius: '6px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '16px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--coral)',
          }}>
            Stakeholders
          </div>
          {[
            '13 regulatory and industry leaders on the Management Committee',
            'Representatives from FDA, EMA, and every major health authority',
            'My deliverables go directly to this committee for review',
          ].map((line) => (
            <div key={line} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}>
              <span style={{ color: 'var(--coral)', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>→</span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: 'var(--cream)',
                lineHeight: 1.5,
              }}>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
