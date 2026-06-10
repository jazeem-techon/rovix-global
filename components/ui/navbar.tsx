"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function RovixLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Real logo representation in SVG */}
      <svg
        viewBox="0 0 100 80"
        className="h-10 w-auto text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Teal Arch */}
        <path
          d="M 25 35 C 35 15, 85 15, 85 45 C 85 68, 65 70, 58 70"
          stroke="#4fc0b7"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Bottom Blue/White Arch */}
        <path
          d="M 68 55 C 58 75, 10 75, 10 45 C 10 32, 22 28, 32 28"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Center Text "R" Icon */}
        <text
          x="48"
          y="52"
          textAnchor="middle"
          fill="currentColor"
          className="font-sans font-black tracking-tight"
          style={{ fontSize: "28px", fontWeight: 900 }}
        >
          R
        </text>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-wider text-white flex items-center leading-none">
          ROVIX<span className="text-[#4fc0b7] ml-0.5">GLOBAL</span>
        </span>
        <span className="text-[7px] font-bold tracking-tight text-white/70 leading-none mt-1 uppercase">
          Equipments & Trading L.L.C - S.P.C
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#1e3d73]/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <RovixLogo />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#solutions"
              className="text-sm font-medium text-white/80 hover:text-[#4fc0b7] transition-colors"
            >
              Solutions
            </a>
            <a
              href="#sectors"
              className="text-sm font-medium text-white/80 hover:text-[#4fc0b7] transition-colors"
            >
              Sectors
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-white/80 hover:text-[#4fc0b7] transition-colors"
            >
              About
            </a>
            <a
              href="#trading"
              className="text-sm font-medium text-white/80 hover:text-[#4fc0b7] transition-colors"
            >
              Trading
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/80 hover:text-[#4fc0b7] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-[#1e3d73] hover:border-white transition-all rounded-full px-5 py-2 font-normal"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#4fc0b7] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 w-full bg-[#1e3d73]/95 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 p-8 h-full">
          <a
            href="#solutions"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-white hover:text-[#4fc0b7] transition-colors"
          >
            Solutions
          </a>
          <a
            href="#sectors"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-white hover:text-[#4fc0b7] transition-colors"
          >
            Sectors
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-white hover:text-[#4fc0b7] transition-colors"
          >
            About
          </a>
          <a
            href="#trading"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-white hover:text-[#4fc0b7] transition-colors"
          >
            Trading
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-white hover:text-[#4fc0b7] transition-colors"
          >
            Contact
          </a>
          <div className="mt-8 border-t border-white/10 pt-8">
            <Button
              className="w-full justify-center bg-[#4fc0b7] text-white hover:bg-white hover:text-[#1e3d73] transition-colors py-4 rounded-full font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
