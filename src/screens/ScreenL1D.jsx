import EscalationMap from '../components/EscalationMap'

export default function ScreenL1D() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '48px',
    }}>
      <EscalationMap activeLevel={2} completedLevels={[1]} />

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '24px',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--cream)',
        textAlign: 'center',
        maxWidth: '680px',
        lineHeight: 1.65,
      }}>
        This is what most people think AI is. Content generation. Fast, useful,
        scalable.{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>
          But it's the floor, not the ceiling.
        </em>
      </p>
    </div>
  )
}
