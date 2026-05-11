import { asset } from '../utils/asset'

export default function ScreenL2E() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '32px',
    }}>
      <div className="label-mono">Live Poll</div>

      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '40px',
        fontWeight: 400,
        color: 'var(--cream)',
        lineHeight: 1.25,
        maxWidth: '720px',
        textAlign: 'center',
      }}>
        What is the biggest barrier to AI adoption in companies?
      </h2>

      {/* QR code */}
      <img
        src={asset('photos/photosmentimeterqr2.png')}
        alt="Mentimeter QR code"
        style={{
          width: 280,
          height: 280,
          objectFit: 'contain',
          display: 'block',
          background: 'white',
          padding: '8px',
          borderRadius: '12px',
          flexShrink: 0,
        }}
        onError={(e) => {
          e.target.style.cssText = 'width:280px;height:280px;display:flex;align-items:center;justify-content:center;background:var(--dim);border-radius:12px'
        }}
      />

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '18px',
        color: 'var(--muted)',
        textAlign: 'center',
      }}>
        Scan and vote — I'll show results live
      </p>
    </div>
  )
}
