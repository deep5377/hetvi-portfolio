import { useState } from 'react'

function RoleSwitcher() {
  var roles = [
    { name: 'Social Media', color: '#E67E22', tagline: 'Where I shine the brightest', desc: 'Multi-platform campaign execution, content calendars, audience engagement, and community building across Instagram, LinkedIn, Facebook, and X.' },
    { name: 'Content Strategy', color: '#3B82F6', tagline: 'What keeps me inspired', desc: 'Data-driven content planning, editorial calendars, brand voice development, and storytelling that converts followers into customers.' },
    { name: 'Brand Activations', color: '#F59E42', tagline: 'What gets me excited', desc: 'Trade shows, marketing events, influencer partnerships, and integrated campaigns that bring brands to life in the real world.' },
    { name: 'Analytics & ROI', color: '#10B981', tagline: 'What drives my decisions', desc: 'KPI tracking, performance reporting, A/B testing, campaign optimization, and turning data insights into actionable strategies.' },
  ]

  var [active, setActive] = useState(0)
  var r = roles[active]

  return (
    <section style={{ padding: '100px 48px', background: 'transparent', position: 'relative', zIndex: 3 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '-1px',
          marginBottom: 8,
        }}>
          A Generalist Specialized in
        </div>
        <div style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: r.color,
          letterSpacing: '-1px',
          marginBottom: 48,
          transition: 'color 0.4s ease',
        }}>
          {r.name}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 60, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 500,
              transition: 'all 0.3s ease',
            }}>
              {r.desc}
            </p>
            <div style={{
              marginTop: 32,
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: r.color + '20',
              border: '2px solid ' + r.color + '40',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.4s ease',
              animation: 'float 3s ease-in-out infinite',
            }}>
              <div style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: r.color,
                transition: 'all 0.4s ease',
              }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: 48, height: 200, alignItems: 'center' }}>
            {[0, 1, 2].map(function(i) {
              return <div key={i} style={{ width: 1, height: '100%', borderLeft: '2px dashed #ddd' }} />
            })}
          </div>
        </div>

        <div style={{
          marginTop: 48,
          background: '#fff',
          borderRadius: 100,
          padding: 6,
          display: 'inline-flex',
          gap: 0,
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          flexWrap: 'wrap',
        }}>
          {roles.map(function(role, idx) {
            var isActive = active === idx
            return (
              <button key={idx} onClick={function() { setActive(idx) }} style={{
                padding: '12px 28px',
                borderRadius: 100,
                border: 'none',
                background: isActive ? role.color : 'transparent',
                color: isActive ? '#fff' : '#666',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.3s ease',
              }}>
                {role.name}
              </button>
            )
          })}
        </div>

        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: '#aaa',
          marginTop: 12,
          marginLeft: 8,
        }}>
          {r.tagline}
        </div>
      </div>
    </section>
  )
}

export default RoleSwitcher