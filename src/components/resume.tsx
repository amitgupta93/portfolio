"use client"

import { motion } from "framer-motion"
import { Download, FileText, Eye } from "lucide-react"

export function Resume() {
  return (
    <div className="w-full py-20 space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          MY <br />
          <span className="text-neon-pink">RESUME</span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-neon-pink to-transparent w-32 mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass border border-white/10 rounded-[2.5rem] p-6 overflow-hidden">
            <div className="aspect-[8.5/11] bg-gradient-to-br from-white/5 to-white/10 rounded-[1.5rem] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,0,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan" />
              {/* Try to display resume image, fallback to placeholder */}
              <img 
                src="/resume.jpg" 
                alt="Resume"
                className="w-full h-full object-contain rounded-[1rem] p-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'text-center space-y-4 z-10';
                    placeholder.innerHTML = `
                      <svg class="mx-auto text-neon-blue opacity-50" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                      <p class="text-white/40 font-bold">Resume Preview</p>
                      <p class="text-white/20 text-sm">Add resume.jpg in public folder</p>
                    `;
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="glass border border-white/10 rounded-[2.5rem] p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Download Options
              </h3>
              <p className="text-white/60">Download or view my resume in your preferred format</p>
            </div>

            <div className="space-y-4">
              {/* View Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-6 glass border border-neon-blue/30 rounded-2xl flex items-center justify-between group hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <Eye size={32} />
                  </div>
                  <div className="text-left">
                    <p className="font-black uppercase tracking-wider">View Resume</p>
                    <p className="text-xs text-white/40">Open in browser</p>
                  </div>
                </div>
                <Eye size={20} className="text-white/20 group-hover:text-neon-blue transition-colors" />
              </motion.a>

              {/* Download PDF Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-6 bg-gradient-to-r from-neon-blue to-neon-pink text-black rounded-2xl flex items-center justify-between group hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <Download size={32} />
                  </div>
                  <div className="text-left">
                    <p className="font-black uppercase tracking-wider">Download PDF</p>
                    <p className="text-xs text-black/60">Get the full resume</p>
                  </div>
                </div>
                <Download size={20} className="text-black/40 group-hover:text-black transition-colors" />
              </motion.a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/30">
                Note: Place your resume file as "resume.pdf" and "resume.jpg" in the public folder to use this section.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
