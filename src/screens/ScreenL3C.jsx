const CLAUDE_AI_FNS = [
  { icon: '🧠', label: 'Designed how the AI thinks about each document' },
  { icon: '📄', label: 'Read and compared 500+ pages across 6 documents simultaneously' },
  { icon: '✓',  label: 'Checked its own work — like a second pair of eyes, every time' },
  { icon: '📧', label: 'Generated reports ready for senior leadership' },
  { icon: '🔒', label: 'Built a locked instruction system — so the AI never lost the thread across 5 months' },
]

const CLAUDE_CODE_FNS = [
  { icon: '⚙',  label: 'Wrote and ran its own code to process data' },
  { icon: '📊', label: 'Made surgical edits — one cell at a time, never touching what it shouldn\'t' },
  { icon: '📝', label: 'Produced revision-ready documents, like a junior associate would' },
  { icon: '📁', label: 'Managed every version so nothing was ever lost or overwritten' },
  { icon: '🏗', label: 'Built stakeholder reports automatically from raw findings' },
]

const TOOLS = [
  {
    name: 'ICH Review App',
    color: 'var(--coral)',
    desc: 'A custom app so the governance expert could review every AI finding one by one — accept, modify, or reject. No technical skills needed.',
  },
  {
    name: 'Master Mapping Register',
    color: 'var(--yellow)',
    desc: '59 governance topics tracked across all 6 documents, with every decision recorded in a single source of truth.',
  },
  {
    name: 'Schema-Locked Pipeline',
    color: 'var(--green)',
    desc: 'Every finding followed the same structure, every time, for 5 months. No drift. No shortcuts.',
  },
]

function FnRow({ icon, label }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '8px 0',
      borderBottom: '1px solid rgba(90,122,138,0.1)',
    }}>
      <span style={{ fontSize: '16px', width: '22px', flexShrink: 0, marginTop: '1px' }}>{icon}</span>
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '16px',
        color: 'var(--muted)',
        lineHeight: 1.45,
      }}>{label}</span>
    </div>
  )
}

export default function ScreenL3C() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '28px 56px',
      gap: '16px',
    }}>
      <div className="label-mono">The System I Built</div>

      {/* TOP: Claude.ai + Claude Code side by side */}
      <div style={{ display: 'flex', gap: '0', alignItems: 'stretch' }}>

        {/* Claude.ai */}
        <div style={{
          flex: 1,
          border: '2px solid var(--coral)',
          borderRadius: '8px 0 0 8px',
          padding: '28px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          minHeight: '160px',
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 700,
            color: 'var(--coral)',
            marginBottom: '4px',
          }}>
            Claude.ai
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(232,86,42,0.6)',
            marginBottom: '6px',
          }}>
            Strategic reasoning
          </div>
          <div>
            {CLAUDE_AI_FNS.map((f) => <FnRow key={f.label} {...f} />)}
          </div>
        </div>

        {/* Center: control flow */}
        <div style={{
          flexShrink: 0,
          width: '140px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '12px 8px',
          background: 'var(--dim)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--red)',
            textAlign: 'center',
            lineHeight: 1.4,
          }}>
            NEVER<br />OVERLAP
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '22px',
            color: 'var(--muted)',
          }}>
            ⇄
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: 'rgba(61,204,110,0.1)',
            border: '1px solid rgba(61,204,110,0.35)',
            borderRadius: '20px',
            padding: '5px 10px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--green)',
            }}>
              Human Gate
            </span>
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '1px',
            color: 'var(--muted)',
            textAlign: 'center',
            lineHeight: 1.5,
            opacity: 0.75,
          }}>
            Type CONFIRM<br />before any write
          </div>
        </div>

        {/* Claude Code */}
        <div style={{
          flex: 1,
          border: '1px solid var(--dim)',
          borderLeft: 'none',
          borderRadius: '0 8px 8px 0',
          padding: '28px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          minHeight: '160px',
        }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 700,
            color: 'var(--cream)',
            marginBottom: '4px',
          }}>
            Claude Code
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '6px',
          }}>
            Execution &amp; precision
          </div>
          <div>
            {CLAUDE_CODE_FNS.map((f) => <FnRow key={f.label} {...f} />)}
          </div>
        </div>
      </div>

      {/* BOTTOM: 3 custom tool cards */}
      <div style={{ display: 'flex', gap: '12px' }}>
        {TOOLS.map((tool) => (
          <div key={tool.name} style={{
            flex: 1,
            borderTop: `3px solid ${tool.color}`,
            background: 'var(--dim)',
            borderRadius: '0 0 6px 6px',
            padding: '20px 24px',
          }}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--cream)',
              marginBottom: '8px',
            }}>
              {tool.name}
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--muted)',
              lineHeight: 1.6,
            }}>
              {tool.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
