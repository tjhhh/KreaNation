import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export const HeroSection: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-sp-xl md:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-sp-xl items-center">
        {/* Left Column: Copywriting & CTAs */}
        <div className="flex flex-col gap-sp-md text-left z-10">
          <Badge icon="lightbulb" variant="active" className="animate-fade-slide-up" style={{ animationDelay: "100ms" }}>
            Inisiatif Mahreen Indonesia
          </Badge>
          
          <h1 className="font-display-text text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] lg:text-[64px] lg:leading-[72px] text-on-surface tracking-tight font-extrabold animate-fade-slide-up" style={{ animationDelay: "250ms" }}>
            Dampak Besar Dimulai dari <span className="text-primary">Ide Kecilmu</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl leading-relaxed animate-fade-slide-up" style={{ animationDelay: "400ms" }}>
            KreaNation adalah komunitas kolaboratif tempat pemuda Indonesia belajar keahlian digital, berkolaborasi dengan sesama kreator, dan bersama-sama membangun karya digital nyata yang membawa dampak positif bagi masyarakat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-sp-sm mt-sp-sm animate-fade-slide-up" style={{ animationDelay: "550ms" }}>
            <a href="#journey">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                Mulai Berkarya
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
            </a>
            <a href="#showcase">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Lihat Galeri Karya
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Mockup */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-level-2 border border-outline-variant/20 hover:scale-[1.01] transition-transform duration-500 animate-fade-slide-up" style={{ animationDelay: "700ms" }}>
          <Image
            src="/images/hero_illustration.png"
            alt="Kolaborasi Pemuda KreaNation"
            fill
            priority
            sizes="(max-w-768px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Ambient light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent mix-blend-overlay pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
