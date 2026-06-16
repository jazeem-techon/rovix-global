"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#1e3d73] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mb-24"
        >
          <span className="text-[#4fc0b7] font-mono text-sm tracking-widest uppercase mb-4 block">
            About Rovix
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Building the foundation for a safer, more active tomorrow.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Rovix Global is a premier provider of infrastructure, sports development, recreation, and safety solutions across the UAE and GCC. We believe in crafting spaces that inspire, protect, and endure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="prose prose-lg text-slate-600 max-w-none"
          >
            <h2 className="text-2xl font-semibold text-[#1e3d73] mb-6">Our Mission</h2>
            <p className="mb-8">
              To deliver world-class infrastructure and safety solutions that empower communities, protect lives, and elevate the standard of living across the region. We are committed to excellence, innovation, and sustainability in every project we undertake.
            </p>

            <h2 className="text-2xl font-semibold text-[#1e3d73] mb-6">Our Vision</h2>
            <p className="mb-8">
              To be the most trusted and recognized partner in infrastructure development and safety solutions in the GCC, known for our uncompromising quality and forward-thinking approach.
            </p>

            <div className="border-l-2 border-[#4fc0b7] pl-6 italic mt-12 py-2">
              "Quality is not just a standard; it's the foundation of everything we build. At Rovix, we engineer for the future."
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative h-[600px] w-full bg-slate-100 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
              alt="Corporate Building"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
