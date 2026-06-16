"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sectorsList = [
  {
    name: "Educational Institutions",
    description: "Equipping schools and universities with safe, innovative physical education and sports infrastructure.",
  },
  {
    name: "Public Parks & Recreation",
    description: "Building community spaces that foster engagement, health, and well-being through premium outdoor equipment.",
  },
  {
    name: "Industrial & Construction",
    description: "Providing world-class safety gear and PPE for high-risk environments, ensuring compliance and protection.",
  },
  {
    name: "Professional Sports Clubs",
    description: "Developing athletic tracks, courts, and pitches that meet international sporting standards.",
  },
];

export default function SectorsPage() {
  return (
    <div className="bg-white min-h-screen text-[#1e3d73] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-24"
        >
          <span className="text-[#4fc0b7] font-mono text-sm tracking-widest uppercase mb-4 block">
            Sectors We Serve
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Impact across industries.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            We partner with organizations across multiple sectors to deliver infrastructure that enhances safety, performance, and community well-being.
          </p>
        </motion.div>

        <div className="border-t border-slate-200">
          {sectorsList.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 lg:py-12 border-b border-slate-200 hover:bg-slate-50 transition-colors -mx-6 md:-mx-8 px-6 md:px-8"
            >
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight group-hover:text-[#4fc0b7] transition-colors">
                  {sector.name}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {sector.description}
                </p>
              </div>
              <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <ArrowRight className="text-[#4fc0b7] w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
