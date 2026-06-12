import React from "react";
import Link from "next/link";
import { navItems, footerLinks } from "../../data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-sp-xl transition-all duration-300">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-lg items-start mb-sp-lg">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-sp-sm">
            <span className="font-headline-md text-headline-md font-extrabold text-primary">
              KreaNation
            </span>
            <p className="font-body-md text-body-md text-secondary max-w-sm">
              Gerakan kolaboratif pemuda Indonesia untuk mengeksplorasi ide, belajar keahlian digital masa depan, dan menciptakan karya nyata yang berdampak bagi sekitar.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-sp-sm md:items-center">
            <div className="flex flex-col gap-sp-xs">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                Eksplorasi
              </span>
              <nav className="flex flex-col gap-sp-xs">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-body-md text-body-md text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Legal / Social */}
          <div className="flex flex-col gap-sp-sm md:items-end">
            <div className="flex flex-col gap-sp-xs md:items-end">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                Hubungan
              </span>
              <nav className="flex flex-col gap-sp-xs md:items-end">
                {footerLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-body-md text-body-md text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-outline-variant/10 my-sp-md"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-sp-xs">
          <p className="font-label-sm text-label-sm text-secondary text-center sm:text-left">
            &copy; {new Date().getFullYear()} KreaNation. Didukung oleh Mahreen Indonesia.
          </p>
          <p className="font-label-sm text-label-sm text-secondary/60 text-center sm:text-right">
            Inisiatif resmi dari Mahreen Indonesia untuk mendukung kreativitas pemuda.
          </p>
        </div>
      </div>
    </footer>
  );
};
