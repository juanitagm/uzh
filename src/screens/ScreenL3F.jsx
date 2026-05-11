import { asset } from '../utils/asset'

export default function ScreenL3F() {
  return (
    <div className="screen screen--black" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 80px',
      gap: '24px',
    }}>
      <div className="label-mono">Live Walkthrough</div>

      <video
        src={asset('ich/ichdemovideo.mp4')}
        controls
        style={{
          width: '100%',
          maxWidth: '720px',
          borderRadius: '10px',
          border: '2px solid var(--teal)',
          background: '#000',
          display: 'block',
        }}
      />

    </div>
  )
}
