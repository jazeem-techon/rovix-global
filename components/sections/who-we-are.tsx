"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhoWeAre() {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<HTMLElement[]>([]);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgTextRef.current) return;

    // Background text slow parallax
    gsap.to(bgTextRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text masking reveal
    textRefs.current.forEach((text, i) => {
      if (!text) return;
      gsap.fromTo(
        text,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[80vh] bg-white flex flex-col justify-end overflow-hidden pb-32 pt-32">
      
      {/* Massive Background Typography */}
      <div 
        ref={bgTextRef}
        className="absolute top-0 left-[-5%] text-[20vw] font-black text-slate-50 leading-none whitespace-nowrap select-none tracking-tighter"
      >
        15+ YEARS
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        
        {/* Left Column - Structural Line & Subtitle */}
        <div className="md:col-span-4 border-t border-slate-200 pt-4 hidden md:block">
          <div className="overflow-hidden">
            <span ref={el => { if (el) textRefs.current[0] = el; }} className="block text-sm font-medium tracking-widest uppercase text-slate-400">
              Company Profile
            </span>
          </div>
        </div>

        {/* Right Column - Main Editorial Text */}
        <div className="md:col-span-8 md:col-start-5 space-y-8">
          <div className="md:hidden border-t border-slate-200 pt-4 mb-8">
            <div className="overflow-hidden">
              <span ref={el => { if (el) textRefs.current[0] = el; }} className="block text-sm font-medium tracking-widest uppercase text-primary">
                Company Profile
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-slate-900 leading-[1.1] tracking-tight drop-shadow-sm">
            <div className="overflow-hidden py-1">
              <div ref={el => { if (el) textRefs.current[1] = el; }}>Excellence in</div>
            </div>
            <div className="overflow-hidden py-1">
              <div ref={el => { if (el) textRefs.current[2] = el; }} className="text-secondary">Infrastructure &</div>
            </div>
            <div className="overflow-hidden py-1">
              <div ref={el => { if (el) textRefs.current[3] = el; }}>Safety.</div>
            </div>
          </h2>
          
          <div className="overflow-hidden mt-8 max-w-xl ml-auto">
            <p ref={el => { if (el) textRefs.current[4] = el; }} className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              We deliver world-class sports facilities, professional safety equipment, and comprehensive project solutions across the UAE and GCC.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
