import GrayLogo from '../components/GrayLogo'
import { asset } from '../utils/asset'

export default function Screen0Arrival() {
  return (
    <div className="screen screen--dark" style={{ padding: '40px 56px' }}>
      <div style={{ position: 'absolute', top: 40, left: 56 }}>
        <GrayLogo src="logos/Logo_juvaii.png" alt="JUVAII" height={36} />
      </div>
      <div style={{ position: 'absolute', top: 40, right: 56 }}>
        <GrayLogo src="logos/Logo_University-of-Zurich.png" alt="University of Zurich" height={36} />
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
      }}>
        {/* Real Mentimeter QR — 300px for across-the-room scanning */}
        <div style={{
          boxShadow: '0 0 60px rgba(232,86,42,0.12)',
        }}>
          <img
            src={asset('photos/photosmentimeterqr1.png')}
            alt="Mentimeter QR code"
            style={{
              width: 300,
              height: 300,
              objectFit: 'contain',
              display: 'block',
              background: 'white',
              padding: '8px',
              borderRadius: '12px',
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              const fb = document.createElement('div')
              fb.style.cssText = 'width:300px;height:300px;display:flex;align-items:center;justify-content:center;background:var(--dim);border-radius:12px'
              fb.innerHTML = '<span style="font-family:var(--font-mono);font-size:12px;color:var(--coral);letter-spacing:2px;text-transform:uppercase">QR · poll.juvaii.com</span>'
              e.target.parentNode.appendChild(fb)
            }}
          />
        </div>

        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '64px',
          fontWeight: 900,
          color: 'var(--cream)',
          marginTop: '32px',
          letterSpacing: '-1px',
        }}>
          Scan to join
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 400,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginTop: '14px',
        }}>
          AI &amp; KOMMUNIKATION — 12.05.2026
        </div>
      </div>
    </div>
  )
}
