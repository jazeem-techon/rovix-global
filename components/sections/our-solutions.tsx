"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion"
import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate"

const solutions = [
  {
    title: "PROFESSIONAL HEALTH & SAFETY EQUIPMENT",
    description: "World-class pitches, courts, and athletic tracks built to international standards.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "OUTDOOR PARK INFRASTRUCTURE & RECREATION SOLUTIONS",
    description: "Premium park infrastructure and community spaces designed for longevity.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "SPORTS TOOLS EQUIPMENT & ACCESSORIES",
    description: "Industrial safety products, PPE, and professional health equipment.",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "SCHOOL PHYSICAL EDUCATION SOLUTIONS",
    description: "Safe, innovative, and developmental play areas for all ages.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "GENERAL TRADING",
    description: "Comprehensive physical education equipment for educational institutions.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2000&auto=format&fit=crop",
  },
]

export function OurSolutions() {
  const containerRef = useRef<HTMLElement>(null)
  const textRotateRef = useRef<TextRotateRef>(null)

  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalItems = solutions.length
    const progressPerItem = 1 / totalItems

    let newIndex = Math.floor(latest / progressPerItem)
    newIndex = Math.max(0, Math.min(totalItems - 1, newIndex))

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  })

  useEffect(() => {
    if (textRotateRef.current) textRotateRef.current.jumpTo(activeIndex)
  }, [activeIndex])

  return (
    // Tall section to allow scrolling through all items
    <section ref={containerRef} className="bg-slate-50 relative z-10 w-full h-[400vh]">

      {/* Sticky container locks to viewport */}
      <div className="sticky top-0 h-screen w-full flex max-w-[1400px] mx-auto overflow-hidden">

        {/* LEFT SIDE: Pinned Image Centered */}
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center absolute inset-0 lg:relative z-10 pointer-events-none">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl relative pointer-events-auto bg-slate-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={solutions[activeIndex].image}
                alt={`Solution ${activeIndex + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE: Pinned Rotating Text */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-end pr-6 lg:pr-12 absolute inset-0 lg:relative z-20 pointer-events-none">
          <div className="w-full lg:w-full pl-6 lg:pl-12 flex flex-col justify-center pointer-events-auto">
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-6">Core Expertise</span>
            <TextRotate
              ref={textRotateRef}
              texts={solutions.map((s) => s.title)}
              mainClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 w-full flex justify-start pt-2 leading-[1.1]"
              splitLevelClassName="overflow-hidden pb-2"
              staggerFrom={"first"}
              animatePresenceMode="wait"
              loop={false}
              auto={false}
              staggerDuration={0.005}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0 }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
