import { useState } from 'react'
import { asset } from '../utils/asset'

/**
 * Logo image that renders grayscale at 70% opacity by default,
 * transitions to full colour on hover.
 * Pass src as a path relative to /assets/ (e.g. "logos/Logo_juvaii.png").
 * bg=true adds a white-pill background (needed for dark-coloured logos on dark screens).
 */
export default function GrayLogo({ src, alt = '', height = 40, bg = false, style = {} }) {
  const resolvedSrc = src.startsWith('http') ? src : asset(src)
  const [hovered, setHovered] = useState(false)
  const img = (
    <img
      src={resolvedSrc}
      alt={alt}
      style={{
        height,
        width: 'auto',
        display: 'block',
        filter: hovered ? 'none' : 'grayscale(1)',
        opacity: hovered ? 1 : 0.7,
        transition: 'filter 0.2s ease, opacity 0.2s ease',
        ...(!bg ? style : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  )

  if (!bg) return img

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.9)',
        borderRadius: '4px',
        padding: '4px 8px',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {img}
    </div>
  )
}
