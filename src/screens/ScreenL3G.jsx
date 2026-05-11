const METRICS = [
  { number: '6',    label: 'Governance documents\n(~500+ pages)' },
  { number: '59',   label: 'Governance clusters\nmapped' },
  { number: '100+', label: 'Findings\nvalidated' },
  { number: '65+',  label: 'Decision codes\nlogged' },
  { number: '5',    label: 'Project phases\ncompleted' },
  { number: '5mo',  label: 'Jan–May 2026\nstill running' },
]

export default function ScreenL3G() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px 64px',
      gap: '28px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '0',
        borderTop: '1px solid var(--dim)',
        borderLeft: '1px solid var(--dim)',
      }}>
        {METRICS.map(({ number, label }) => (
          <div key={number} style={{
            borderRight: '1px solid var(--dim)',
            borderBottom: '1px solid var(--dim)',
            padding: '18px 12px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '56px',
              fontWeight: 900,
              color: 'var(--cream)',
              lineHeight: 1,
              letterSpacing: '-1px',
            }}>
              {number}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: '8px',
              lineHeight: 1.5,
              whiteSpace: 'pre-line',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: '0',
        maxWidth: '820px',
        borderTop: '1px solid var(--dim)',
        borderLeft: '1px solid var(--dim)',
      }}>
        {/* Left: 0 pharmaceutical expertise */}
        <div style={{
          flex: 1,
          borderRight: '1px solid var(--dim)',
          borderBottom: '1px solid var(--dim)',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '80px',
            fontWeight: 900,
            color: 'var(--muted)',
            lineHeight: 1,
            letterSpacing: '-3px',
            flexShrink: 0,
            opacity: 0.5,
          }}>
            0
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              color: 'var(--cream)',
              lineHeight: 1.4,
            }}>
              pharmaceutical expertise
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--muted)',
              marginTop: '4px',
              fontStyle: 'italic',
            }}>
              that was the client's job
            </div>
          </div>
        </div>

        {/* Right: 100% AI system design */}
        <div style={{
          flex: 1,
          borderRight: '1px solid var(--dim)',
          borderBottom: '1px solid var(--dim)',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          background: 'rgba(232,86,42,0.06)',
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '80px',
            fontWeight: 900,
            color: 'var(--coral)',
            lineHeight: 1,
            letterSpacing: '-3px',
            flexShrink: 0,
          }}>
            100%
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              color: 'var(--cream)',
              lineHeight: 1.4,
            }}>
              AI system design
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--coral)',
              marginTop: '4px',
              fontStyle: 'italic',
            }}>
              that was mine
            </div>
          </div>
        </div>
      </div>

      <div style={{
        borderLeft: '4px solid var(--coral)',
        background: 'var(--dim)',
        borderRadius: '0 6px 6px 0',
        padding: '16px 20px',
        maxWidth: '820px',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--coral)',
          marginBottom: '6px',
        }}>
          Also — EasyGenerator
        </div>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          color: 'var(--muted)',
          lineHeight: 1.7,
        }}>
          Evaluated and deployed their AI e-learning platform globally — tutorials, videos,
          AI-generated voiceovers — for staff teams across the world.
        </p>
      </div>

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '20px',
        fontStyle: 'italic',
        color: 'var(--cream)',
        lineHeight: 1.6,
        maxWidth: '820px',
      }}>
        No consulting team could have done this in this timeline.{' '}
        <strong style={{ color: 'var(--coral)', fontStyle: 'normal' }}>
          And if they could, they wouldn't have maintained the consistency.
        </strong>
      </p>
    </div>
  )
}
