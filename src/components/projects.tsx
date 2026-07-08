"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Code, X, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Face Attendance System",
    category: "AI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    desc: "Real-time AI system using face recognition for automated attendance tracking with OpenCV and Python.",
    tech: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    github: "https://github.com/amitgupta93/face-attendence-system.git",
    live: "#"
  },
  {
    id: 2,
    title: "Life Hub",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    desc: "All-in-one productivity hub application for managing daily life activities.",
    tech: ["React", "Node.js", "Full Stack"],
    github: "https://github.com/amitgupta93/life-hub.git",
    live: "#"
  },
  {
    id: 3,
    title: "Emotion Detection",
    category: "AI",
    image: "https://images.unsplash.com/photo-1516302752625-fcc389eaed97?q=80&w=1000&auto=format&fit=crop",
    desc: "Deep learning system that analyzes facial expressions and detects human emotions in real-time.",
    tech: ["Python", "TensorFlow", "Keras", "Computer Vision"],
    github: "https://github.com/amitgupta93/emotion-detection.git",
    live: "#"
  },
  {
    id: 4,
    title: "YouTube Notes Generator",
    category: "AI",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    desc: "AI-powered tool that generates intelligent notes from YouTube videos.",
    tech: ["Python", "AI", "YouTube API"],
    github: "https://github.com/amitgupta93/youtube_notes_generator.git",
    live: "#"
  },
  {
    id: 5,
    title: "AI Resume Checker",
    category: "AI",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop",
    desc: "AI-powered resume checker that analyzes and provides feedback on resumes.",
    tech: ["Python", "AI", "NLP", "Flask"],
    github: "https://github.com/amitgupta93/Ai-resume_checker.git",
    live: "https://ai-resume-checker-afin.onrender.com/"
  }
]

const categories = ["All", "Web", "AI"]

export function Projects() {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter)

  return (
    <div className="w-full py-20">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            MY <br />
            <span className="text-neon-blue">PROJECTS</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-neon-blue to-transparent w-32" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 glass p-2 rounded-2xl">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-bold tracking-widest transition-all duration-300 ${
                filter === cat ? "bg-neon-blue text-black shadow-[0_0_15px_rgba(0,243,255,0.5)]" : "text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video glass rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-neon-blue/40 transition-all duration-500 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-neon-blue uppercase tracking-widest">{project.category}</p>
                      <h3 className="text-3xl font-black">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-colors duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative w-full max-w-4xl glass rounded-[3rem] overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-8 right-8 z-10 p-3 rounded-full glass hover:bg-white/10 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto">
                <div className="lg:w-1/2 aspect-video lg:aspect-auto">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="lg:w-1/2 p-12 space-y-8">
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-neon-blue uppercase tracking-widest">{selectedProject.category}</p>
                    <h2 className="text-4xl font-black leading-tight">{selectedProject.title}</h2>
                  </div>

                  <p className="text-lg text-white/70 leading-relaxed">
                    {selectedProject.desc}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-4 py-2 glass rounded-lg text-xs font-bold text-white/60">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6 pt-8">
                    <a 
                      href={selectedProject.github} 
                      className="flex-1 px-8 py-4 glass rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-white/5 transition-colors"
                    >
                      <Code size={20} /> Code
                    </a>
                    <a 
                      href={selectedProject.live} 
                      className="flex-1 px-8 py-4 bg-neon-blue text-black rounded-2xl flex items-center justify-center gap-3 font-bold hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all"
                    >
                      <ExternalLink size={20} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
