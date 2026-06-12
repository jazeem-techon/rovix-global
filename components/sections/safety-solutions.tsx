"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, HardHat, Stethoscope, AlertTriangle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: HardHat,
    id: "SYS-01",
    title: "Industrial Safety",
    description: "Premium PPE, head-to-toe protection, and site safety equipment for heavy industries.",
  },
  {
    icon: Stethoscope,
    id: "SYS-02",
    title: "Health & Medical",
    description: "Professional first-aid stations, clinical supplies, and occupational health equipment.",
  },
  {
    icon: Shield,
    id: "SYS-03",
    title: "Site Security",
    description: "Access control, high-visibility gear, and perimeter safety solutions.",
  },
  {
    icon: AlertTriangle,
    id: "SYS-04",
    title: "Emergency Response",
    description: "Spill kits, fire safety equipment, and rapid-response emergency gear.",
  },
];

export function SafetySolutions() {
  const containerRef = useRef<HTMLElement>(null);
  const gridItemsRef = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        gridItemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white relative z-10 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

        {/* Left Side - Dashboard Metrics */}
        <div className="lg:w-1/2 flex flex-col bg-white">
          <div className="p-8 md:p-12 border-b border-slate-200">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Uncompromising <br /> Safety Protocols.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 flex-grow">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) gridItemsRef.current[index] = el;
                }}
                className={`p-8 border-b sm:border-b-0 sm:border-r border-slate-200 flex flex-col justify-between hover:bg-slate-50 transition-colors cursor-pointer ${index % 2 === 0 ? "sm:border-b" : "sm:border-r-0 sm:border-b"
                  } ${index >= 2 ? "sm:border-b-0" : ""}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <feature.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    <span className="font-mono text-xs text-slate-400">{feature.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image & Main Stat */}
        <div className="lg:w-1/2 relative min-h-[500px] border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden bg-slate-900">
          <div
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1630139026575-d11e637ce0fc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end border-t border-white/10 backdrop-blur-md bg-slate-950/40">
            <div>
              <div className="text-5xl md:text-7xl font-mono font-bold text-primary tracking-tighter drop-shadow-md">100%</div>
              <div className="font-mono text-xs tracking-widest text-slate-300 uppercase mt-2">Compliance Rating</div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="font-mono text-xs tracking-widest text-white uppercase">International</div>
              <div className="font-mono text-xs tracking-widest text-slate-400 uppercase mt-1">Standards Met</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
