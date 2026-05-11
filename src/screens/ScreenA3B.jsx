const LABELS = ['Terrified', '2', '3', '4', 'Excited']
const BEFORE = [42, 26, 16, 12, 8]
const AFTER  = [10, 15, 25, 30, 20]

function PollColumn({ title, heights, accentLow, accentHigh }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        marginBottom: '20px',
        textAlign: 'center',
      }}>
        {title}
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '12px',
        height: '200px',
      }}>
        {LABELS.map((label, i) => (
          <div key={label} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'flex-end',
            gap: '8px',
          }}>
            <div style={{
              width: '100%',
              height: `${heights[i]}%`,
              background: i === 0 && accentLow
                ? 'linear-gradient(180deg, var(--red) 0%, rgba(204,68,68,0.4) 100%)'
                : i === 4 && accentHigh
                ? 'linear-gradient(180deg, var(--coral) 0%, rgba(232,86,42,0.4) 100%)'
                : i >= 3 && !accentLow
                ? 'linear-gradient(180deg, var(--coral) 0%, rgba(232,86,42,0.4) 100%)'
                : 'var(--dim)',
              borderRadius: '4px 4px 0 0',
              minHeight: '3px',
              transition: 'height 0.8s ease',
            }} />
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '1px',
              color: 'var(--muted)',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ScreenA3B() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '32px',
    }}>
      <div className="label-mono">Live Poll — Round 2</div>

      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '40px',
        fontWeight: 400,
        color: 'var(--cream)',
        lineHeight: 1.2,
      }}>
        How confident are you that AI will{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>positively</em>{' '}
        impact your career?
      </h2>

      <div style={{
        display: 'flex',
        gap: '0',
        maxWidth: '760px',
      }}>
        <PollColumn title="Start of lecture" heights={BEFORE} accentLow={true} accentHigh={false} />

        <div style={{
          width: '1px',
          background: 'var(--dim)',
          margin: '0 32px',
          alignSelf: 'stretch',
        }} />

        <PollColumn title="Now" heights={AFTER} accentLow={false} accentHigh={true} />
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--coral)', opacity: 0.6 }} />
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontStyle: 'italic',
          color: 'var(--muted)',
        }}>
          Results update in real time
        </span>
      </div>
    </div>
  )
}
