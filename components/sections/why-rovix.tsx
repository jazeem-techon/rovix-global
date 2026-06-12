"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";

const stats = [
  { value: "15", suffix: "+", label: "Years Experience" },
  { value: "500", suffix: "+", label: "Projects Completed" },
  { value: "100", suffix: "%", label: "Client Satisfaction" },
];

export function WhyRovix() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLenis(() => {
    if (!sectionRef.current) return;
    
    const windowHeight = window.innerHeight;
    const sectionRect = sectionRef.current.getBoundingClientRect();

    // Progress line logic (start center to end center)
    if (lineRef.current) {
      const start = sectionRect.top - windowHeight / 2;
      const end = sectionRect.bottom - windowHeight / 2;
      const dist = end - start;
      let progress = 0;
      if (dist > 0) {
        progress = -start / dist;
      }
      progress = Math.max(0, Math.min(1, progress));
      lineRef.current.style.transform = `scaleY(${progress})`;
    }

    // Stats reveal logic (top 85%)
    statsRefs.current.forEach((stat) => {
      if (!stat) return;
      const statRect = stat.getBoundingClientRect();
      if (statRect.top < windowHeight * 0.85) {
        stat.style.transform = `translateY(0px)`;
        stat.style.opacity = `1`;
      }
    });
  });

  return (
    <section ref={sectionRef} className="py-32 bg-slate-950 relative z-10 px-6 text-white overflow-hidden">
      
      {/* Central Progress Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 md:-translate-x-1/2 hidden md:block">
        <div 
          ref={lineRef}
          className="w-full h-full bg-primary origin-top will-change-transform" 
          style={{ transform: "scaleY(0)" }} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-24 text-center">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">End-to-End Execution</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            We don't just supply. <br/>
            <span className="text-slate-400 font-medium">We build, install, and maintain.</span>
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
                  ref={(el) => { statsRefs.current[index] = el; }}
                  className="text-[20vw] md:text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                  style={{ transform: "translateY(100px)", opacity: 0 }}
                >
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 px-4 md:px-0">
                <div className={`h-[1px] w-12 bg-primary mb-6 ${index % 2 !== 0 ? 'ml-auto' : ''}`} />
                <h3 className="text-2xl md:text-3xl font-medium text-slate-300 uppercase tracking-widest">{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
