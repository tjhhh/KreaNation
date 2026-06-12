"use client";

import React, { useState, useEffect } from "react";
import { statistics } from "../../data/statistics";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

// Helper component for count-up animation
const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds animation duration
    const framesPerSecond = 60;
    const totalFrames = (duration / 1000) * framesPerSecond;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="font-display text-[40px] md:text-[48px] leading-tight font-black text-on-surface tracking-tight flex items-center justify-center select-none">
      <span>{count.toLocaleString("id-ID")}</span>
      <span className="text-primary font-extrabold">{suffix}</span>
    </div>
  );
};

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-sp-xl md:py-32 bg-surface-container-low/30 scroll-mt-20">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <SectionTitle
          eyebrow="Dampak Nyata"
          eyebrowIcon="analytics"
          title="Tumbuh Besarnya Komunitas Kita"
          subtitle="Setiap hari, ada lebih banyak pemuda Indonesia yang mulai mengambil langkah pertama mereka di KreaNation."
          align="center"
          className="mb-sp-xl"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-sp-md">
          {statistics.map((stat) => (
            <Card
              key={stat.id}
              padding="lg"
              className="flex flex-col items-center justify-center text-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon Bubble */}
              <div className="w-14 h-14 rounded-full bg-primary-container/10 border border-primary/10 flex items-center justify-center text-primary mb-sp-md">
                <span className="material-symbols-outlined text-[28px]">
                  {stat.icon}
                </span>
              </div>

              {/* Number Value */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <p className="font-label-md text-label-md text-secondary leading-normal mt-2">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
