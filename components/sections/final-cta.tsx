"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.fromTo(
      textRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section ref={containerRef} className="py-48 bg-slate-100 relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[80vh] border-t border-slate-200">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-slate-300" />

      <div ref={textRef} className="max-w-5xl mx-auto relative z-10 space-y-12">
        <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
          Ready to <br />
          <span className="text-primary block mt-2">Build.</span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
          Partner with us to engineer the next generation of sports, safety, and community infrastructure.
        </p>

        <div className="pt-16 flex justify-center">
          <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative inline-flex items-center justify-center gap-4 w-48 h-48 rounded-full bg-slate-900 text-white text-lg font-medium transition-transform duration-300 ease-out hover:bg-primary shadow-xl hover:shadow-2xl cursor-pointer"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          >
            <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-1">Start Project</span>
            <ArrowUpRight className="w-6 h-6 absolute right-12 top-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" />
          </button>
        </div>
      </div>

    </section>
  );
}
