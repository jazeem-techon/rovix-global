"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "15", suffix: "+", label: "Years Experience" },
  { value: "500", suffix: "+", label: "Projects Completed" },
  { value: "100", suffix: "%", label: "Client Satisfaction" },
];

export function WhyRovix() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Progress line animation
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }

    // Stats massive reveal
    statsRef.current.forEach((stat, i) => {
      if (!stat) return;
      gsap.fromTo(
        stat,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0a0a0a] relative z-10 px-6 text-white overflow-hidden">
      
      {/* Central Progress Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2 hidden md:block">
        <div ref={lineRef} className="w-full h-full bg-[var(--primary)] origin-top scale-y-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-24 text-center">
          <span className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 block">End-to-End Execution</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            We don't just supply. <br/>
            <span className="text-gray-600">We build, install, and maintain.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse text-right' : 'text-left'}`}
            >
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div 
                  ref={(el) => { if (el) statsRef.current[index] = el; }}
                  className="text-[20vw] md:text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
                >
                  {stat.value}<span className="text-[var(--primary)]">{stat.suffix}</span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 px-4 md:px-0">
                <div className={`h-[1px] w-12 bg-[var(--primary)] mb-6 ${index % 2 !== 0 ? 'ml-auto' : ''}`} />
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 uppercase tracking-widest">{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
