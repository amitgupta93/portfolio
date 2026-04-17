"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, SkipForward } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const tracks = [
  { 
    name: "Lofi Dream", 
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  { 
    name: "Night Drive", 
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
  },
  { 
    name: "Cyber Chill", 
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" 
  }
]

export function MusicToggle({ autoPlay = false }: { autoPlay?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        setIsPlaying(true)
        if (audioRef.current) {
          audioRef.current.play().catch(() => {
            console.log("Autoplay waiting for interaction...")
          })
        }
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [autoPlay])

  const togglePlay = () => setIsPlaying(prev => !prev)
  
  const nextTrack = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
    setIsPlaying(true)
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load()
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false))
      }
    }
  }, [currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 glass rounded-full hover:bg-white/10 transition-colors group shadow-2xl pointer-events-auto relative"
        onClick={togglePlay}
      >
        <audio
          ref={audioRef}
          src={tracks[currentTrack].url}
          loop
          preload="auto"
        />
        <div className="relative">
          {isPlaying ? (
            <Volume2 size={24} className="text-neon-blue" />
          ) : (
            <VolumeX size={24} className="text-white/40" />
          )}
          
          {isPlaying && (
            <div className="absolute -inset-2 rounded-full border border-neon-blue animate-ping opacity-50" />
          )}
        </div>
        
        <span className="absolute left-full ml-4 px-3 py-1 glass rounded-lg text-[10px] font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase">
          {isPlaying ? `Playing: ${tracks[currentTrack].name}` : "Music Muted"}
        </span>
      </motion.button>

      {isPlaying && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextTrack}
          className="p-3 glass rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all pointer-events-auto"
          title="Next Track"
        >
          <SkipForward size={18} />
        </motion.button>
      )}
    </div>
  )
}
