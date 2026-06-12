import React from "react";
import { Button } from "../ui/Button";

export const CTASection: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-gutter my-sp-xl md:my-32">
      <div className="bg-primary-container text-on-primary-container rounded-3xl p-sp-lg md:p-sp-xl text-center relative overflow-hidden shadow-level-2 border border-primary/20">
        {/* Decorative ambient background blur vectors */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-surface-container-lowest opacity-[0.08] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-ambient-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface-container-lowest opacity-[0.08] rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 animate-ambient-pulse-delayed"></div>
        
        {/* Foreground Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-sp-md">
          <span className="font-label-md text-label-md bg-white/10 text-white/90 px-4 py-1.5 rounded-full select-none">
            Gabung Gerakan Bersama
          </span>
          
          <h2 className="font-display-text text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-white font-extrabold tracking-tight">
            Siap Mengubah Gagasanmu Menjadi Dampak Nyata?
          </h2>
          
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl leading-relaxed">
            Tidak perlu menunggu ahli atau memiliki ide yang rumit. Mari bergabung dengan ribuan kreator muda lainnya, belajar bersama dari dasar, dan mulai membangun karya pertamamu hari ini.
          </p>
          
          <div className="mt-sp-sm">
            <Button
              variant="glass"
              size="lg"
              className="font-bold"
            >
              Mulai Langkah Pertamamu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
