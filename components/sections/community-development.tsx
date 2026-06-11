"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CommunityDevelopment() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Advanced Parallax
    gsap.to(imageRef.current, {
      yPercent: 15,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text Reveal
    textRefs.current.forEach((text, i) => {
      if (!text) return;
      gsap.fromTo(
        text,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-[#fafafa] relative z-10 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 border-t border-black/10 pt-16">
        
        {/* Left Typography Column */}
        <div className="md:w-5/12 pr-12 pb-12 flex flex-col justify-between">
          <div>
            <div ref={(el) => { if (el) textRefs.current[0] = el; }}>
              <span className="text-[var(--primary)] font-mono text-xs tracking-widest uppercase mb-8 block">Community // Education</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-8">
              <div ref={(el) => { if (el) textRefs.current[1] = el; }}>Building for</div>
              <div ref={(el) => { if (el) textRefs.current[2] = el; }} className="text-gray-400">Future</div>
              <div ref={(el) => { if (el) textRefs.current[3] = el; }}>Generations.</div>
            </h2>
            
            <p ref={(el) => { if (el) textRefs.current[4] = el; }} className="text-lg text-gray-500 leading-relaxed max-w-sm">
              From state-of-the-art school physical education setups to engaging community park playgrounds, we create spaces that foster growth, health, and joy.
            </p>
          </div>

          <div ref={(el) => { if (el) textRefs.current[5] = el; }} className="hidden md:flex gap-4 mt-16 pt-8 border-t border-black/10">
            <div className="w-1/2">
              <div className="text-2xl font-light text-[#1a1a1a]">01</div>
              <div className="text-xs font-mono text-gray-400 uppercase mt-1">Inclusive Design</div>
            </div>
            <div className="w-1/2">
              <div className="text-2xl font-light text-[#1a1a1a]">02</div>
              <div className="text-xs font-mono text-gray-400 uppercase mt-1">Safety First</div>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="md:w-7/12 relative min-h-[60vh] md:min-h-0 w-full overflow-hidden">
          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-black/20 z-20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-black/20 z-20" />

          <div 
            ref={imageRef}
            className="absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2000&auto=format&fit=crop)' }}
          />
        </div>

      </div>
    </section>
  );
}
