"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Preload images without blocking the main thread significantly
    // Loading in chunks or just letting the browser cache them
    const preloadImages = () => {
      for (let i = 0; i <= 239; i++) {
        const img = new Image();
        img.src = `/scroll/frame_${i.toString().padStart(6, '0')}.jpg`;
      }
    };
    
    // Defer preloading slightly to prioritize initial render
    setTimeout(preloadImages, 500);
  }, []);

  useLenis(() => {
    if (!sectionRef.current || !imgRef.current) return;
    
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const scrollStart = rect.top;
    const scrollDist = rect.height - window.innerHeight;

    let progress = 0;
    if (scrollDist > 0) {
      progress = -scrollStart / scrollDist;
    }
    progress = Math.max(0, Math.min(1, progress));

    const nextFrame = Math.min(239, Math.max(0, Math.round(progress * 239)));
    
    // Update the src directly on the DOM node to avoid React state re-renders (which cause lag)
    imgRef.current.src = `/scroll/frame_${nextFrame.toString().padStart(6, '0')}.jpg`;
  });

  return (
    <section ref={sectionRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-black">

        {/* 3D Sequence Background */}
        <div className="absolute inset-0 z-0">
          <img
            ref={imgRef}
            src="/scroll/frame_000000.jpg"
            alt="Hero 3D Background"
            className="absolute inset-0 size-full object-cover will-change-[content]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 text-left text-white">
          <div className="max-w-2xl">
            <h1 className="font-kanturmuy font-normal text-4xl text-white tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              Building spaces where <br className="hidden md:block" /> play comes naturally.
            </h1>

            <p className="mt-6 mb-8 max-w-xl font-light text-lg text-white/90 md:text-xl">
              We design, supply, and install premium playground equipment and sports infrastructure, creating safe environments for communities to thrive.
            </p>

            <Button className="group not-disabled:inset-shadow-none flex cursor-pointer items-center justify-center gap-0 w-fit rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent">
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
      </div>
    </section>
  );
}
