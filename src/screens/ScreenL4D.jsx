import EscalationMap from '../components/EscalationMap'

export default function ScreenL4D() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '40px',
    }}>
      <EscalationMap activeLevel={0} completedLevels={[1, 2, 3, 4]} />

      <div style={{ textAlign: 'center', maxWidth: '720px' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '24px',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--cream)',
          lineHeight: 1.6,
        }}>
          The highest level isn't using AI. It's knowing when NOT to use it —
        </p>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '48px',
          fontWeight: 900,
          fontStyle: 'italic',
          color: 'var(--coral)',
          lineHeight: 1.15,
          marginTop: '12px',
        }}>
          and when to let it build the whole stage.
        </p>
      </div>
    </div>
  )
}
