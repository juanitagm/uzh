export default function Screen2Provocation() {
  return (
    <div className="screen screen--black" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      padding: '80px',
    }}>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '64px',
        fontWeight: 400,
        color: 'var(--cream)',
        textAlign: 'center',
        lineHeight: 1.2,
        maxWidth: '900px',
        opacity: 0,
        animation: 'fadeUp 0.7s ease 0.3s forwards',
      }}>
        In November 2023, I had 15 years of experience.
      </p>

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '72px',
        fontWeight: 900,
        fontStyle: 'italic',
        color: 'var(--coral)',
        textAlign: 'center',
        lineHeight: 1.2,
        maxWidth: '900px',
        opacity: 0,
        animation: 'fadeUp 0.7s ease 1.8s forwards',
      }}>
        And nobody wanted to hire me.
      </p>
    </div>
  )
}
