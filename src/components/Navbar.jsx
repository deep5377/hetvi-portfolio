import { useState } from 'react'
import ResumeModal from './ResumeModal'

function Navbar() {
  var [showResume, setShowResume] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(250, 248, 245, 0.9)',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 700,
          fontSize: 22,
          color: '#E67E22',
          letterSpacing: '-0.5px',
        }}>
          hetvi<span style={{ color: '#1a1a1a' }}>.</span>
        </div>

        <div style={{
          display: 'flex',
          gap: 4,
          background: '#fff',
          borderRadius: 100,
          padding: 4,
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}>
          <a href="#about" style={pillStyle}>About Me</a>
          <a href="#work" style={pillStyle}>See My Work</a>
        </div>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="mailto:hetvikkhatri@gmail.com" style={linkStyle}>Contact me ↗</a>
          <button
            onClick={function() { setShowResume(true) }}
            style={{
              ...linkStyle,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Resume ↗
          </button>
        </div>
      </nav>

      <ResumeModal isOpen={showResume} onClose={function() { setShowResume(false) }} />
    </>
  )
}

var pillStyle = {
  padding: '8px 20px',
  borderRadius: 100,
  fontSize: 14,
  fontWeight: 500,
  color: '#555',
  textDecoration: 'none',
  fontFamily: "'DM Sans', sans-serif",
}

var linkStyle = {
  fontSize: 14,
  color: '#555',
  textDecoration: 'none',
  fontWeight: 500,
  fontFamily: "'DM Sans', sans-serif",
}

export default Navbar