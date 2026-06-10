import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Grid Lines for Technical/Infrastructure Feel */}
      <div className="absolute inset-0 z-10 size-full pointer-events-none">
        <div className="grid h-full w-full grid-cols-12 divide-x divide-white/5">
          <div className="col-span-1 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-4 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-1 h-screen" />
        </div>
      </div>

      {/* Corporate/Sports Infrastructure Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-105 transform motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1920&auto=format&fit=crop)",
        }}
      >
        {/* Dark Blue Overlay matching the brand deep blue color (#1e3d73) with opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3d73]/60 via-[#1e3d73]/70 to-[#0f2244]/90" />
      </div>

      <div className="relative z-20 max-w-5xl px-6 text-center text-white">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-[#4fc0b7] bg-[#4fc0b7]/10 border border-[#4fc0b7]/30 rounded-full backdrop-blur-sm">
          Infrastructure & Project Solutions
        </span>
        
        <h1 className="text-center font-sans font-black text-4xl text-white tracking-tight md:text-6xl lg:text-7xl leading-tight">
          Your Trusted Partner for <span className="text-[#4fc0b7]">Supply & Project Solutions</span>
        </h1>

        <p className="mx-auto mt-6 mb-10 max-w-3xl text-center font-light text-base text-white/80 md:text-lg leading-relaxed">
          Delivering end-to-end design, supply, installation, and support across sports infrastructure, 
          outdoor recreation, industrial health & safety, and school education throughout the UAE & GCC.
        </p>

        {/* CTA Button using Corporate Blue and Teal colors */}
        <Button className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent">
          <span className="rounded-full bg-[#4fc0b7] px-8 py-4 text-[#1e3d73] font-bold duration-500 ease-in-out group-hover:bg-[#1e3d73] group-hover:text-[#4fc0b7] group-hover:transition-colors shadow-lg shadow-[#4fc0b7]/20">
            Start a Project
          </span>
          <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#4fc0b7] p-5 text-[#1e3d73] duration-500 ease-in-out group-hover:bg-[#1e3d73] group-hover:text-[#4fc0b7] group-hover:transition-colors shadow-lg shadow-[#4fc0b7]/20">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </Button>
      </div>
    </section>
  );
}
