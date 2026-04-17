"use client"

import { motion } from "framer-motion"
import { User, Code, GraduationCap, Trophy, Cpu, BookOpen, Star, Mail, Globe } from "lucide-react"

const highlights = [
  { icon: <Code size={24} />, title: "B.Tech CSE (AI & DS)", desc: "3rd Year Student at AKS University, Satna." },
  { icon: <GraduationCap size={24} />, title: "Academic Excellence", desc: "Consistently top of class in AI and Data Science subjects." },
  { icon: <Trophy size={24} />, title: "Hackathon Winner", desc: "Secured 1st place in regional technical innovation summit." },
  { icon: <Cpu size={24} />, title: "AI/ML Fresher", desc: "Ready to contribute with 4 real-world projects." },
]

export function About() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 py-20">
      {/* Left: Academic Journey Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            ACADEMIC <br />
            <span className="text-neon-pink">JOURNEY</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-neon-pink to-transparent w-32" />
        </div>

        <div className="space-y-8">
          <div className="p-8 glass rounded-[2.5rem] border border-white/10 hover:border-neon-pink/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform">
              <GraduationCap size={120} />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">B.Tech in CSE</h3>
                  <p className="text-neon-blue font-black tracking-widest text-[10px] uppercase">Artificial Intelligence & Data Science</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/70">
                  <Globe size={18} className="text-neon-pink" />
                  <span className="text-lg font-bold">AKS University, Satna</span>
                </div>
                <div className="flex items-center gap-4 text-white/50">
                  <Trophy size={18} className="text-neon-blue" />
                  <span className="text-sm font-bold">3rd Year Student (Fresher)</span>
                </div>
              </div>

              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                I am focused on building <span className="text-white font-bold underline decoration-neon-pink underline-offset-4">intelligent systems</span> that solve real-world problems. My academic path is driven by a passion for <span className="text-neon-pink font-bold">AI/ML</span> and <span className="text-neon-blue font-bold">Full-Stack Development</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass rounded-2xl border-l-2 border-neon-pink/50 hover:bg-white/5 transition-all group flex items-center gap-6"
              >
                <div className="text-neon-pink group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[10px] text-white/40 font-bold leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right: Premium Achievement Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-full max-w-md aspect-[4/5] glass rounded-[3rem] p-10 border border-white/20 shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-blue/10 opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neon-pink font-black">Professional Profile</p>
                <h3 className="text-3xl font-black tracking-tighter">AMIT GUPTA</h3>
              </div>
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shadow-xl border border-white/10 group-hover:border-neon-pink/50 transition-colors">
                <Star size={28} className="text-neon-pink animate-pulse" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                  <span>Development Skills</span>
                  <span className="text-neon-blue">Advanced</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-neon-pink to-neon-blue rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                  <span>AI/ML Implementation</span>
                  <span className="text-neon-pink">Expertise</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-pink rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                <div className="px-4 py-2 glass rounded-xl text-[10px] font-black text-white/60 tracking-widest hover:text-white hover:border-neon-pink/50 transition-all cursor-default">PYTHON</div>
                <div className="px-4 py-2 glass rounded-xl text-[10px] font-black text-white/60 tracking-widest hover:text-white hover:border-neon-blue/50 transition-all cursor-default">OPENCV</div>
                <div className="px-4 py-2 glass rounded-xl text-[10px] font-black text-white/60 tracking-widest hover:text-white hover:border-neon-green/50 transition-all cursor-default">REACT</div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-white/40 group-hover:text-white transition-colors">
                  <Mail size={16} className="text-neon-pink" />
                  <span className="text-xs font-bold font-mono">amitgupta.work@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
