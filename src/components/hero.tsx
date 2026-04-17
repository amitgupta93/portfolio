"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, User, Globe, Download, ArrowRight, Cpu, Zap, Trophy } from "lucide-react"

const taglines = [
  "Full Stack Developer",
  "AI Developer",
  "UI/UX Designer",
  "Creative Technologist",
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [tagline, setTagline] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = taglines[index % taglines.length]
      setTagline(
        isDeleting
          ? fullText.substring(0, tagline.length - 1)
          : fullText.substring(0, tagline.length + 1)
      )

      setSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && tagline === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && tagline === "") {
        setIsDeleting(false)
        setIndex(index + 1)
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [tagline, isDeleting, index, speed])

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
      {/* Left Side: Photo, Name, Skills */}
      <div className="flex-1 flex flex-col items-center md:items-start space-y-8">
        {/* Profile Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-12"
        >
          {/* Advanced Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue via-transparent to-neon-pink rounded-3xl blur-[40px] opacity-50 animate-pulse" />
          <div className="absolute -inset-4 bg-neon-blue/5 rounded-[2.5rem] blur-2xl animate-float" />
          
          <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
            {/* Animated Shine Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10" />
            
            <img 
              src="/IMG_20250909_122905.jpg" 
              alt="Amit Gupta" 
              className="w-full h-full object-cover rounded-[1.4rem] transition-all duration-700 relative z-0"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              }}
            />
            
            {/* Real-time scanning effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scan pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-neon-blue font-black tracking-[0.3em] text-[10px] md:text-xs uppercase"
            >
              Creative Developer & AI Enthusiast
            </motion.p>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Amit</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green">
                Gupta
              </span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="h-10 flex items-center justify-center md:justify-start gap-3">
              <Zap className="text-neon-blue animate-pulse" size={24} />
              <p className="text-xl md:text-2xl font-black text-white/90 uppercase tracking-tighter">
                {tagline}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[3px] h-[1em] bg-neon-blue ml-2" 
                />
              </p>
            </div>

            <div className="flex gap-2 justify-center md:justify-start">
              {["AI/ML", "FULL STACK", "UI/UX"].map((skill, idx) => (
                <span
                  key={idx}
                  className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 glass rounded-full border border-white/5 ${
                    idx === 0 ? "text-neon-blue" : idx === 1 ? "text-neon-pink" : "text-neon-green"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-6"
        >
          <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Explore Work
          </button>
          
          {/* Resume Section Placeholder */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 glass border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-all group"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            View Resume
          </a>
        </motion.div>

        {/* New Achievement Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass p-4 rounded-2xl border-l-4 border-neon-blue flex items-center gap-4 group hover:bg-white/5 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Latest Achievement</p>
            <p className="text-sm font-black text-white">B.Tech 3rd Year - AI & DS Specialization</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Empty for Rubik's Cube (handled by Canvas in Scene) */}
      <div className="flex-1 w-full h-96 md:h-full pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent" />
      </motion.div>
    </div>
  )
}
