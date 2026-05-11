import { useState, useEffect, useCallback, useRef } from 'react'
import Screen0Arrival      from './screens/Screen0Arrival'
import Screen1Poll         from './screens/Screen1Poll'
import Screen2Provocation  from './screens/Screen2Provocation'
import Screen3Origin       from './screens/Screen3Origin'
import Screen4Escalation   from './screens/Screen4Escalation'
import ScreenL1A           from './screens/ScreenL1A'
import ScreenL1B           from './screens/ScreenL1B'
import ScreenL1C           from './screens/ScreenL1C'
import ScreenL1D           from './screens/ScreenL1D'
import ScreenL2A           from './screens/ScreenL2A'
import ScreenL2B           from './screens/ScreenL2B'
import ScreenL2C           from './screens/ScreenL2C'
import ScreenL2D           from './screens/ScreenL2D'
import ScreenL2E           from './screens/ScreenL2E'
import ScreenL2F           from './screens/ScreenL2F'
import ScreenL3A           from './screens/ScreenL3A'
import ScreenL3B           from './screens/ScreenL3B'
import ScreenL3C           from './screens/ScreenL3C'
import ScreenL3D           from './screens/ScreenL3D'
import ScreenL3E           from './screens/ScreenL3E'
import ScreenL3F           from './screens/ScreenL3F'
import ScreenL3G           from './screens/ScreenL3G'
import ScreenL3H           from './screens/ScreenL3H'
import ScreenL4A           from './screens/ScreenL4A'
import ScreenL4B           from './screens/ScreenL4B'
import ScreenL4C           from './screens/ScreenL4C'
import ScreenL4D           from './screens/ScreenL4D'
import ScreenA3C           from './screens/ScreenA3C'
import ScreenA3C2          from './screens/ScreenA3C2'
import ScreenA3D           from './screens/ScreenA3D'

const SCREENS = [
  Screen0Arrival,     // 0 — Arrival / holding
  Screen1Poll,        // 1 — Opening poll
  Screen2Provocation, // 2 — The provocation
  Screen3Origin,      // 3 — The origin (timeline)
  Screen4Escalation,  // 4 — The escalation (intro)
  ScreenL1A,          // 5 — L1: Context (IBUDI)
  ScreenL1B,          // 6 — L1: Workflow
  ScreenL1C,          // 7 — L1: Rejected vs Accepted
  ScreenL1D,          // 8  — L1: Closing / escalation L2 unlocks
  ScreenL2A,          // 9  — L2: Narrative beat (voice)
  ScreenL2B,          // 10 — L2: Two projects (Webloyalty + dacadoo)
  ScreenL2C,          // 11 — L2: Dacadoo impact
  ScreenL2D,          // 12 — L2: Method (Structure → Validate)
  ScreenL2E,          // 13 — L2: Poll #2 placeholder
  ScreenL2F,          // 14 — L2: Closing / escalation L3 unlocks
  ScreenL3A,          // 15 — L3: The client (ICH)
  ScreenL3B,          // 16 — L3: The problem (doc hierarchy + issues)
  ScreenL3C,          // 17 — L3: Architecture (dual-Claude system)
  ScreenL3D,          // 18 — L3: Methodology (5 phases)
  ScreenL3E,          // 19 — L3: Governance safeguards
  ScreenL3F,          // 20 — L3: Demo
  ScreenL3G,          // 21 — L3: The numbers
  ScreenL3H,          // 22 — L3: Closing / escalation L4 unlocks
  ScreenL4A,          // 23 — L4: The contrast (Tunon)
  ScreenL4B,          // 24 — L4: Before/After detail (all 4 projects)
  ScreenL4C,          // 25 — L4: The meta-reveal
  ScreenL4D,          // 26 — L4: Closing / all levels complete
  ScreenA3C,          // 27 — A3: The bridge (career implications)
  ScreenA3C2,         // 28 — A3: The hidden opportunity (dot grid)
  ScreenA3D,          // 29 — A3: The close (Q&A screen)
]

