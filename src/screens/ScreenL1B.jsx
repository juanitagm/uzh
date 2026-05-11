import { asset as a } from '../utils/asset'

const STEPS = [
  {
    num: '01',
    title: 'Store sends photo',
    desc: 'Product or promotion photo sent directly from the store',
    asset: a('ibudi/ibudistore-input.jpg.png'),
    ai: false,
  },
  {
    num: '02',
    title: 'IBUDIGPT analyzes',
    desc: 'Custom GPT reads product, offer, store objective, audience profile',
    asset: a('ibudi/ibudigpt-output2.png'),
    ai: true,
  },
  {
    num: '03',
    title: 'Generates V1 V2 V3',
    desc: 'Three post variants — different angle, tone, or format',
    asset: a('ibudi/ibudigpt-output2.png'),
    ai: false,
  },
  {
    num: '04',
    title: 'Gemini / Midjourney',
    desc: 'Visual assets generated and adapted to audience profiles',
    asset: a('ibudi/ibudiaivisual1.png.png'),
    ai: false,
  },
]

function StepCard({ step }) {
  return (
    <div style={{
      flex: '1 1 0',
      display: 'flex',
      flexDirection: 'column',
      background: step.ai ? 'rgba(232,86,42,0.08)' : 'var(--dim)',
      border: step.ai ? '1px solid rgba(232,86,42,0.4)' : '1px solid rgba(90,122,138,0.15)',
      borderRadius: '8px',
      overflow: 'hidden',
      minWidth: 0,
    }}>
      {/* Image area — contain so screenshots are fully readable */}
      <div style={{
        height: 200,
        flexShrink: 0,
        background: '#0a0d10',
        borderBottom: step.ai ? '1px solid rgba(232,86,42,0.3)' : '1px solid rgba(90,122,138,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <img
          src={step.asset}
          alt={step.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          onError={(e) => {
            e.target.parentNode.style.background = step.ai ? 'rgba(232,86,42,0.12)' : 'var(--dim)'
            e.target.style.display = 'none'
          }}
        />
      </div>
      <div style={{ padding: '14px 16px', flex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '2px',
          color: step.ai ? 'var(--coral)' : 'var(--muted)',
          marginBottom: '6px',
        }}>
          {step.num} {step.ai ? '· AI STEP' : ''}
        </div>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          fontWeight: 700,
          color: step.ai ? 'var(--coral)' : 'var(--cream)',
          marginBottom: '6px',
          lineHeight: 1.3,
        }}>
          {step.title}
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          color: 'var(--muted)',
          lineHeight: 1.6,
        }}>
          {step.desc}
        </div>
      </div>
    </div>
  )
}

export default function ScreenL1B() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px 56px',
      gap: '24px',
    }}>
      <div className="label-mono">How it works</div>

      <div style={{ display: 'flex', alignItems: 'stretch', gap: '0' }}>
        {STEPS.map((step, i) => (
          <div key={step.num} style={{ display: 'flex', alignItems: 'center', flex: '1 1 0', minWidth: 0 }}>
            <StepCard step={step} />
            {i < STEPS.length - 1 && (
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--coral)',
                padding: '0 10px',
                flexShrink: 0,
                alignSelf: 'center',
                marginTop: '-20px',
              }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '16px',
        color: 'var(--muted)',
        lineHeight: 1.75,
        maxWidth: '780px',
        borderLeft: '3px solid var(--dim)',
        paddingLeft: '16px',
      }}>
        A store sends a photo of a product or promotion. The custom GPT analyzes the context —
        product, offer, store objective — and generates multiple post variants.
        Visual assets are created with Gemini or Midjourney, adapted to audience profiles.
      </p>
    </div>
  )
}
