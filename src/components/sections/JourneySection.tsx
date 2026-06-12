import React from "react";
import { journeySteps } from "../../data/journey";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-sp-xl md:py-32 bg-surface-container-low/30 scroll-mt-20">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <SectionTitle
          eyebrow="Bagaimana Kita Tumbuh"
          eyebrowIcon="insights"
          title="Alur Tumbuh Bersama KreaNation"
          subtitle="Proses sederhana dan terarah untuk menemani perjalanan kita mengubah gagasan kreatif menjadi karya digital yang membawa dampak."
          align="center"
          className="mb-sp-xl"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-md relative">
          {/* Connecting dashed line for desktop */}
          <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-outline-variant/30 -z-10"></div>

          {journeySteps.map((step) => (
            <Card
              key={step.number}
              padding="lg"
              className="flex flex-col gap-sp-sm bg-surface-container-lowest border border-outline-variant/20 h-full relative group overflow-hidden"
            >
              {/* Subtle background glow that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
              
              {/* A tiny top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>

              {/* Top Row: Number & Icon */}
              <div className="flex justify-between items-center w-full h-12 relative z-10">
                <span className="font-display text-[48px] leading-none font-bold text-primary/10 tracking-tight select-none translate-y-[2px]">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">
                    {step.icon}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-sp-xs relative z-10">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