const SLIDE_LABELS = [
  '00 — Arrival / Holding',
  '01 — Opening Poll',
  '02 — The Provocation',
  '03 — The Origin (Timeline)',
  '04 — The Escalation Intro',
  '05 — L1: IBUDI Context',
  '06 — L1: Workflow',
  '07 — L1: Rejected vs Accepted',
  '08 — L1: Closing',
  '09 — L2: AI as my Voice',
  '10 — L2: Two Projects',
  '11 — L2: dacadoo Impact',
  '12 — L2: The Method',
  '13 — L2: Poll #2',
  '14 — L2: Closing',
  '15 — L3: ICH Context',
  '16 — L3: The Problem',
  '17 — L3: Dual-Claude System',
  '18 — L3: 5-Phase Methodology',
  '19 — L3: Governance Safeguards',
  '20 — L3: Demo',
  '21 — L3: The Numbers',
  '22 — L3: Closing',
  '23 — L4: Tunon',
  '24 — L4: All 4 Projects',
  '25 — L4: The Meta-Reveal',
  '26 — L4: Closing',
  '27 — A3: The Bridge',
  '28 — A3: The Hidden Opportunity',
  '29 — A3: The Close (Q&A)',
]

function PresenterMenu({ currentIndex, onJump, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 60px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--coral)',
          }}>
            Presenter Menu — M to close
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--muted)',
            letterSpacing: '1px',
          }}>
            {currentIndex + 1} / {SCREENS.length}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {SLIDE_LABELS.map((label, i) => {
            const isCurrent = i === currentIndex
            return (
              <button
                key={i}
                onClick={() => onJump(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 18px',
                  background: isCurrent ? 'var(--coral)' : 'var(--dim)',
                  border: isCurrent ? '1px solid var(--coral)' : '1px solid rgba(90,122,138,0.2)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => { if (!isCurrent) e.currentTarget.style.background = 'var(--teal)' }}
                onMouseLeave={(e) => { if (!isCurrent) e.currentTarget.style.background = 'var(--dim)' }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: isCurrent ? '#fff' : 'var(--coral)',
                  minWidth: '24px',
                }}>
                  {String(i).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  color: isCurrent ? '#fff' : 'var(--cream)',
                  lineHeight: 1.3,
                }}>
                  {label.replace(/^\d+ — /, '')}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [index, setIndex]           = useState(0)
  const [opacity, setOpacity]       = useState(1)
  const [menuOpen, setMenuOpen]     = useState(false)
  const transitioning               = useRef(false)

  const navigate = useCallback((dir) => {
    if (transitioning.current) return
    const next = index + dir
    if (next < 0 || next >= SCREENS.length) return

    transitioning.current = true
    setOpacity(0)

    setTimeout(() => {
      setIndex(next)
      setOpacity(1)
      setTimeout(() => { transitioning.current = false }, 300)
    }, 200)
  }, [index])

  const jumpTo = useCallback((i) => {
    setMenuOpen(false)
    if (i === index) return
    transitioning.current = true
    setOpacity(0)
    setTimeout(() => {
      setIndex(i)
      setOpacity(1)
      setTimeout(() => { transitioning.current = false }, 300)
    }, 200)
  }, [index])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault()
        setMenuOpen((v) => !v)
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        setMenuOpen(false)
        return
      }
      if (menuOpen) return
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); navigate(1) }
      if (e.key === 'ArrowLeft')                   { e.preventDefault(); navigate(-1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate, menuOpen])

  const Screen = SCREENS[index]

  return (
    <div className="app">
      <div
        className="screen-fade"
        style={{ opacity, transition: 'opacity 0.2s ease' }}
      >
        <Screen key={index} />
      </div>

      {menuOpen && (
        <PresenterMenu
          currentIndex={index}
          onJump={jumpTo}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </div>
  )
}
