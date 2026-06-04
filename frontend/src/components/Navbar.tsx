"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Beaker, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "R&D / Pipeline", href: "/pipeline" },
  { name: "Therapeutic Areas", href: "/products" },
  { name: "Partnerships", href: "/partnerships" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-carbon-950/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Beaker className="w-8 h-8 text-accent-teal group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            MAYOGEX<span className="text-accent-teal">PHARMA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent-teal",
                pathname === link.href ? "text-accent-teal" : "text-carbon-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent-teal hover:bg-accent-teal/90 text-white text-sm font-semibold rounded-full transition-all hover:scale-105"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-carbon-900 border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium",
                pathname === link.href ? "text-accent-teal" : "text-carbon-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 bg-accent-teal text-white font-semibold rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
