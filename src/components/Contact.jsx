function Contact() {
  var socials = [
    { name: 'In', url: 'https://www.instagram.com/hetvi.k.khatri/', color: '#E4405F' },
    { name: 'Li', url: 'https://www.linkedin.com/in/hetvi-khatri/', color: '#0A66C2' },
    { name: 'X', url: 'https://x.com/Hetutweets', color: '#1a1a1a' },
    { name: 'Fb', url: 'https://www.facebook.com/hetukhatri18/', color: '#1877F2' },
    { name: 'Gh', url: 'https://github.com/HetuKhatri', color: '#333' },
  ]

  return (
    <div id="contact" style={{ position: 'relative', zIndex: 3 }}>
      <section style={{
        padding: '120px 48px 80px',
        background: 'transparent',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            color: '#1a1a1a',
            letterSpacing: '-1.5px',
            lineHeight: 1.15,
            marginBottom: 32,
          }}>
            {"Let's Build Something "}
            <span style={{ color: '#E67E22' }}>Cool together</span>
          </div>

          <div style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 24,
          }}>
            {socials.map(function(s, i) {
              return (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: s.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {s.name}
                </a>
              )
            })}
          </div>

          <div style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="mailto:hetvikkhatri@gmail.com" style={{
              display: 'inline-block',
              padding: '14px 36px',
              borderRadius: 100,
              background: '#1a1a1a',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              hetvikkhatri@gmail.com
            </a>

            <a href="tel:+19452162322" style={{
              display: 'inline-block',
              padding: '14px 36px',
              borderRadius: 100,
              background: '#E67E22',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              (945) 216-2322
            </a>
          </div>
        </div>
      </section>

      <footer style={{
        padding: '32px 48px',
        textAlign: 'center',
        borderTop: '1px solid #eee',
        background: 'rgba(250, 248, 245, 0.8)',
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: '#aaa',
        }}>
          Designed with strategy and good vibes — Hetvi Khatri 2025
        </p>
      </footer>
    </div>
  )
}

export default Contact