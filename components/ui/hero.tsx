"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

export default function Hero() {
  const [frame, setFrame] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Preload images
    for (let i = 1; i <= 180; i++) {
      const img = new Image();
      img.src = `/scroll/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
    }
  }, []);

  useLenis(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const scrollStart = rect.top;
    const scrollDist = rect.height - window.innerHeight;

    let progress = 0;
    if (scrollDist > 0) {
      progress = -scrollStart / scrollDist;
    }
    progress = Math.max(0, Math.min(1, progress));
    
    const nextFrame = Math.min(180, Math.max(1, Math.floor(progress * 179) + 1));
    setFrame(nextFrame);
  });

  return (
    <section ref={sectionRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black">
        
        {/* Grid Lines Overlay */}
        <div className="absolute inset-0 z-10 size-full pointer-events-none">
          <div className="grid w-full grid-cols-12 divide-x divide-white/20">
            <div className="col-span-1 h-screen" />
            <div className="col-span-3 h-screen" />
            <div className="col-span-4 h-screen" />
            <div className="col-span-3 h-screen" />
            <div className="col-span-1 h-screen" />
          </div>
        </div>

        {/* 3D Sequence Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`/scroll/ezgif-frame-${frame.toString().padStart(3, '0')}.jpg`} 
            alt="Hero 3D Background" 
            className="absolute inset-0 size-full object-cover will-change-[content]" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl px-6 text-center text-white">
          <h1 className="text-center font-kanturmuy font-normal text-5xl text-white tracking-tight md:text-6xl lg:text-8xl">
            Sustainable Solutions for a Better Future
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-center font-light text-lg text-white/90 md:text-xl">
            Empowering businesses and communities to thrive in a low-carbon world
            through tailored clean energy solutions.
          </p>

          <Button className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent">
            <span className="rounded-full bg-primary px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-secondary group-hover:text-white group-hover:transition-colors">
              Start a Project
            </span>
            <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-primary p-5 text-black duration-500 ease-in-out group-hover:bg-secondary group-hover:text-white group-hover:transition-colors">
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
