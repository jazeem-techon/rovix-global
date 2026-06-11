"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current || !progressRef.current) return;

    const container = containerRef.current;
    const wrapper = scrollWrapperRef.current;
    const progress = progressRef.current;

    const getScrollAmount = () => {
      let wrapperWidth = wrapper.scrollWidth;
      return -(wrapperWidth - window.innerWidth);
    };

    const tween = gsap.to(wrapper, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        onUpdate: (self) => {
          gsap.to(progress, {
            scaleX: self.progress,
            duration: 0.1,
            ease: "none",
          });
        }
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#111111] text-white overflow-hidden flex flex-col justify-center min-h-screen relative">

      {/* Header Area */}
      <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 flex justify-between items-end border-b border-white/10">
        <div>
          <span className="text-[var(--primary)] text-sm font-mono tracking-widest uppercase mb-4 block">03 // Showcase</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
            Featured <br /> <span className="text-gray-500">Projects.</span>
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-gray-400 max-w-xs text-sm">A selection of our finest engineering and infrastructure accomplishments across the GCC.</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-[calc(100%-1px)] md:top-[160px] left-0 w-full h-[1px] bg-white/10 z-20 hidden md:block">
        <div ref={progressRef} className="h-full bg-[var(--primary)] origin-left scale-x-0" />
      </div>

      <div ref={scrollWrapperRef} className="flex px-8 md:px-12 pt-32 pb-16 items-center w-max">
        {projects.map((project, index) => (
          <div key={index} className="project-card w-[85vw] md:w-[60vw] max-w-[900px] h-[65vh] relative group overflow-hidden flex-shrink-0 border-r border-white/10 pr-8 md:pr-16 mr-8 md:mr-16 last:border-r-0 last:pr-0 last:mr-0">

            <div className="w-full h-full relative overflow-hidden bg-[#1a1a1a]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-sm">
                {project.year}
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="overflow-hidden mb-2">
                  <span className="text-[var(--primary)] font-mono tracking-widest uppercase text-xs block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                </div>
                <div className="overflow-hidden mb-4">
                  <h3 className="text-3xl md:text-5xl font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-tight">{project.title}</h3>
                </div>
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-lg max-w-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
