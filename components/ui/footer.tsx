"use client";

import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#fafafa] text-[#1a1a1a] pt-24 pb-8 px-6 relative overflow-hidden border-t border-black/5">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--primary)]/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20 border-b border-black/10 pb-20">

          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={120} height={120} className="transition-transform duration-300 hover:scale-105" />
            </div>
            <p className="text-gray-500 text-lg max-w-sm">
              Engineering the future of infrastructure, safety, and community development across the region.
            </p>
            <div className="flex items-center gap-4">
              {/* <SocialLink icon={Twitter} />
              <SocialLink icon={Linkedin} /> */}
              <SocialLink icon={Mail} />
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn
              title="Solutions"
              links={["Sports Infrastructure", "Outdoor Recreation", "Safety Solutions", "School PE", "Fitness Training"]}
            />
            <FooterColumn
              title="Company"
              links={["About Us", "Our Vision", "Careers", "News & Insights", "Contact"]}
            />
            <FooterColumn
              title="Sectors"
              links={["Government", "Education", "Industrial", "Commercial", "Residential"]}
            />
            <div className="space-y-6">
              <h4 className="text-sm font-mono text-[var(--primary)] uppercase tracking-widest">Connect</h4>
              <div className="space-y-4">
                <a href="mailto:hello@rovix.com" className="block text-xl font-medium hover:text-[var(--primary)] transition-colors">
                  hello@rovix.com
                </a>
                <p className="text-gray-500">
                  Dubai, UAE<br />
                  Business Bay, Tower 1
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">

          {/* Huge Watermark */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] leading-none font-bold text-black/[0.02] tracking-tighter pointer-events-none select-none w-full text-center">
            GLOBAL
          </div>

          <div className="text-gray-500 text-sm flex flex-col md:flex-row gap-6 items-center z-10">
            <span>© {new Date().getFullYear()} Rovix Global. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300 group z-10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-gray-600 group-hover:text-white group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)] transition-all">
      <Icon className="w-4 h-4" />
    </a>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-6">
      <h4 className="text-sm font-mono text-[var(--primary)] uppercase tracking-widest">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-500 hover:text-[var(--primary)] hover:translate-x-1 inline-flex items-center gap-2 group transition-all font-medium">
              {link}
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[var(--primary)]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
