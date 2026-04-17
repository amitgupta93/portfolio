"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { 
  PerspectiveCamera, 
  Stars, 
  Float, 
  MeshDistortMaterial, 
  Sphere, 
  Box, 
  Points, 
  PointMaterial, 
  PresentationControls,
  Torus,
  Icosahedron,
  MeshWobbleMaterial
} from "@react-three/drei"
import { Suspense, useRef, useState, useMemo, useEffect } from "react"
import * as THREE from "three"

// Helper component for section-based motion
function MotionGroup({ active, children, position = [0, 0, 0] }: { active: boolean, children: React.ReactNode, position?: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      const targetScale = active ? 1 : 0
      ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08)
      
      if (active) {
        ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.15
      }
    }
  })

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  )
}

// HERO: Realistic Rubik's Cube
function RubiksCube({ active }: { active: boolean }) {
  const autoRotateRef = useRef<THREE.Group>(null)
  
  const cubes = useMemo(() => {
    const temp = []
    const colors = {
      front: "#ff0000", back: "#ffa500", top: "#ffffff",
      bottom: "#ffff00", left: "#0000ff", right: "#00ff00", core: "#000000"
    }
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          temp.push({ 
            position: [x * 1.05, y * 1.05, z * 1.05],
            colors: [
              x === 1 ? colors.right : colors.core,
              x === -1 ? colors.left : colors.core,
              y === 1 ? colors.top : colors.core,
              y === -1 ? colors.bottom : colors.core,
              z === 1 ? colors.front : colors.core,
              z === -1 ? colors.back : colors.core
            ]
          })
        }
      }
    }
    return temp
  }, [])

  useFrame((state) => {
    if (autoRotateRef.current) {
      const t = state.clock.getElapsedTime()
      autoRotateRef.current.rotation.x = Math.sin(t * 0.2) * 0.2
      autoRotateRef.current.rotation.y = t * 0.5
    }
  })

  return (
    <MotionGroup active={active} position={[3.5, 0, 0]}>
      <PresentationControls
        global
        snap={true}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
      >
        <group ref={autoRotateRef} scale={1.2}>
          {cubes.map((cube, i) => (
            <Box key={i} position={cube.position as [number, number, number]} args={[0.98, 0.98, 0.98]}>
              {cube.colors.map((color, index) => (
                <meshStandardMaterial 
                  key={index} 
                  attach={`material-${index}`} 
                  color={color} 
                  roughness={0.1}
                  metalness={0.5}
                />
              ))}
            </Box>
          ))}
        </group>
      </PresentationControls>
    </MotionGroup>
  )
}

// EDUCATION: Floating Double Helix structure
function EducationObject({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02
    }
  })

  return (
    <MotionGroup active={active} position={[4, 0, 0]}>
      <group ref={groupRef}>
        {[...Array(20)].map((_, i) => (
          <group key={i} position={[0, i * 0.4 - 4, 0]} rotation={[0, i * 0.4, 0]}>
            <Sphere args={[0.2, 16, 16]} position={[1.5, 0, 0]}>
              <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={1} />
            </Sphere>
            <Sphere args={[0.2, 16, 16]} position={[-1.5, 0, 0]}>
              <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
            </Sphere>
            <Box args={[3, 0.05, 0.05]}>
              <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
            </Box>
          </group>
        ))}
      </group>
    </MotionGroup>
  )
}

// SKILLS: Floating Tech Brain with rings
function SkillsObject({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.01
    }
  })

  return (
    <MotionGroup active={active} position={[5, 0, 0]}>
      <group ref={groupRef}>
        <Icosahedron args={[2, 2]}>
          <MeshDistortMaterial color="#00f3ff" speed={2} distort={0.5} wireframe />
        </Icosahedron>
        {[0, 1, 2].map((i) => (
          <Torus key={i} args={[3 + i * 0.5, 0.02, 16, 100]} rotation={[Math.PI / 2, i * Math.PI / 3, 0]}>
            <meshStandardMaterial color={["#ff00ff", "#00f3ff", "#00ff00"][i]} emissive={["#ff00ff", "#00f3ff", "#00ff00"][i]} emissiveIntensity={0.5} />
          </Torus>
        ))}
      </group>
    </MotionGroup>
  )
}

