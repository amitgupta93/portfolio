"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scene } from "@/components/canvas/scene"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { MusicToggle } from "@/components/music-toggle"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Small delay to ensure all assets are loaded after intro
    const timer = setTimeout(() => setIsReady(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      id="root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-screen bg-black"
    >
      {/* Fixed 3D Background - Stays behind everything */}
      <Scene activeSection={activeSection} />

      {/* UI Overlay - This handles the scrolling */}
      <div className="relative z-10 w-full h-full overflow-y-auto scroll-smooth hide-scrollbar">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <section id="hero" className="min-h-screen flex items-center px-6 md:px-20 lg:px-40 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <Hero />
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center px-6 md:px-20 lg:px-40 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <About />
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center px-6 md:px-20 lg:px-40 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <Skills />
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center px-6 md:px-20 lg:px-40 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <Projects />
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center px-6 md:px-20 lg:px-40 pointer-events-none">
          <div className="w-full pointer-events-auto">
            <Contact />
          </div>
        </section>

        {/* Floating UI Elements */}
        <MusicToggle autoPlay={isReady} />
        <CustomCursor />
      </div>
    </motion.div>
  )
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white/30 mix-blend-difference hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: 1,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  )
}
