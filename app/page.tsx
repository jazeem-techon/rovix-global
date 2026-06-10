import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/demo";
import { Component as AeroHero } from "@/components/ui/aero-hero-3";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      <Hero />
      <main className="flex flex-col items-center justify-center py-16 px-6 bg-white dark:bg-black">
        <div className="w-full max-w-xl p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-md">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
            Aero Hero Interactive Component
          </h2>
          <AeroHero />
        </div>
      </main>
    </div>
  );
}
