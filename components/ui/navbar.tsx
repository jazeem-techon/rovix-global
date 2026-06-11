"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-2 bg-white/75 backdrop-blur-lg border-b border-gray-200/50 shadow-sm",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Logo" width={100} height={100} className="drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {["Solutions", "Sectors", "About", "Trading", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-[var(--primary)] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button
              className="bg-[var(--primary)] text-white hover:bg-[#1a1a1a] transition-all rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 hover:text-[var(--primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 w-full bg-white/95 backdrop-blur-xl md:hidden transition-transform duration-300 ease-in-out border-t border-gray-200/50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 p-8 h-full">
          {["Solutions", "Sectors", "About", "Trading", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-gray-800 hover:text-[var(--primary)] transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="mt-8 border-t border-gray-200/50 pt-8">
            <Button
              className="w-full justify-center bg-[var(--primary)] text-white hover:bg-[#1a1a1a] transition-colors py-6 rounded-full font-medium text-lg shadow-md"
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
