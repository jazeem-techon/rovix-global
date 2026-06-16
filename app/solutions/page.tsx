"use client";

import { motion } from "framer-motion";

const solutionsList = [
  {
    title: "Professional Health & Safety Equipment",
    description: "Industrial safety products, PPE, and professional health equipment designed for maximum protection and compliance.",
  },
  {
    title: "Outdoor Park Infrastructure & Recreation",
    description: "Premium park infrastructure and community spaces designed for longevity and engagement.",
  },
  {
    title: "Sports Tools, Equipment & Accessories",
    description: "World-class pitches, courts, and athletic tracks built to international standards.",
  },
  {
    title: "School Physical Education Solutions",
    description: "Safe, innovative, and developmental play areas for all ages in educational institutions.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white min-h-screen text-[#1e3d73] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[#4fc0b7] font-mono text-sm tracking-widest uppercase mb-4 block">
            Our Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Engineered for excellence. <br className="hidden md:block" />
            Designed for the future.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            We provide comprehensive infrastructure and safety solutions that meet the highest international standards. From industrial safety to community recreation, our approach is always uncompromising on quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutionsList.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group p-8 lg:p-10 border border-slate-200 hover:border-slate-300 rounded-2xl transition-all duration-300 bg-slate-50/50 hover:bg-slate-50"
            >
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#4fc0b7] transition-colors">
                {solution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
