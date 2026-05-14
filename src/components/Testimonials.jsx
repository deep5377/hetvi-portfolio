function Testimonials() {
  var quotes = [
    { text: 'Hetvi has an incredible ability to translate brand vision into social campaigns that actually perform. Her data-driven approach consistently delivers above target results.', author: 'Marketing Director', color: '#E67E22' },
    { text: 'Working with Hetvi transformed our digital presence. She brought structure to our content strategy and the engagement numbers speak for themselves.', author: 'Brand Manager', color: '#3B82F6' },
    { text: 'Her ability to manage cross-functional campaigns while keeping everything on brand and on-time is remarkable. A true marketing leader.', author: 'Creative Lead', color: '#F59E42' },
    { text: 'Hetvi does not just execute campaigns, she understands the why behind every metric. That strategic thinking sets her apart.', author: 'VP of Marketing', color: '#8B5CF6' },
  ]

  return (
    <section style={{ padding: '100px 48px', background: 'rgba(255, 255, 255, 0.6)', position: 'relative', zIndex: 3 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: '#aaa',
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginBottom: 12,
        }}>
          They all love me
        </div>
        <div style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '-1px',
          marginBottom: 48,
          lineHeight: 1.2,
        }}>
          A Little Validation is<br />
          always good, right?
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 20,
        }}>
          {quotes.map(function(q, i) {
            return (
              <div key={i} style={{
                padding: 28,
                borderRadius: 20,
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #eee',
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: q.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <span style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>,,</span>
                </div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14.5,
                  color: '#555',
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}>
                  {q.text}
                </p>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#1a1a1a',
                }}>
                  — {q.author}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials