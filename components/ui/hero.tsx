"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const TOTAL_FRAMES = 240;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];

    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const canvasRatio = width / height;
    const imageRatio = img.width / img.height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (imageRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = drawHeight * imageRatio;
      offsetX = (width - drawWidth) / 2;
    } else {
      drawWidth = width;
      drawHeight = drawWidth / imageRatio;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, width, height);

    ctx.drawImage(
      img,
      offsetX,
      offsetY,
      drawWidth,
      drawHeight
    );
  };

  useEffect(() => {
    let mounted = true;

    const preloadFrames = async () => {
      const frames: HTMLImageElement[] = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();

        img.src = `/scroll/frame_${String(i).padStart(6, "0")}.jpg`;

        frames.push(img);
      }

      framesRef.current = frames;

      await Promise.all(
        frames.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            })
        )
      );

      if (!mounted) return;

      drawFrame(0);
      currentFrameRef.current = 0;
    };

    preloadFrames();

    const handleResize = () => {
      if (currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLenis(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    const rect = section.getBoundingClientRect();

    const progress = Math.max(
      0,
      Math.min(
        1,
        -rect.top /
        (section.offsetHeight - window.innerHeight)
      )
    );

    const frame = Math.round(
      progress * (TOTAL_FRAMES - 1)
    );

    if (frame === currentFrameRef.current) return;

    currentFrameRef.current = frame;

    requestAnimationFrame(() => {
      drawFrame(frame);
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] w-full"
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-black">

        {/* Canvas Sequence */}
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
          />

          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 text-left text-white">
          <div className="max-w-2xl">
            <h1 className="font-kanturmuy font-normal text-4xl tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              Building spaces where
              <br className="hidden md:block" />
              {" "}play comes naturally.
            </h1>

            <p className="mt-6 mb-8 max-w-xl text-lg font-light text-white/90 md:text-xl">
              We design, supply, and install premium playground equipment and sports infrastructure, creating safe environments for communities to thrive.
            </p>

            <Button className="group flex w-fit cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent">
              <span className="rounded-full bg-primary px-6 py-3 text-black transition-colors duration-500 group-hover:bg-secondary group-hover:text-white">
                Start a Project
              </span>

              <div className="relative flex cursor-pointer items-center overflow-hidden rounded-full bg-primary p-5 text-black transition-colors duration-500 group-hover:bg-secondary group-hover:text-white">
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 group-hover:translate-x-10" />

                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 group-hover:-translate-x-1/2" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}