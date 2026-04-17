"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Cpu, Code, Database, Layout, Globe, Zap, Box, Layers } from "lucide-react"

const skills = [
  { name: "React", icon: <Layout />, level: 90, color: "#61DAFB" },
  { name: "Next.js", icon: <Globe />, level: 85, color: "#ffffff" },
  { name: "TypeScript", icon: <Code />, level: 88, color: "#3178C6" },
  { name: "Three.js", icon: <Box />, level: 75, color: "#00f3ff" },
  { name: "Node.js", icon: <Database />, level: 82, color: "#339933" },
  { name: "Python", icon: <Cpu />, level: 80, color: "#3776AB" },
  { name: "AI / ML", icon: <Zap />, level: 70, color: "#ff00ff" },
  { name: "Tailwind", icon: <Layers />, level: 95, color: "#38B2AC" },
]

function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group relative p-10 glass rounded-[2.5rem] border border-white/10 hover:border-neon-green/40 transition-all duration-200 overflow-hidden cursor-default shadow-2xl"
    >
      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: skill.color }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl"
          style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
        >
          <div style={{ color: skill.color }}>
            {skill.icon}
          </div>
        </motion.div>

        <div className="space-y-4 w-full">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-2xl font-black uppercase tracking-tighter">{skill.name}</h3>
            <span className="text-sm font-mono font-bold" style={{ color: skill.color }}>{skill.level}%</span>
          </div>
          
          <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[2px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="h-full rounded-full relative"
              style={{ backgroundColor: skill.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated Micro-interaction */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity">
        {skill.icon}
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <div className="w-full py-20 relative overflow-hidden">
      {/* Neural Network / AI Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="space-y-4 mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          Neural <br />
          <span className="text-neon-green">Engine</span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-neon-green to-transparent w-32" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </motion.div>
    </div>
  )
}
