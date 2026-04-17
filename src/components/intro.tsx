"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = [
  "Welcome",      // English
  "नमस्ते",        // Hindi
  "خوش آمدید",    // Urdu
  "ようこそ",      // Japanese
  "Willkommen",   // German
  "Let's Meet Amit", // Personal touch
]

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index === words.length) {
      setTimeout(onComplete, 1500) // Longer pause for final name reveal
      return
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, 1000) // Slower as requested (1s per word)

    return () => clearTimeout(timer)
  }, [index, onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* Dynamic Background Reveal - No Blur for clarity */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-neon-blue/10 rounded-full" 
        />
      </div>

      <AnimatePresence mode="wait">
        {index < words.length && (
          <motion.div
            key={words[index]}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-6xl md:text-9xl font-black text-white text-center tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {words[index]}
              </span>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
