const LABELS = ['Terrified', '2', '3', '4', 'Excited']
const HEIGHTS = [42, 26, 16, 12, 8]

export default function ScreenA3A() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '28px',
    }}>
      <div>
        <div className="label-mono" style={{ marginBottom: '16px' }}>Poll Callback</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '44px',
          fontWeight: 400,
          color: 'var(--cream)',
          lineHeight: 1.2,
        }}>
          Has anything shifted?
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '18px',
          fontStyle: 'italic',
          color: 'var(--muted)',
          marginTop: '10px',
        }}>
          This was how you answered at the start of the lecture.
        </p>
      </div>

      <div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '16px',
        }}>
          How confident are you that AI will{' '}
          <span style={{ color: 'var(--coral)' }}>positively</span>{' '}
          impact your career?
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '20px',
          height: '200px',
          maxWidth: '580px',
        }}>
          {LABELS.map((label, i) => (
            <div key={label} style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'flex-end',
              gap: '10px',
            }}>
              <div style={{
                width: '100%',
                height: `${HEIGHTS[i]}%`,
                background: i === 0
                  ? 'linear-gradient(180deg, var(--red) 0%, rgba(204,68,68,0.4) 100%)'
                  : i === 4
                  ? 'linear-gradient(180deg, var(--coral) 0%, rgba(232,86,42,0.4) 100%)'
                  : 'var(--dim)',
                borderRadius: '4px 4px 0 0',
                minHeight: '4px',
              }} />
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
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

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '22px',
        fontStyle: 'italic',
        color: 'var(--muted)',
      }}>
        Take a moment. Then we vote again.
      </p>
    </div>
  )
}
