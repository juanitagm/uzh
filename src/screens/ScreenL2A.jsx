import { asset } from '../utils/asset'

export default function ScreenL2A() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '40px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px' }}>
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
            Level 02
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
            <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>voice</em>
          </h1>
        </div>

        <div style={{
          paddingTop: '8px',
          borderLeft: '3px solid var(--dim)',
          paddingLeft: '40px',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--cream)',
            lineHeight: 1.4,
          }}>
            My former employer hired me back.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontStyle: 'italic',
            fontWeight: 700,
            color: 'var(--coral)',
            lineHeight: 1.4,
            marginTop: '4px',
          }}>
            As the expert.
          </p>
        </div>
      </div>

      <div style={{ borderRadius: '10px', maxWidth: '620px', overflow: 'hidden', height: 200 }}>
        <img
          src={asset('photos/training_public.jpg')}
          alt="Training session"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => {
            e.target.parentNode.style.background = 'var(--dim)'
            e.target.parentNode.style.display = 'flex'
            e.target.parentNode.style.alignItems = 'center'
            e.target.parentNode.style.justifyContent = 'center'
            e.target.style.display = 'none'
          }}
        />
      </div>
    </div>
  )
}
