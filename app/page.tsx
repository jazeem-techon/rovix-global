"use client";

import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { OurSolutions } from "@/components/sections/our-solutions";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { SafetySolutions } from "@/components/sections/safety-solutions";
import { CommunityDevelopment } from "@/components/sections/community-development";
import { WhyRovix } from "@/components/sections/why-rovix";
import { FinalCTA } from "@/components/sections/final-cta";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />
      <>
        <Hero />
        <OurSolutions />
        <WhoWeAre />
        <ProjectShowcase />
        <SafetySolutions />
        <CommunityDevelopment />
        <WhyRovix />
        <FinalCTA />
        <Footer />
      </>
    </div>
  );
}
