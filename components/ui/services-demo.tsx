"use client";

// components/ui/services-demo.tsx

import {
  ServiceCarousel,
  type Service,
} from "@/components/ui/services-card";
import { Activity, TreePine, ShieldCheck, Package } from "lucide-react";

// Define the data for the services customized for Rovix Global
const services: Service[] = [
  {
    number: "001",
    title: "Sports Infrastructure",
    description:
      "Design, supply, installation, and support of padel courts, athletic tracks, stadium equipment, and sports safety systems.",
    icon: Activity,
    gradient: "from-[#1e3d73]/10 to-[#1e3d73]/20 dark:from-[#1e3d73]/30 dark:to-[#0f2244]/50",
  },
  {
    number: "002",
    title: "Recreation & Parks",
    description:
      "Developing public parks, playground systems, outdoor fitness zones, cycle tracks, and recreational shade structures.",
    icon: TreePine,
    gradient: "from-[#4fc0b7]/10 to-[#4fc0b7]/20 dark:from-[#4fc0b7]/20 dark:to-[#4fc0b7]/10",
  },
  {
    number: "003",
    title: "Health & Safety (PPE)",
    description:
      "Industrial safety footwear, helmets, clothing, fall protection systems, and healthcare/hygiene products.",
    icon: ShieldCheck,
    gradient: "from-[#1e3d73]/15 to-[#4fc0b7]/15 dark:from-[#1e3d73]/25 dark:to-[#4fc0b7]/25",
  },
  {
    number: "004",
    title: "Trading & Supply",
    description:
      "Office supplies, cleaning products, utility materials, and diverse project consumables and general supply requirements.",
    icon: Package,
    gradient: "from-zinc-100 to-zinc-200 dark:from-zinc-800/50 dark:to-zinc-700/50",
  },
];

export default function AnimatedServiceCardDemo() {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center py-20 px-8">
      <div className="text-left w-full max-w-6xl mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4fc0b7]">
          What We Deliver
        </span>
        <h2 className="text-5xl font-black tracking-tight text-[#1e3d73] dark:text-white mt-2">
          Core Services.
        </h2>
      </div>
      <ServiceCarousel services={services} />
    </div>
  );
}
