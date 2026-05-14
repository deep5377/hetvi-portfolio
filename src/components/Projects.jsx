function Projects() {
  var projects = [
    {
      title: 'Increasing E-commerce Sales Through Full-Funnel Marketing Strategy',
      tagline: "Good marketing doesn't just bring traffic — it brings the right traffic and converts it.",
      objective: 'Increase website traffic, improve conversion rates, and drive consistent online sales for a consumer product brand.',
      color: '#E67E22',
      strategy: 'Built a full-funnel digital strategy combining high-intent traffic from SEO and paid ads, on-site conversion optimization, and retargeting — so awareness, consideration, and conversion worked together seamlessly.',
      results: [
        { value: '↑', label: 'Organic + Paid Traffic' },
        { value: '↑', label: 'Conversion Rate' },
        { value: '↓', label: 'Cart Abandonment' },
      ],
      tools: ['SEO', 'Meta Ads', 'CRO', 'A/B Testing', 'Retargeting', 'Analytics'],
    },
    {
      title: 'Driving Website Adoption at Trade Shows',
      tagline: 'Getting people to visit a new website is easy. Getting them to actually use it — in a busy trade show — is the real challenge.',
      objective: 'Drive website traffic and encourage trade show customers to start using a new platform for ordering.',
      color: '#3B82F6',
      strategy: 'Introduced a QR-code-led digital strategy across all touchpoints with a curiosity hook — "Scan me for a surprise discount" — turning passive viewing into active participation with trackable performance.',
      results: [
        { value: '600+', label: 'QR Scans / Day' },
        { value: 'High', label: 'Intent Traffic' },
        { value: '↑', label: 'Online Adoption' },
      ],
      tools: ['QR Strategy', 'Trade Show', 'Tracking', 'Customer Acquisition'],
    },
    {
      title: 'End-to-End Marketing for In-House Trade Show',
      tagline: 'Managing marketing for a trade show is one thing. Handling everything, single-handedly, is another.',
      objective: 'Plan and execute a complete marketing strategy to promote an in-house trade show and drive attendance across all channels.',
      color: '#F59E42',
      strategy: 'Built a pre-planned content and campaign system instead of handling tasks day-by-day — creating everything in advance and scheduling it for smooth, uninterrupted execution across digital and physical channels.',
      results: [
        { value: '100%', label: 'On-Time Execution' },
        { value: 'Multi', label: 'Channel Coverage' },
        { value: 'Solo', label: 'Operations' },
      ],
      tools: ['Campaign Mgmt', 'SMM', 'Email', 'Content', 'Event Marketing'],
    },
    {
      title: 'Driving Sales for Slow-Moving Candy Inventory',
      tagline: "Moving non-selling products isn't just about promotion — it's about the right mix of pricing, positioning, and visibility.",
      objective: 'Increase sales and clear slow-moving candy inventory by targeting wholesale customers and driving purchase intent.',
      color: '#10B981',
      strategy: 'Combined pricing incentive + targeted marketing + in-store visibility — repositioning the offer with a strategic discount, dedicated end-cap displays, paid ads, and website banner support.',
      results: [
        { value: '↑↑', label: 'Sales Boost' },
        { value: '↑', label: 'Inventory Turnover' },
        { value: 'Multi', label: 'Channel Mix' },
      ],
      tools: ['Paid Ads', 'Retail Marketing', 'Visual Merch', 'Promo Design'],
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
          My Work
        </div>
        <div style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1a1a1a',
          letterSpacing: '-1px',
          marginBottom: 12,
        }}>
          Projects I'm proud of.
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          color: '#777',
          maxWidth: 600,
          marginBottom: 48,
          lineHeight: 1.6,
        }}>
          Real campaigns, real results. Each project blends strategy, creative, and data to drive measurable outcomes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map(function(p, i) {
            return (
              <div key={i} style={{
                padding: '36px 40px',
                borderRadius: 24,
                background: 'rgba(255,255,255,0.8)',
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
                  height: 4,
                  background: p.color,
                }} />

                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  color: p.color,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  marginBottom: 8,
                  fontWeight: 600,
                }}>
                  Project 0{i + 1}
                </div>

                <div style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}>
                  {p.title}
                </div>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: p.color,
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  marginBottom: 20,
                  fontWeight: 500,
                }}>
                  "{p.tagline}"
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 24,
                  marginBottom: 24,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: '#aaa',
                      textTransform: 'uppercase',
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      fontWeight: 600,
                    }}>
                      Objective
                    </div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.6,
                    }}>
                      {p.objective}
                    </p>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: '#aaa',
                      textTransform: 'uppercase',
                      letterSpacing: 1.5,
                      marginBottom: 6,
                      fontWeight: 600,
                    }}>
                      Strategy
                    </div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.6,
                    }}>
                      {p.strategy}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 12,
                  padding: '20px 0',
                  borderTop: '1px solid #f0f0f0',
                  borderBottom: '1px solid #f0f0f0',
                  marginBottom: 20,
                }}>
                  {p.results.map(function(r, j) {
                    return (
                      <div key={j} style={{ textAlign: 'center' }}>
                        <div style={{
                          fontFamily: "'Clash Display', sans-serif",
                          fontSize: 28,
                          fontWeight: 700,
                          color: p.color,
                          lineHeight: 1,
                          marginBottom: 6,
                        }}>
                          {r.value}
                        </div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          color: '#888',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                        }}>
                          {r.label}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tools.map(function(t, k) {
                    return (
                      <span key={k} style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: p.color,
                        fontWeight: 600,
                        padding: '5px 12px',
                        borderRadius: 6,
                        background: p.color + '12',
                      }}>
                        {t}
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

export default Projects