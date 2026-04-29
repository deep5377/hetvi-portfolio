import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function ParticleBackground() {
  var mountRef = useRef(null)

  useEffect(function() {
    if (!mountRef.current) return

    var container = mountRef.current
    var w = window.innerWidth
    var h = window.innerHeight

    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
    camera.position.z = 30

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    var palette = [0xE67E22, 0xF59E42, 0xFCD34D, 0x3B82F6, 0x10B981]
    var nodes = []
    var velocities = []

    for (var i = 0; i < 30; i++) {
      var color = palette[Math.floor(Math.random() * palette.length)]
      var size = Math.random() * 0.4 + 0.2
      var geometry = new THREE.SphereGeometry(size, 16, 16)
      var material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.5 + Math.random() * 0.4,
      })
      var mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20
      )
      scene.add(mesh)
      nodes.push(mesh)
      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.015,
      })
    }

    var mouseX = 0
    var mouseY = 0
    function onMouseMove(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    var frame = 0
    function animate() {
      frame++
      for (var j = 0; j < nodes.length; j++) {
        nodes[j].position.x += velocities[j].x
        nodes[j].position.y += velocities[j].y
        nodes[j].position.z += velocities[j].z
        if (Math.abs(nodes[j].position.x) > 32) velocities[j].x *= -1
        if (Math.abs(nodes[j].position.y) > 22) velocities[j].y *= -1
        if (Math.abs(nodes[j].position.z) > 12) velocities[j].z *= -1
        var pulse = Math.sin(frame * 0.02 + j) * 0.1 + 1
        nodes[j].scale.setScalar(pulse)
      }
      camera.position.x += (mouseX * 4 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 3 - camera.position.y) * 0.02
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    function onResize() {
      var nw = window.innerWidth
      var nh = window.innerHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    return function() {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={mountRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 2,
      pointerEvents: 'none',
      opacity: 0.25,
    }} />
  )
}

export default ParticleBackground