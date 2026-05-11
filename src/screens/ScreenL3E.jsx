const SAFEGUARDS = [
  {
    icon: '🛑',
    title: 'Pre-flight Gate',
    color: 'var(--coral)',
    desc: 'Nothing happens without my approval. Before every single file edit, the AI shows me exactly what it\'s about to do. I type CONFIRM. Only then it executes.',
  },
  {
    icon: '🔍',
    title: 'Independent Audit',
    color: 'var(--yellow)',
    desc: 'The AI that writes the code is never the one that checks it. A separate review layer — like having a QA team that can\'t be influenced by the team that did the work.',
  },
  {
    icon: '🔒',
    title: 'Scope Lock',
    color: 'var(--green)',
    desc: 'The AI only touches what I tell it to touch. If I say "edit row 12, column C" — that\'s all it does. No surprises, no side effects, no "while I was at it" edits.',
  },
  {
    icon: '📋',
    title: 'Dual Versioning',
    color: 'var(--muted)',
    desc: 'Two separate version tracks: working drafts and client-facing output. They never mix. The client never sees messy in-progress work.',
  },
  {
    icon: '📒',
    title: 'Decisions Log',
    color: 'var(--coral)',
    desc: 'Every governance decision — over 65 — recorded with a unique code, the reasoning, and who approved it. Anyone can trace any change back in seconds.',
  },
]

function SafeguardCard({ icon, title, color, desc }) {
  return (
    <div style={{
      background: 'var(--dim)',
      borderLeft: `4px solid ${color}`,
      borderRadius: '0 8px 8px 0',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      minHeight: '120px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '22px' }}>{icon}</span>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--cream)',
        }}>
          {title}
        </div>
      </div>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        color: 'var(--muted)',
        lineHeight: 1.7,
      }}>
        {desc}
      </p>
    </div>
  )
}

export default function ScreenL3E() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '36px 64px',
      gap: '20px',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--green)',
          marginBottom: '12px',
        }}>
          Governance Safeguards
        </div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '40px',
          fontWeight: 400,
          color: 'var(--cream)',
        }}>
          In a regulated environment,{' '}
          <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>trust is architecture.</em>
        </h2>
      </div>

      {/* 2×2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {SAFEGUARDS.slice(0, 4).map((s) => (
          <SafeguardCard key={s.title} {...s} />
        ))}
      </div>

      {/* 5th card — full width */}
      <SafeguardCard {...SAFEGUARDS[4]} />
    </div>
  )
}
