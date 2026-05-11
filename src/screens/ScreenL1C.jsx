import { asset } from '../utils/asset'

const REJECTED = [
  asset('ibudi/burguer_rejected.png'),
  asset('ibudi/french, day_rejected.png'),
  asset('ibudi/Grandparents_rejected.png'),
]

const ACCEPTED = [
  asset('ibudi/game_accepted_2.png'),
  asset('ibudi/nutella_accepted.png'),
  asset('ibudi/poneydrive_aprilsfool_acceptedimage.png'),
]

function PostCard({ file, variant }) {
  return (
    <div style={{
      flex: '1 1 0',
      minWidth: 0,
      borderRadius: '6px',
      overflow: 'hidden',
      background: '#0a0d10',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img
        src={file}
        alt={variant}
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
        onError={(e) => {
          e.target.parentNode.style.background = 'var(--dim)'
          e.target.style.display = 'none'
        }}
      />
    </div>
  )
}

export default function ScreenL1C() {
  return (
    <div className="screen screen--dark-teal" style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '28px 56px',
      gap: '10px',
    }}>
      {/* Header */}
      <div className="label-mono">Audience Validation</div>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '40px',
        fontWeight: 700,
        color: 'var(--cream)',
        lineHeight: 1.1,
      }}>
        Rejected vs.{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>Accepted</em>
      </h2>

      {/* Two-row image grid — fills all remaining vertical space */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* Row 1 — Rejected */}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--red)',
          }}>
            ✗ Low Engagement
          </div>
          <div style={{ display: 'flex', gap: '8px', flex: 1, minHeight: 0 }}>
            {REJECTED.map((file) => (
              <PostCard key={file} file={file} variant="rejected" />
            ))}
          </div>
        </div>

        {/* Row 2 — Accepted */}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--coral-glow)',
          }}>
            ✓ High Engagement
          </div>
          <div style={{ display: 'flex', gap: '8px', flex: 1, minHeight: 0 }}>
            {ACCEPTED.map((file) => (
              <PostCard key={file} file={file} variant="accepted" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '20px',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--cream)',
        textAlign: 'center',
        paddingTop: '10px',
        borderTop: '1px solid rgba(90,122,138,0.2)',
        flexShrink: 0,
      }}>
        AI generates. Humans validate.{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic', fontWeight: 700 }}>
          Can you tell why?
        </em>
      </p>
    </div>
  )
}
