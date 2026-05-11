import { asset } from '../utils/asset'

export default function ScreenA3D() {
  return (
    <div className="screen screen--black" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '0',
    }}>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '56px',
        fontWeight: 400,
        color: 'var(--cream)',
        textAlign: 'center',
        lineHeight: 1.2,
        opacity: 0,
        animation: 'fadeUp 0.7s ease 0.3s forwards',
      }}>
        I didn't learn AI.
      </p>

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '64px',
        fontWeight: 900,
        fontStyle: 'italic',
        color: 'var(--coral)',
        textAlign: 'center',
        lineHeight: 1.2,
        marginTop: '8px',
        opacity: 0,
        animation: 'fadeUp 0.7s ease 1.6s forwards',
      }}>
        I learned how to think with AI.
      </p>

      {/* Author card */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginTop: '52px',
        opacity: 0,
        animation: 'fadeIn 0.6s ease 2.6s forwards',
      }}>
        {/* Headshot — 88px, face-centred */}
        <div style={{
          width: 88,
          height: 88,
          borderRadius: '50%',
          border: '2px solid var(--teal)',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          <img
            src={asset('photos/headshot.png')}
            alt="Juanita Terrapon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              display: 'block',
            }}
            onError={(e) => {
              e.target.parentNode.style.background = 'var(--dim)'
              e.target.parentNode.style.display = 'flex'
              e.target.parentNode.style.alignItems = 'center'
              e.target.parentNode.style.justifyContent = 'center'
              e.target.style.display = 'none'
            }}
          />
        </div>

        {/* Name + org */}
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 1.2,
          }}>
            Juanita Terrapon
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--coral)',
            marginTop: '6px',
          }}>
            JUVAII
          </div>
        </div>
      </div>

      {/* LinkedIn QR */}
      <div style={{
        marginTop: '40px',
        opacity: 0,
        animation: 'fadeIn 0.6s ease 3s forwards',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}>
        <img
          src={asset('photos/photoslinkedinqr.jpeg')}
          alt="LinkedIn QR code"
          style={{
            width: 180,
            height: 180,
            objectFit: 'contain',
            display: 'block',
          }}
        />
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--coral)',
        }}>
          Connect on LinkedIn
        </div>
      </div>
    </div>
  )
}