// PROJECTS: Digital Earth / Wireframe Globe
function ProjectsObject({ active }: { active: boolean }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
    }
  })

  return (
    <MotionGroup active={active} position={[0, 0, -2]}>
      <group ref={ref}>
        <Sphere args={[3.5, 32, 32]}>
          <meshStandardMaterial wireframe color="#00f3ff" transparent opacity={0.2} />
        </Sphere>
        <Points>
          <PointMaterial transparent color="#00f3ff" size={0.05} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
        </Points>
        <Icosahedron args={[3.6, 1]}>
          <meshStandardMaterial wireframe color="#ff00ff" transparent opacity={0.1} />
        </Icosahedron>
      </group>
    </MotionGroup>
  )
}

// CONTACT: Pulsing Energy Signal Heart
function ContactObject({ active }: { active: boolean }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      const s = 1 + Math.sin(state.clock.getElapsedTime() * 4) * 0.1
      ref.current.scale.set(s, s, s)
    }
  })

  return (
    <MotionGroup active={active} position={[4, 0, 0]}>
      <group ref={ref}>
        <Icosahedron args={[2, 0]}>
          <MeshWobbleMaterial color="#ff00ff" speed={2} factor={0.6} emissive="#ff00ff" emissiveIntensity={0.5} />
        </Icosahedron>
        {[1, 2, 3].map((i) => (
          <Torus key={i} args={[2 + i * 0.8, 0.05, 16, 100]}>
            <MeshDistortMaterial color="#ff00ff" speed={2} distort={0.2} transparent opacity={0.4 / i} />
          </Torus>
        ))}
      </group>
    </MotionGroup>
  )
}

function Particles() {
  const points = useMemo(() => {
    const p = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 100
      p[i * 3 + 1] = (Math.random() - 0.5) * 100
      p[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return p
  }, [])

  const ref = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001
      ref.current.rotation.x += 0.0005
      
      // Fun mouse follower effect
      const targetRotationY = (state.mouse.x * Math.PI) / 10
      const targetRotationX = (state.mouse.y * Math.PI) / 10
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotationY, 0.01)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetRotationX, 0.01)
    }
  })

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f3ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function CameraRig({ activeSection }: { activeSection: string }) {
  const { camera } = useThree()
  const targetPos = useMemo(() => new THREE.Vector3(0, 0, 10), [])
  const targetLookAt = useMemo(() => new THREE.Vector3(0, 0, 0), [])

  useFrame((state) => {
    // Smooth camera lag with mouse
    const mouseX = state.mouse.x * 2
    const mouseY = state.mouse.y * 2
    
    state.camera.position.lerp(new THREE.Vector3(targetPos.x + mouseX, targetPos.y + mouseY, targetPos.z), 0.05)
    state.camera.lookAt(targetLookAt)
  })

  return null
}

export function Scene({ activeSection }: { activeSection: string }) {
  return (
    <Canvas
      shadows
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "auto", position: "fixed" }}
      eventSource={typeof document !== "undefined" ? document.getElementById("root")! : undefined}
      eventPrefix="client"
    >
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <CameraRig activeSection={activeSection} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
        <spotLight position={[-20, 20, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#00f3ff" />
        
        <Stars radius={150} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
        <Particles />

        <RubiksCube active={activeSection === "hero"} />
        <EducationObject active={activeSection === "about"} />
        <SkillsObject active={activeSection === "skills"} />
        <ProjectsObject active={activeSection === "projects"} />
        <ContactObject active={activeSection === "contact"} />

        <fog attach="fog" args={["#000", 10, 50]} />
      </Suspense>
    </Canvas>
  )
}
