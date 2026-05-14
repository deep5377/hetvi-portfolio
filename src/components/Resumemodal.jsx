function ResumeModal(props) {
  if (!props.isOpen) return null

  var pdfUrl = `${import.meta.env.BASE_URL}Hetvi_Khatri_Resume.pdf`

  return (
    <div
      onClick={props.onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        onClick={function(e) { e.stopPropagation() }}
        style={{
          background: '#fff',
          borderRadius: 20,
          width: '100%',
          maxWidth: 900,
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          animation: 'scaleIn 0.3s ease',
        }}
      >
        <div style={{
          padding: '20px 28px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FAF8F5',
        }}>
          <div>
            <div style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: '#1a1a1a',
            }}>
              Hetvi Khatri — Resume
            </div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: '#888',
              marginTop: 2,
            }}>
              Marketing Specialist
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            
              href={pdfUrl}
              download="Hetvi_Khatri_Resume.pdf"
              style={{
                padding: '10px 20px',
                background: '#E67E22',
                color: '#fff',
                borderRadius: 100,
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Download
            </a>

            <button
              onClick={props.onClose}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid #ddd',
                background: '#fff',
                cursor: 'pointer',
                fontSize: 16,
                color: '#666',
              }}
            >
              X
            </button>
          </div>
        </div>

        <div style={{ flex: 1, background: '#f5f5f5' }}>
          <iframe
            src={pdfUrl}
            title="Resume"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeModal