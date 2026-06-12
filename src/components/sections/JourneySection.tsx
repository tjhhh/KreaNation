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
          subtitle="Proses sederhana dan terarah untuk membantumu mengubah gagasan mentah menjadi karya digital berdampak."
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
              className="flex flex-col gap-sp-sm bg-surface-container-lowest border border-outline-variant/20 h-full relative group"
            >
              {/* Top Row: Number & Icon */}
              <div className="flex justify-between items-center w-full">
                <span className="font-display text-[48px] leading-none font-black text-primary/10 tracking-tight select-none">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">
                    {step.icon}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-sp-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface">
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
