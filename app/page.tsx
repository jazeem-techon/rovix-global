import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import AnimatedServiceCardDemo from "@/components/ui/services-demo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#1e3d73] font-sans">
      <Navbar />
      <Hero />
      <AnimatedServiceCardDemo />
    </div>
  );
}
