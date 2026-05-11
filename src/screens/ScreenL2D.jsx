const STEPS = [
  { label: 'Structure',  desc: 'Define the task clearly before touching any tool' },
  { label: 'Iterate',    desc: 'Test, adjust, push — rapid cycles with intention' },
  { label: 'Refine',     desc: 'Sharpen the output until it meets the standard' },
  { label: 'Validate',   desc: 'A human reviews, decides, and takes responsibility', human: true },
]

export default function ScreenL2D() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '32px',
    }}>
      <div>
        <div className="label-mono" style={{ marginBottom: '12px' }}>The Method</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '40px',
          fontWeight: 400,
          color: 'var(--cream)',
          lineHeight: 1.2,
        }}>
          Not "how to write prompts."{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>A behavioral system.</em>
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'stretch', gap: '0' }}>
        {STEPS.map((step, i) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '24px 20px',
              background: step.human ? 'rgba(232,86,42,0.07)' : 'var(--dim)',
              border: step.human ? '2px solid var(--coral)' : '1px solid rgba(90,122,138,0.15)',
              borderRadius: '8px',
              height: '100%',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: step.human ? 'var(--coral)' : 'var(--muted)',
              }}>
                0{i + 1}
              </div>

              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '24px',
                fontWeight: step.human ? 700 : 400,
                color: step.human ? 'var(--coral)' : 'var(--cream)',
              }}>
                {step.label}
              </div>

              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                color: 'var(--muted)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                {step.desc}
              </div>

              {step.human && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(61,204,110,0.15)',
                  border: '1px solid rgba(61,204,110,0.4)',
                  borderRadius: '20px',
                  padding: '5px 12px',
                  alignSelf: 'flex-start',
                  marginTop: '4px',
                }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--green)',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--green)',
                  }}>
                    Human Control
                  </span>
                </div>
              )}
            </div>

            {i < STEPS.length - 1 && (
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '20px',
                color: 'var(--coral)',
                padding: '0 12px',
                flexShrink: 0,
              }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '18px',
        color: 'var(--cream)',
        lineHeight: 1.75,
        maxWidth: '760px',
        borderLeft: '3px solid var(--dim)',
        paddingLeft: '20px',
      }}>
        AI proposes. Humans decide. Always. And I went through legal review before
        delivering any of this. In a corporate setting, AI adoption without compliance
        alignment doesn't happen.
      </p>
    </div>
  )
}
