const PHASES = [
  {
    num: 1,
    name: 'Onboarding',
    duration: 'Week 1',
    ai: 'Process design, schema development',
    human: 'Scope, timeline, intake',
  },
  {
    num: 2,
    name: 'Terminology Mapping',
    duration: 'Weeks 2–4',
    ai: '59 clusters, cross-doc analysis, evidence',
    human: 'Validation of each finding',
  },
  {
    num: 3,
    name: 'Consistency Review',
    duration: 'Weeks 4–8',
    ai: 'Conflict detection, authority checks',
    human: 'Governance decisions',
  },
  {
    num: 4,
    name: 'IRE Recommendations',
    duration: 'Weeks 8–14',
    ai: 'Insert / Remove / Edit table with proposed text',
    human: 'Accept, modify, or reject each',
  },
  {
    num: 5,
    name: 'Martyr Drafts',
    duration: 'Weeks 14–20',
    ai: 'Tracked-change Word documents',
    human: 'Final review before committee',
  },
]

export default function ScreenL3D() {
  return (
    <div className="screen screen--dark-teal" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px 64px',
      gap: '20px',
    }}>
      <div>
        <div className="label-mono" style={{ marginBottom: '10px' }}>5-Phase Methodology</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '36px',
          fontWeight: 400,
          color: 'var(--cream)',
        }}>
          AI does the analysis.{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>Humans make the decisions.</em>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '44px 200px 1fr 1fr',
        gap: '16px',
        alignItems: 'center',
        paddingBottom: '6px',
        borderBottom: '1px solid rgba(90,122,138,0.2)',
      }}>
        <div />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)' }}>Phase</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--coral)' }}>AI Role</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--green)' }}>Human Role</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {PHASES.map((phase) => (
          <div key={phase.num} style={{
            display: 'grid',
            gridTemplateColumns: '44px 200px 1fr 1fr',
            gap: '16px',
            alignItems: 'center',
            background: 'rgba(42,74,86,0.4)',
            borderRadius: '6px',
            padding: '12px 16px',
          }}>
            <div style={{
              width: 34,
              height: 34,
              background: 'var(--coral)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '15px',
              fontWeight: 700,
              color: '#fff',
              flexShrink: 0,
            }}>
              {phase.num}
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--cream)',
              }}>
                {phase.name}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '1px',
                color: 'var(--muted)',
                marginTop: '2px',
              }}>
                {phase.duration}
              </div>
            </div>

            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--muted)',
              lineHeight: 1.5,
            }}>
              {phase.ai}
            </div>

            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--green)',
              lineHeight: 1.5,
              opacity: 0.85,
            }}>
              {phase.human}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
