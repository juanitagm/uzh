import { useState } from 'react'
import { asset } from '../utils/asset'

const NODES = [
  {
    img: 'photos/timelinethumbnail1.jpeg',
    location: 'Buenos Aires',
    title: 'Graphic Designer',
    year: '2006',
    detail: 'Trained in graphic design and visual communication in Argentina. Built the foundation in typography, brand identity, and visual storytelling that still shapes every project, including this presentation.',
  },
  {
    img: 'photos/timelinethumbnail2.jpg',
    location: 'Switzerland',
    title: 'Digital Marketing',
    sub: '8 years · 10 markets',
    year: '2015',
    detail: 'Joined a multinational in Switzerland. Managed digital campaigns across 10 European markets. Built deep expertise in audience strategy, content systems, and brand communication at scale.',
  },
  {
    img: 'photos/timelinethumbnail3.png',
    location: 'The Shift',
    title: 'Applications · Silence',
    year: '2023',
    detail: '15 years of experience. Months of applications, rejections, silence. The market was changing faster than CVs could adapt. Something had to shift, fundamentally.',
  },
  {
    img: 'photos/timelinethumbnail4.png',
    location: 'JUVAII',
    title: 'No investors · No team · No clients',
    sub: 'Dec 2023',
    year: 'Dec 2023',
    highlight: true,
    detail: 'Founded JUVAII with one hypothesis: strategic communication skills + AI fluency = a consulting offering the market didn\'t yet have. No VC, no team, no pre-existing clients. Built entirely from first principles.',
  },
  {
    img: 'photos/timelinethumbnail5.png',
    location: 'Today',
    title: '100+ trained · ICH · UZH · 3 countries',
    year: '2026',
    detail: 'Active across 3 countries. AI training programs delivered to 100+ professionals in marketing, sales, and operations. Consulting engagements with international organisations. Teaching at UZH today.',
  },
]

const NODE_SIZE = 76

function TimelineNode({ node, index, total, isActive, onClick }) {
  const isHighlight = node.highlight
  const isFirst = index === 0
  const isLast  = index === total - 1
  const mid = NODE_SIZE / 2

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={onClick}
    >
      {!isFirst && (
        <div style={{
          position: 'absolute',
          top: mid,
          left: 0,
          width: '50%',
          height: 2,
          background: (index === 3) ? 'var(--coral)' : 'var(--dim)',
          zIndex: 0,
        }} />
      )}
      {!isLast && (
        <div style={{
          position: 'absolute',
          top: mid,
          right: 0,
          width: '50%',
          height: 2,
          background: (index === 2) ? 'var(--coral)' : 'var(--dim)',
          zIndex: 0,
        }} />
      )}

      {/* Circle */}
      <div style={{
        width: NODE_SIZE,
        height: NODE_SIZE,
        borderRadius: '50%',
        background: isHighlight ? 'var(--coral)' : isActive ? 'var(--teal)' : 'var(--dim)',
        border: isActive ? '3px solid var(--coral)' : isHighlight ? '3px solid var(--coral-glow)' : '2px solid var(--teal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        position: 'relative',
        transition: 'all 0.2s ease',
        boxShadow: isActive ? '0 0 0 5px rgba(232,86,42,0.25)' : 'none',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <img
          src={asset(node.img)}
          alt={node.location}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div style={{
          display: 'none',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--muted)',
          position: 'absolute',
          inset: 0,
        }}>
          {node.year.slice(0, 2)}
        </div>
      </div>

      {/* Label below circle */}
      <div style={{ textAlign: 'center', marginTop: '12px', padding: '0 4px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: isHighlight ? 'var(--coral)' : 'var(--muted)',
          marginBottom: '4px',
        }}>
          {node.year}
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontWeight: 600,
          color: isHighlight ? 'var(--cream)' : isActive ? 'var(--cream)' : 'var(--muted)',
          lineHeight: 1.3,
        }}>
          {node.location}
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          color: 'var(--muted)',
          lineHeight: 1.4,
          marginTop: '2px',
          opacity: 0.8,
        }}>
          {node.title}
        </div>
        {node.sub && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '1px',
            color: isHighlight ? 'rgba(232,86,42,0.7)' : 'var(--muted)',
            marginTop: '3px',
            opacity: 0.7,
          }}>
            {node.sub}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Screen3Origin() {
  const [activeNode, setActiveNode] = useState(null)

  const handleNodeClick = (i) => {
    setActiveNode(activeNode === i ? null : i)
  }

  const selected = activeNode !== null ? NODES[activeNode] : null

  return (
    <div className="screen screen--dark" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 56px',
      gap: 0,
    }}>
      <div className="label-mono" style={{ marginBottom: '8px' }}>The Origin</div>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '40px',
        fontWeight: 400,
        color: 'var(--cream)',
        marginBottom: '32px',
      }}>
        Not a straight line.{' '}
        <em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>A pivot.</em>
      </h2>

      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
        {NODES.map((node, i) => (
          <TimelineNode
            key={i}
            node={node}
            index={i}
            total={NODES.length}
            isActive={activeNode === i}
            onClick={() => handleNodeClick(i)}
          />
        ))}
      </div>

      {/* Detail panel — includes thumbnail at 200px */}
      <div style={{
        marginTop: '24px',
        minHeight: '100px',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        opacity: selected ? 1 : 0,
        transform: selected ? 'translateY(0)' : 'translateY(6px)',
        pointerEvents: selected ? 'auto' : 'none',
      }}>
        {selected && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '24px',
            background: 'var(--dim)',
            borderLeft: '4px solid var(--coral)',
            borderRadius: '0 6px 6px 0',
            padding: '18px 24px',
            maxWidth: '860px',
          }}>
            {/* Expanded image */}
            <div style={{
              flexShrink: 0,
              width: 180,
              height: 120,
              borderRadius: '6px',
              overflow: 'hidden',
              background: '#000',
            }}>
              <img
                src={asset(selected.img)}
                alt={selected.location}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                marginBottom: '8px',
              }}>
                {selected.location} · {selected.year}
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '17px',
                color: 'var(--cream)',
                lineHeight: 1.6,
                fontWeight: 400,
              }}>
                {selected.detail}
              </p>
            </div>
          </div>
        )}
      </div>

      <div style={{
        marginTop: selected ? '0' : '8px',
        opacity: selected ? 0 : 0.4,
        transition: 'opacity 0.2s ease',
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          ↑ Click a node to expand
        </span>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '24px',
          fontStyle: 'italic',
          color: 'var(--cream)',
          fontWeight: 400,
        }}>
          I stopped asking for permission.{' '}
          <strong style={{ color: 'var(--coral)', fontStyle: 'normal' }}>
            I started building.
          </strong>
        </p>
      </div>
    </div>
  )
}
