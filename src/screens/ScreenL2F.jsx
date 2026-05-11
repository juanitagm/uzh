import EscalationMap from '../components/EscalationMap'

export default function ScreenL2F() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '48px',
    }}>
      <EscalationMap activeLevel={3} completedLevels={[1, 2]} />

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '24px',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--cream)',
        textAlign: 'center',
        maxWidth: '720px',
        lineHeight: 1.7,
      }}>
        The real value isn't using AI. It's enabling others to use it within a system
        that's governed, repeatable, and safe.{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>
          Now let me show you what happens when you push further.
        </em>
      </p>
    </div>
  )
}
