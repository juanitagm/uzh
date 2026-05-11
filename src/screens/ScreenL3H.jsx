import EscalationMap from '../components/EscalationMap'

export default function ScreenL3H() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '48px',
    }}>
      <EscalationMap activeLevel={4} completedLevels={[1, 2, 3]} />

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '24px',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--cream)',
        textAlign: 'center',
        maxWidth: '680px',
        lineHeight: 1.7,
      }}>
        AI doesn't replace expertise. It lets you architect solutions in domains you don't own.{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>
          That's not automation. That's consulting.
        </em>
      </p>
    </div>
  )
}
