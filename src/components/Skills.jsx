function Skills() {
  var skillGroups = [
    { label: 'Strategy', color: '#E67E22', items: ['Social Media Marketing', 'Content Strategy', 'Brand Positioning', 'Campaign Execution'] },
    { label: 'Execution', color: '#3B82F6', items: ['Content Calendar Mgmt', 'Email Marketing', 'Brand Activations', 'Influencer Partnerships'] },
    { label: 'Analytics', color: '#F59E42', items: ['KPI Tracking', 'Data Analysis', 'Performance Reporting', 'ROI Optimization'] },
    { label: 'Tools', color: '#10B981', items: ['Adobe Creative Suite', 'Mailchimp', 'WordPress', 'Google Analytics'] },
  ]

  return (
    <section style={{ padding: '100px 48px', background: 'transparent', position: 'relative', zIndex: 3 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: '#aaa',
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginBottom: 12,
        }}>
          Skills
        </div>
        <div style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '-1px',
          marginBottom: 48,
        }}>
          The toolkit behind the magic.
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {skillGroups.map(function(group, i) {
            return (
              <div key={i} style={{
                padding: 28,
                borderRadius: 20,
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #eee',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: group.color,
                }} />
                <div style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 16,
                }}>
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {group.items.map(function(item, j) {
                    return (
                      <span key={j} style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13.5,
                        color: group.color,
                        fontWeight: 600,
                        padding: '5px 14px',
                        borderRadius: 8,
                        background: group.color + '12',
                        display: 'inline-block',
                        width: 'fit-content',
                      }}>
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills