"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, X, Bot, User } from "lucide-react"

const responses: Record<string, string> = {
  "hello": "Systems Online. Hello! I am Amit's AI Assistant. How can I help you navigate his Neural Nexus?",
  "hi": "Hello! I am Amit's AI Assistant. You can ask me about his Skills, Projects, or even download his Resume.",
  "about": "Amit is an AI Developer and 3rd Year student at AKS University, specializing in AI and Data Science. He's building the future of intelligent systems.",
  "skills": "Amit is highly skilled in Java, Python, TensorFlow, React, and Machine Learning. Check the Skills section for a 3D orbit visualization!",
  "projects": "He has built some amazing projects like a Facial Attendance System, Emotion Detection, and an AI Interview Bot. You can see them in the Projects section.",
  "contact": "You can reach Amit at amitgupta93408@gmail.com or use the contact form below. I've also linked his socials!",
  "resume": "You can view or download Amit's resume directly from the dashboard. Want me to scroll there for you?",
  "default": "Processing... I'm still learning about Amit. You can ask me about his 'skills', 'projects', 'about', or 'contact'!"
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    {role: 'ai', text: "Neural Link Established. I am Amit's AI Assistant. Ask me anything!"}
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMsg = input.toLowerCase().trim()
    setMessages(prev => [...prev, {role: 'user', text: input}])
    setInput("")

    // Simple AI Logic
    setTimeout(() => {
      let response = responses.default
      for (const key in responses) {
        if (userMsg.includes(key)) {
          response = responses[key]
          break
        }
      }
      setMessages(prev => [...prev, {role: 'ai', text: response}])
    }, 600)
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 h-96 glass border border-neon-blue/40 rounded-3xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.2)]"
          >
            {/* Header */}
            <div className="p-4 border-b border-neon-blue/20 bg-neon-blue/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-neon-blue" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Ask AI Amit</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth hide-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'ai' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium leading-relaxed ${
                    msg.role === 'ai' 
                      ? 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none' 
                      : 'bg-neon-blue text-black font-bold rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neon-blue/20 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me something..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white outline-none focus:border-neon-blue/50 transition-all"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-neon-blue text-black rounded-xl hover:scale-105 transition-transform"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,243,255,0.4)] relative"
      >
        <MessageSquare size={24} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink rounded-full border-2 border-black animate-pulse" />
      </motion.button>
    </div>
  )
}
