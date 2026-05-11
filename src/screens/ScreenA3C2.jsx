// AI adoption reality — dot grid visualization
// Data: UN World Population Prospects, Stanford AI Index, Microsoft AI Diffusion Report, OECD

// ~8.1B world population
// 84% never used AI           → 6,804M  (grey)
// ~16% used free chatbot      → 1,296M  (green)
// ~0.3% pay for AI            →    24M  (orange)
// <0.1% build AI systems      →     8M  (coral)

const SEGMENTS = [
  { pct: 84,   label: '84%',    sublabel: 'never used AI',       color: 'rgba(90,122,138,0.35)' },
  { pct: 15.6, label: '~16%',   sublabel: 'used a free chatbot', color: '#3dcc6e' },
  { pct: 0.3,  label: '~0.3%',  sublabel: 'pay for AI',          color: '#e8b62a' },
  { pct: 0.1,  label: '<0.1%',  sublabel: 'build AI systems',    color: '#e8562a' },
]

// Build a dot grid: 20 cols × 10 rows = 200 dots representing 100%
// Each dot = 0.5% of population
const COLS = 20
const ROWS = 10
const TOTAL_DOTS = COLS * ROWS // 200 dots = 100%

function buildDots() {
  const dots = []
  let filled = 0
  for (const seg of SEGMENTS) {
    const count = Math.round((seg.pct / 100) * TOTAL_DOTS)
    for (let i = 0; i < count && filled < TOTAL_DOTS; i++) {
      dots.push(seg.color)
      filled++
    }
  }
  while (filled < TOTAL_DOTS) { dots.push(SEGMENTS[0].color); filled++ }
  return dots
}

const DOTS = buildDots()

export default function ScreenA3C2() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 80px',
      gap: '28px',
    }}>
      <div>
        <div className="label-mono" style={{ marginBottom: '12px' }}>The Hidden Opportunity</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '28px',
          fontWeight: 400,
          color: 'var(--cream)',
          lineHeight: 1.3,
          maxWidth: '820px',
        }}>
          The biggest opportunities aren't on LinkedIn job boards. They're in the gaps companies
          don't even know they have.{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>
            You don't apply for these roles — you create them. That's what I did.
          </em>
        </h2>
      </div>

      {/* Dot grid */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        <div>
          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, 20px)`,
            gridTemplateRows: `repeat(${ROWS}, 20px)`,
            gap: '4px',
          }}>
            {DOTS.map((color, i) => (
              <div
                key={i}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: color,
                }}
              />
            ))}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--muted)',
            marginTop: '10px',
            letterSpacing: '1px',
          }}>
            Each dot = 0.5% of world population (8.1B people)
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
          {SEGMENTS.map((seg) => (
            <div key={seg.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: seg.color,
                flexShrink: 0,
              }} />
              <div>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: seg.color === 'rgba(90,122,138,0.35)' ? 'var(--muted)' : seg.color,
                  marginRight: '10px',
                }}>
                  {seg.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  color: 'var(--muted)',
                }}>
                  {seg.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '22px',
        fontStyle: 'italic',
        color: 'var(--cream)',
        maxWidth: '820px',
        lineHeight: 1.5,
      }}>
        You think AI is everywhere because you're in this room.{' '}
        <strong style={{ color: 'var(--coral)', fontStyle: 'normal' }}>
          The real world hasn't even started. That's your advantage.
        </strong>
      </p>

      {/* Source */}
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--muted)',
        opacity: 0.6,
        lineHeight: 1.5,
      }}>
        Data: UN World Population Prospects · Stanford AI Index · Microsoft AI Diffusion Report · OECD
        <span style={{ marginLeft: '16px', color: 'var(--teal)' }}>global-ai-adoption.netlify.app</span>
      </p>
    </div>
  )
}
