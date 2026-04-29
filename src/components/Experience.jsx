function Experience() {
  var jobs = [
    {
      company: "Ravi's Import Warehouse",
      role: 'Marketing Lead',
      period: 'Jan 2024 - Present',
      color: '#E67E22',
      highlights: [
        'Execute multi-platform social campaigns driving brand awareness and engagement',
        'Track and analyze campaign performance, KPIs, and ROI to optimize results',
        'Lead execution of trade shows and marketing events',
        'Execute full-funnel campaigns across paid, owned, and earned channels',
      ],
    },
    {
      company: 'Technource',
      role: 'Digital Marketing Specialist',
      period: 'Jul 2024 - Nov 2024',
      color: '#3B82F6',
      highlights: [
        'Managed social media strategy and content execution',
        'Executed email marketing campaigns and automation workflows',
        'Analyzed campaign data, audience insights, and performance metrics',
      ],
    },
    {
      company: 'IMS People Possible',
      role: 'Marketing Associate',
      period: 'Sep 2023 - Jul 2024',
      color: '#F59E42',
      highlights: [
        'Executed integrated marketing campaigns across digital, print, and social',
        'Created marketing content - brochures, newsletters, ads, social assets',
        'Conducted market research and competitive analysis',
      ],
    },
    {
      company: 'Grab The Site',
      role: 'Marketing Internship',
      period: 'Aug 2021 - Aug 2023',
      color: '#10B981',
      highlights: [
        'Executed full-funnel social campaigns across paid, owned, and earned channels',
        'Leveraged data insights and KPI tracking to optimize ROI',
        'Managed content calendars and campaign timelines',
      ],
    },
  ]

  return (
    <section id="work" style={{ padding: '100px 48px', background: 'rgba(255,255,255,0.6)', position: 'relative', zIndex: 3 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: '#aaa',
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginBottom: 12,
        }}>
          Experience
        </div>
        <div style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '-1px',
          marginBottom: 48,
        }}>
          Where the magic happens.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {jobs.map(function(job, i) {
            return (
              <div key={i} style={{
                padding: '32px 36px',
                borderRadius: 24,
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #eee',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: 4,
                  background: job.color,
                  borderRadius: '4px 0 0 4px',
                }} />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 16,
                  flexWrap: 'wrap',
                  gap: 8,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#1a1a1a',
                    }}>
                      {job.company}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: job.color,
                    }}>
                      {job.role}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 13,
                    color: '#999',
                  }}>
                    {job.period}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {job.highlights.map(function(h, j) {
                    return (
                      <div key={j} style={{ display: 'flex', gap: 10 }}>
                        <span style={{ color: job.color, fontSize: 16 }}>▸</span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 14.5,
                          color: '#555',
                          lineHeight: 1.6,
                        }}>
                          {h}
                        </span>
                      </div>
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

export default Experience