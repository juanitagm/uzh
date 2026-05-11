import AssetPlaceholder from '../components/AssetPlaceholder'

export default function ScreenL4C() {
  return (
    <div className="screen screen--black" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 80px',
      gap: '32px',
    }}>
      <div className="label-mono">The Proof</div>

      {/* Two boxes + arrow */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        width: '100%',
        maxWidth: '860px',
      }}>
        <div style={{
          flex: 1,
          background: 'var(--dim)',
          border: '1px solid var(--teal)',
          borderRadius: '10px',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            What you experienced
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px',
            fontWeight: 700,
            color: 'var(--cream)',
          }}>
            This presentation
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: 'var(--muted)',
            lineHeight: 1.6,
          }}>
            Structure · Narrative · Design · Polls · Transitions
          </div>
        </div>

        <div style={{
          flexShrink: 0,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--coral)',
          }}>
            built with
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '36px',
            color: 'var(--coral)',
            lineHeight: 1,
          }}>
            →
          </div>
        </div>

        <div style={{
          flex: 1,
          background: 'rgba(232,86,42,0.07)',
          border: '1px solid var(--coral)',
          borderRadius: '10px',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--coral)',
          }}>
            Behind the scenes
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px',
            fontWeight: 700,
            color: 'var(--coral)',
          }}>
            Claude + Architecture
          </div>
          <AssetPlaceholder
            filename="meta/behind-the-scenes.png"
            height={56}
            style={{ borderRadius: '4px' }}
          />
        </div>
      </div>

      {/* Supporting context */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '18px',
        color: 'var(--muted)',
        textAlign: 'center',
        maxWidth: '760px',
        lineHeight: 1.6,
        opacity: 0,
        animation: 'fadeUp 0.6s ease 0.3s forwards',
      }}>
        This presentation you've been experiencing? I built it this week. With Claude.
        The structure, the polls, the design, the narrative — all of it.
        Not to impress you. To show you that the tools are accessible to everyone in this room right now.
      </p>

      {/* Dominant punchline */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '52px',
        fontWeight: 900,
        fontStyle: 'italic',
        color: 'var(--coral)',
        textAlign: 'center',
        maxWidth: '860px',
        lineHeight: 1.15,
        opacity: 0,
        animation: 'fadeUp 0.7s ease 1.2s forwards',
      }}>
        What makes the difference is the thinking behind them.
      </p>
    </div>
  )
}
