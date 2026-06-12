"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "../../data/navigation";
import { Button } from "../ui/Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-bright/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <Link 
          href="/" 
          className="font-headline-md text-headline-md font-extrabold text-primary hover:opacity-90 transition-all duration-200"
        >
          KreaNation
        </Link>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-sp-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-secondary hover:text-primary transition-colors duration-200 font-label-md text-label-md"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:block">
          <Button variant="primary" size="md">
            Mulai Berkarya
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface hover:text-primary transition-colors focus:outline-none cursor-pointer"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          <span className="material-symbols-outlined text-[28px]">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer (Visual Toggle) */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-surface-bright/95 backdrop-blur-md border-t border-outline-variant/10 transition-transform duration-300 md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-sp-lg px-gutter py-sp-xl">
          <nav className="flex flex-col items-center gap-sp-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-secondary text-lg font-semibold hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full max-w-xs"
            onClick={() => setIsOpen(false)}
          >
            Mulai Berkarya
          </Button>
        </div>
      </div>
    </header>
  );
};
