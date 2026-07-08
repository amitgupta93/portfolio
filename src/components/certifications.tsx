"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, ExternalLink, ShieldCheck, Star } from "lucide-react"

const certifications = [
  {
    title: "AI & Machine Learning Professional",
    issuer: "Coursera / DeepLearning.AI",
    date: "2024",
    link: "#",
    skills: ["Python", "TensorFlow", "Neural Networks"],
    color: "text-neon-blue",
    border: "border-neon-blue/50"
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    link: "#",
    skills: ["React", "Node.js", "MongoDB"],
    color: "text-neon-pink",
    border: "border-neon-pink/50"
  },
  {
    title: "Google Cloud Practitioner",
    issuer: "Google Cloud",
    date: "2024",
    link: "#",
    skills: ["Cloud Computing", "GCP Services"],
    color: "text-neon-green",
    border: "border-neon-green/50"
  },
  {
    title: "Data Science Specialization",
    issuer: "IBM",
    date: "2023",
    link: "#",
    skills: ["Data Analysis", "SQL", "Visualization"],
    color: "text-yellow-400",
    border: "border-yellow-400/50"
  }
]

export function Certifications() {
  return (
    <div className="w-full py-20 space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          Verified <br />
          <span className="text-neon-blue">Certifications</span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-neon-blue to-transparent w-32 mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-8 glass rounded-[2rem] border-l-4 ${cert.border} relative overflow-hidden group`}
          >
            {/* Background Icon */}
            <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Award size={150} />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-2xl bg-white/5 ${cert.color}`}>
                    <ShieldCheck size={32} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{cert.title}</h3>
                  <p className="text-white/60 font-bold text-sm">{cert.issuer}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-black text-xs uppercase tracking-widest border border-white/10 bg-white/5 hover:bg-white/10 transition-all`}
              >
                Verify Credentials <ExternalLink size={14} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
      >
        <div className="flex items-center gap-2 font-black uppercase tracking-widest text-xs">
          <Star size={16} /> Certified Professional
        </div>
        <div className="flex items-center gap-2 font-black uppercase tracking-widest text-xs">
          <CheckCircle size={16} /> Identity Verified
        </div>
        <div className="flex items-center gap-2 font-black uppercase tracking-widest text-xs">
          <Award size={16} /> Top Talent
        </div>
      </motion.div>
    </div>
  )
}
