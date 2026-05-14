import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import RoleSwitcher from './components/RoleSwitcher'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <RoleSwitcher />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App