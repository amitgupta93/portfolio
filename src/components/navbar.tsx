"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Zap, Cpu } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "Education", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export function Navbar({ activeSection, setActiveSection }: { 
  activeSection: string, 
  setActiveSection: (id: string) => void 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, themes } = useTheme()

  const cycleTheme = () => {
    const currentIdx = themes.indexOf(theme || "dark")
    const nextIdx = (currentIdx + 1) % themes.length
    setTheme(themes[nextIdx])
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 pointer-events-auto"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(0,243,255,0.5)]">
          D
        </div>
        <span className="text-xl font-bold tracking-tighter hidden sm:block">PORTFOLIO</span>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 glass p-1 px-2 rounded-2xl backdrop-blur-md border border-white/5 pointer-events-auto">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActiveSection(link.id)}
            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl ${
              activeSection === link.id ? "bg-white text-black shadow-xl" : "text-white/40 hover:text-white"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        {/* Theme Switcher */}
        <button
          onClick={cycleTheme}
          className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"
          title={`Switch to next theme (Current: ${theme})`}
        >
          {theme === "light" ? <Sun size={18} /> : 
           theme === "dark" ? <Moon size={18} /> : 
           theme === "neon" ? <Zap size={18} className="text-neon-blue" /> : 
           <Cpu size={18} className="text-cyber-red" />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-3 rounded-xl glass"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="absolute top-full left-4 right-4 glass mt-4 p-6 md:hidden flex flex-col gap-4 rounded-3xl border border-white/10 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveSection(link.id)
                  setIsOpen(false)
                }}
                className={`text-2xl font-black tracking-tighter uppercase ${
                  activeSection === link.id ? "text-neon-blue" : "text-white/40"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
