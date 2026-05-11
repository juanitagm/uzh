import GrayLogo from '../components/GrayLogo'
import { asset } from '../utils/asset'

export default function ScreenL4A() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '36px 80px',
      gap: '28px',
    }}>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '64px' }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--coral)',
            marginBottom: '14px',
          }}>
            Level 04
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '64px',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 1.05,
            whiteSpace: 'nowrap',
          }}>
            AI as my{' '}
            <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>vision</em>
          </h1>
        </div>

        <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {['ÉCOLE TUNON · GENEVA', '20H · 12 STUDENTS · 6 SESSIONS'].map((line) => (
            <div key={line} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              {line}
            </div>
          ))}
          <div style={{ marginTop: '8px' }}>
            <GrayLogo src="logos/logo_Tunon-Logo-Eduservices.png" alt="Tunon" height={36} />
          </div>
        </div>
      </div>

      {/* Main row — [before/after + body text] left, photo right */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: '36px' }}>

        {/* Left: before→after + body text stacked */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Before → After card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            background: 'var(--dim)',
            borderRadius: '10px',
            padding: '22px 28px',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '8px',
              }}>
                Before
              </div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontStyle: 'italic',
                color: 'var(--muted)',
                lineHeight: 1.4,
              }}>
                "What should we post?"
              </p>
            </div>

            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '40px',
              color: 'var(--coral)',
              flexShrink: 0,
              lineHeight: 1,
            }}>
              →
            </div>

            <div style={{ flex: 2 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                marginBottom: '8px',
              }}>
                After
              </div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                color: 'var(--cream)',
                lineHeight: 1.5,
              }}>
                "What are we trying to achieve, for whom, and how do we structure it?"
              </p>
            </div>
          </div>

          {/* Body text */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '18px',
            color: 'var(--muted)',
            lineHeight: 1.7,
          }}>
            AI allowed throughout. The test was defending decisions under questioning.
            Same principle as ICH — the AI generates, but{' '}
            <strong style={{ color: 'var(--cream)' }}>YOU</strong> must justify.
          </p>
        </div>

        {/* Right: portrait photo — 240×360, face centred */}
        <div style={{
          flexShrink: 0,
          width: 240,
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid rgba(90,122,138,0.3)',
          alignSelf: 'stretch',
          minHeight: 360,
        }}>
          <img
            src={asset('photos/tunon_training.jpg')}
            alt="Tunon training"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              display: 'block',
            }}
            onError={(e) => {
              e.target.parentNode.style.background = 'var(--dim)'
              e.target.parentNode.style.display = 'flex'
              e.target.parentNode.style.alignItems = 'center'
              e.target.parentNode.style.justifyContent = 'center'
              e.target.parentNode.innerHTML = '<span style="font-family:var(--font-mono);font-size:11px;color:var(--muted);letter-spacing:2px;text-transform:uppercase">tunon_training.jpg</span>'
            }}
          />
        </div>

      </div>
    </div>
  )
}
