"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";

const projects = [
  {
    title: "Dubai Sports City Stadium",
    category: "Sports Infrastructure",
    description: "Full athletic track and turf installation for international events.",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2000&auto=format&fit=crop",
    year: "2024",
  },
  {
    title: "Al Barsha Community Park",
    category: "Outdoor Recreation",
    description: "Complete playground and community fitness area development.",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2000&auto=format&fit=crop",
    year: "2023",
  },
  {
    title: "Jumeirah College Facilities",
    category: "School PE Solutions",
    description: "Multipurpose courts and state-of-the-art PE equipment integration.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop",
    year: "2023",
  },
  {
    title: "Industrial Zone Safety Hub",
    category: "Safety Solutions",
    description: "Comprehensive PPE distribution and safety infrastructure setup.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000&auto=format&fit=crop",
    year: "2022",
  },
];

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLenis(() => {
    if (!sectionRef.current || !scrollWrapperRef.current || !progressRef.current) return;

    const section = sectionRef.current;
    const wrapper = scrollWrapperRef.current;
    const progress = progressRef.current;

    const rect = section.getBoundingClientRect();
    const scrollStart = rect.top;
    const scrollDist = rect.height - window.innerHeight;
    
    let progressVal = 0;
    if (scrollDist > 0) {
      progressVal = -scrollStart / scrollDist;
    }
    progressVal = Math.max(0, Math.min(1, progressVal));

    const maxScroll = wrapper.scrollWidth - window.innerWidth;

    wrapper.style.transform = `translate3d(${-maxScroll * progressVal}px, 0, 0)`;
    progress.style.transform = `scaleX(${progressVal})`;
  });

  return (
    <section ref={sectionRef} className="bg-slate-950 h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center text-white">
        
        {/* Header Area */}
        <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 flex justify-between items-end border-b border-white/10">
          <div>
            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">03 // Showcase</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
              Featured <br /> <span className="text-slate-500">Projects.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">A selection of our finest engineering and infrastructure accomplishments across the GCC.</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-[calc(100%-1px)] md:top-[160px] left-0 w-full h-[1px] bg-white/10 z-20 hidden md:block">
          <div ref={progressRef} className="h-full bg-primary origin-left scale-x-0 will-change-transform" />
        </div>

        <div ref={scrollWrapperRef} className="flex px-8 md:px-12 pt-32 pb-16 items-center w-max will-change-transform">
          {projects.map((project, index) => (
            <div key={index} className="project-card w-[85vw] md:w-[60vw] max-w-[900px] h-[65vh] relative group overflow-hidden flex-shrink-0 border-r border-white/10 pr-8 md:pr-16 mr-8 md:mr-16 last:border-r-0 last:pr-0 last:mr-0 cursor-pointer">

              <div className="w-full h-full relative overflow-hidden bg-slate-900 rounded-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                <div className="absolute top-6 right-6 px-4 py-2 bg-slate-950/60 backdrop-blur-md border border-white/10 text-white font-mono text-sm rounded">
                  {project.year}
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <div className="overflow-hidden mb-2">
                    <span className="text-primary font-mono tracking-widest uppercase text-xs block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {project.category}
                    </span>
                  </div>
                  <div className="overflow-hidden mb-4">
                    <h3 className="text-3xl md:text-5xl font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-tight text-white drop-shadow-md">{project.title}</h3>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-slate-300 text-lg max-w-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150 leading-relaxed drop-shadow-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

