"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Intro } from "@/components/intro"
import { Portfolio } from "@/components/portfolio"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => {
      // Allow extra time for initial assets if needed
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Intro key="intro" onComplete={() => setLoading(false)} />
        ) : (
          <Portfolio key="portfolio" />
        )}
      </AnimatePresence>
    </main>
  )
}
