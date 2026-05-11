const IMPACTS = [
  {
    emoji: '🤖',
    text: 'Marketing team built their own GPT Assistants — right after the training',
  },
  {
    emoji: '🎨',
    text: 'Adopted AI image generation using techniques from the program',
  },
  {
    emoji: '👤',
    text: 'Head of Marketing reorganized the team and appointed an AI lead — immediately',
  },
]

export default function ScreenL2C() {
  return (
    <div className="screen screen--dark-teal" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '28px',
    }}>
      <div className="label-mono">Immediate Impact — dacadoo</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '860px' }}>
        {IMPACTS.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              background: 'rgba(42, 74, 86, 0.5)',
              borderLeft: '4px solid var(--coral)',
              borderRadius: '0 8px 8px 0',
              padding: '22px 28px',
              animation: `fadeUp 0.5s ease ${i * 0.15}s both`,
            }}
          >
            <span style={{ fontSize: '32px', flexShrink: 0 }}>{item.emoji}</span>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '20px',
              fontWeight: 400,
              color: 'var(--cream)',
              lineHeight: 1.55,
            }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '8px', maxWidth: '860px' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '26px',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--cream)',
          lineHeight: 1.4,
        }}>
          They didn't need me anymore.{' '}
          <strong style={{ color: 'var(--coral)', fontStyle: 'normal' }}>
            That's how you know it worked.
          </strong>
        </p>
      </div>
    </div>
  )
}
