"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, Code, User, Globe } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // NOTE: Amit Gupta, for REAL email notifications:
    // 1. Install EmailJS: npm install @emailjs/browser
    // 2. Uncomment the code block below.
    // 3. Replace the placeholder IDs with your real ones from https://www.emailjs.com/

    /*
    const emailjs = (await import('@emailjs/browser')).default;
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // e.g. service_gmail
        'YOUR_TEMPLATE_ID', // e.g. template_abc123
        e.currentTarget,
        'YOUR_PUBLIC_KEY' // from your Account page
      );
      setIsSuccess(true);
    } catch (err) {
      console.error("Email failed:", err);
      alert("Failed to send message. Please check EmailJS setup.");
    } finally {
      setIsSubmitting(false);
    }
    return;
    */

    // Simulated behavior for now
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      console.log("Contact logic updated for Amit Gupta - ready for EmailJS integration.")
      setTimeout(() => setIsSuccess(false), 5000)
    }, 2000)
  }

  return (
    <div className="w-full py-20 flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            GET IN <br />
            <span className="text-neon-pink">TOUCH</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-neon-pink to-transparent w-32" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Name</label>
              <input 
                required 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-6 py-4 glass rounded-2xl outline-none border border-white/5 focus:border-neon-pink/50 focus:bg-white/5 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Email</label>
              <input 
                required 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-6 py-4 glass rounded-2xl outline-none border border-white/5 focus:border-neon-pink/50 focus:bg-white/5 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40">Subject</label>
            <input 
              required 
              type="text" 
              placeholder="Project Inquiry" 
              className="w-full px-6 py-4 glass rounded-2xl outline-none border border-white/5 focus:border-neon-pink/50 focus:bg-white/5 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
            <textarea 
              required 
              rows={5} 
              placeholder="Tell me about your project..." 
              className="w-full px-6 py-4 glass rounded-2xl outline-none border border-white/5 focus:border-neon-pink/50 focus:bg-white/5 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl ${
              isSuccess 
                ? "bg-neon-green text-black" 
                : "bg-neon-pink text-white hover:shadow-[0_0_40px_rgba(255,0,255,0.4)]"
            } ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isSuccess ? (
              "Message Sent!"
            ) : (
              <>Send Message <Send size={20} /></>
            )}
          </button>
        </form>
      </motion.div>

      {/* Right: Contact Info & 3D Object */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 w-full space-y-12"
      >
        <div className="relative aspect-square glass rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden group shadow-2xl border border-white/10 hover:border-neon-pink/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="space-y-8 relative z-10">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Professional <br /><span className="text-neon-pink">Contact</span></h3>
            
            <div className="flex items-center gap-6 group/item">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-neon-pink group-hover/item:bg-neon-pink group-hover/item:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Direct Email</p>
                <p className="text-lg font-bold">amitgupta.work@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group/item">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-neon-blue group-hover/item:bg-neon-blue group-hover/item:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">WhatsApp / Call</p>
                <p className="text-lg font-bold">+91 (Inquiry via Email)</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group/item">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-neon-green group-hover/item:bg-neon-green group-hover/item:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Based In</p>
                <p className="text-lg font-bold">Satna, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 relative z-10 pt-12">
            <a href="https://github.com/amitgupta-dev" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all group/icon relative">
              <Code size={20} />
              <span className="absolute -top-10 scale-0 group-hover/icon:scale-100 transition-transform bg-black/80 text-[10px] px-2 py-1 rounded border border-white/10 uppercase font-black">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/amitgupta-dev" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-neon-pink hover:text-black transition-all group/icon relative">
              <User size={20} />
              <span className="absolute -top-10 scale-0 group-hover/icon:scale-100 transition-transform bg-black/80 text-[10px] px-2 py-1 rounded border border-white/10 uppercase font-black">LinkedIn</span>
            </a>
            <a href="https://amitgupta.me" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all group/icon relative">
              <Globe size={20} />
              <span className="absolute -top-10 scale-0 group-hover/icon:scale-100 transition-transform bg-black/80 text-[10px] px-2 py-1 rounded border border-white/10 uppercase font-black">Portfolio</span>
            </a>
          </div>

          {/* Floating Blob Animation */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-neon-pink/20 rounded-full blur-[80px] group-hover:bg-neon-blue/20 transition-all duration-1000 animate-float" />
        </div>
      </motion.div>
    </div>
  )
}
