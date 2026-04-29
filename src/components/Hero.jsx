import { useState, useEffect } from 'react'

function Hero() {
  var brandColor = '#E67E22'
  var words = ['campaigns', 'stories', 'brands', 'engagement']
  var [wordIdx, setWordIdx] = useState(0)
  var [displayText, setDisplayText] = useState('')
  var [isDeleting, setIsDeleting] = useState(false)

  useEffect(function() {
    var currentWord = words[wordIdx]
    var speed = isDeleting ? 60 : 120
    if (!isDeleting && displayText === currentWord) {
      setTimeout(function() { setIsDeleting(true) }, 1500)
      return
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setWordIdx(function(i) { return (i + 1) % words.length })
      return
    }
    var timer = setTimeout(function() {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
      }
    }, speed)
    return function() { clearTimeout(timer) }
  }, [displayText, isDeleting, wordIdx])

  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '140px 48px 80px',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 60,
        alignItems: 'center',
        position: 'relative',
        zIndex: 3,
      }}>
        <div style={{ animation: 'fadeInUp 1s ease' }}>
          <div style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#1a1a1a',
            letterSpacing: '-1.5px',
          }}>
            {"I'm Fluent in"}
            <span style={{ display: 'block', marginTop: 6 }}>
              <span style={{ color: brandColor }}>
                {displayText}
              </span>
              <span style={{
                display: 'inline-block',
                width: 3,
                height: '0.9em',
                background: brandColor,
                marginLeft: 2,
                verticalAlign: 'middle',
                animation: 'blink 0.8s step-end infinite',
              }} />
            </span>
            <span style={{ display: 'block', marginTop: 6 }}>
              strategy, and{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 500 }}>
                good vibes.
              </span>
            </span>
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 17,
            color: '#777',
            lineHeight: 1.7,
            maxWidth: 480,
            marginTop: 28,
          }}>
            Data-driven marketer with 4+ years turning social media, brand activations, and content strategy into measurable results.
          </p>

          <div style={{
            marginTop: 32,
            fontFamily: "'DM Mono', monospace",
            fontSize: 14,
            color: '#aaa',
          }}>
            A lot more about me ↓
          </div>
        </div>

        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'fadeInUp 1.2s ease',
        }}>
          <div style={{
            position: 'absolute',
            width: '110%',
            height: '110%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #E67E22, #F59E42, #FCD34D)',
            filter: 'blur(50px)',
            opacity: 0.25,
            zIndex: 0,
          }} />
          <div style={{
            width: '100%',
            maxWidth: 380,
            aspectRatio: '1',
            borderRadius: 32,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 20px 60px rgba(230, 126, 34, 0.2)',
            animation: 'float 5s ease-in-out infinite',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}hero-portrait.png`}
              alt="Hetvi Khatri illustration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero