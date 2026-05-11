import EscalationMap from '../components/EscalationMap'

export default function Screen4Escalation() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
    }}>
      <div className="label-mono" style={{ marginBottom: '12px' }}>
        The Escalation
      </div>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '20px',
        fontWeight: 400,
        color: 'var(--muted)',
        fontStyle: 'italic',
        marginBottom: '48px',
        maxWidth: '560px',
        lineHeight: 1.6,
      }}>
        Four real projects. Each one a different level of working with AI.
        <br />We start at the bottom. We end here.
      </h2>

      <EscalationMap activeLevel={1} completedLevels={[]} />
    </div>
  )
}
