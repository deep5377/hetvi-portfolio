function ResumeModal(props) {
  if (props.isOpen === false) {
    return null
  }

  var pdfUrl = import.meta.env.BASE_URL + 'Hetvi_Khatri_Resume.pdf'

  return (
    <div onClick={props.onClose} style={overlayStyle}>
      <div onClick={stopProp} style={modalStyle}>
        <div style={headerStyle}>
          <div style={titleStyle}>Hetvi Khatri Resume</div>
          <div style={btnGroupStyle}>
            <a href={pdfUrl} download="Hetvi_Khatri_Resume.pdf" style={downloadBtnStyle}>Download</a>
            <button onClick={props.onClose} style={closeBtnStyle}>X</button>
          </div>
        </div>
        <iframe src={pdfUrl} title="Resume" style={iframeStyle} />
      </div>
    </div>
  )
}

function stopProp(e) {
  e.stopPropagation()
}

var overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
}

var modalStyle = {
  background: '#fff',
  borderRadius: 20,
  width: '100%',
  maxWidth: 900,
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}

var headerStyle = {
  padding: 20,
  borderBottom: '1px solid #eee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

var titleStyle = {
  fontFamily: "'Clash Display', sans-serif",
  fontSize: 18,
  fontWeight: 700,
}

var btnGroupStyle = {
  display: 'flex',
  gap: 10,
}

var downloadBtnStyle = {
  padding: '10px 20px',
  background: '#E67E22',
  color: '#fff',
  borderRadius: 100,
  textDecoration: 'none',
  fontSize: 13,
  fontWeight: 600,
}

var closeBtnStyle = {
  width: 36,
  height: 36,
  borderRadius: 18,
  border: '1px solid #ddd',
  background: '#fff',
  cursor: 'pointer',
}

var iframeStyle = {
  width: '100%',
  flex: 1,
  border: 'none',
}

export default ResumeModal