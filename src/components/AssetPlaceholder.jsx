// Placeholder for images/assets not yet provided.
// Drop the real file in public/assets/... and swap src={} onto an <img> to replace.
export default function AssetPlaceholder({ filename, width = '100%', height = 160, label, style = {} }) {
  return (
    <div style={{
      width,
      height,
      background: 'var(--dim)',
      border: '1px solid rgba(90,122,138,0.15)',
      borderRadius: '6px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      flexShrink: 0,
      ...style,
    }}>
      {label && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          opacity: 0.5,
        }}>
          {label}
        </div>
      )}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--muted)',
        opacity: 0.6,
        textAlign: 'center',
        padding: '0 12px',
      }}>
        {filename}
      </div>
    </div>
  )
}
