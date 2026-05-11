import { asset } from '../utils/asset'

export default function ScreenL2B() {
  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 40px',
      gap: '20px',
    }}>
      <div className="label-mono" style={{ paddingLeft: '4px' }}>Two Projects</div>

      {/* 50/50 cards — photo left, text right */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch' }}>

        {/* ── Webloyalty ── */}
        <div style={{
          flex: 1,
          border: '1px solid var(--dim)',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
        }}>
          {/* Photo — left half, full card height */}
          <div style={{ width: 280, flexShrink: 0, overflow: 'hidden' }}>
            <img
              src={asset('photos/training_webloyalty.jpg')}
              alt="Webloyalty training"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
              onError={(e) => {
                e.target.parentNode.style.background = 'var(--dim)'
                e.target.style.display = 'none'
              }}
            />
          </div>

          {/* Text — right half */}
          <div style={{ flex: 1, padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--cream)',
            }}>
              Webloyalty
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              London · Jan 2026
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              color: 'var(--muted)',
              lineHeight: 1.75,
              marginTop: '4px',
            }}>
              6h workshop · Marketing team
              <br />
              Awareness → Alignment → Intent
            </div>
          </div>
        </div>

        {/* ── dacadoo ── */}
        <div style={{
          flex: 1,
          border: '2px solid var(--coral)',
          borderRadius: '10px',
          overflow: 'hidden',
          background: 'rgba(232, 86, 42, 0.06)',
          display: 'flex',
          flexDirection: 'row',
        }}>
          {/* Photo — left half, full card height, portrait so show face */}
          <div style={{ width: 280, flexShrink: 0, overflow: 'hidden' }}>
            <img
              src={asset('photos/training_dacadoo.jpg')}
              alt="dacadoo training"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
              }}
              onError={(e) => {
                e.target.parentNode.style.background = 'rgba(232,86,42,0.12)'
                e.target.style.display = 'none'
              }}
            />
          </div>

          {/* Text — right half */}
          <div style={{ flex: 1, padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--coral)',
            }}>
              dacadoo
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              Zürich · 2025–2026
            </div>
            <div style={{ marginTop: '4px' }}>
              {[
                '5 lunch sessions (company-wide)',
                '8h deep training per team — Marketing & Sales',
                'C-level to operational',
                'Digital-native and non-digital profiles',
                'Legal pre-approved',
              ].map((item) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '8px',
                }}>
                  <span style={{ color: 'var(--coral)', flexShrink: 0, fontSize: '15px', marginTop: '1px' }}>→</span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '16px',
                    color: 'var(--muted)',
                    lineHeight: 1.55,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
