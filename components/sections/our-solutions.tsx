"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, ShieldCheck, TreePine, Dumbbell, GraduationCap, Wrench, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Sports Infrastructure",
    description: "World-class pitches, courts, and athletic tracks built to international standards.",
    icon: Activity,
    year: "01",
  },
  {
    title: "Outdoor Recreation",
    description: "Premium park infrastructure and community spaces designed for longevity.",
    icon: TreePine,
    year: "02",
  },
  {
    title: "Safety Solutions",
    description: "Industrial safety products, PPE, and professional health equipment.",
    icon: ShieldCheck,
    year: "03",
  },
  {
    title: "Playground Equipment",
    description: "Safe, innovative, and developmental play areas for all ages.",
    icon: Wrench,
    year: "04",
  },
  {
    title: "School PE Solutions",
    description: "Comprehensive physical education equipment for educational institutions.",
    icon: GraduationCap,
    year: "05",
  },
  {
    title: "Fitness & Training",
    description: "High-end gym and performance training equipment.",
    icon: Dumbbell,
    year: "06",
  },
];

export function OurSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafafa] relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Header */}
        <div ref={titleRef} className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] tracking-tight">
            Our <span className="text-[var(--primary)]">Capabilities.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Bespoke solutions engineered to elevate infrastructure, safety, and performance across the region.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="group relative bg-white border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Giant Background Icon */}
              <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110 pointer-events-none">
                <solution.icon className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-[#fafafa] border border-black/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-500">
                    <solution.icon className="w-6 h-6 text-gray-600 group-hover:text-[var(--primary)] transition-colors duration-500" />
                  </div>
                  <div className="text-sm font-mono text-gray-300 group-hover:text-[var(--primary)]/60 transition-colors duration-500">
                    {solution.year}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[var(--primary)] transition-colors duration-500">
                  {solution.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8 min-h-[4rem]">
                  {solution.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-[var(--primary)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Explore Solution <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
