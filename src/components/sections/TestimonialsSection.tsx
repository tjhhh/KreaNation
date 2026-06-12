import React from "react";
import { testimonials } from "../../data/testimonials";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-sp-xl md:py-32 scroll-mt-20">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <SectionTitle
          eyebrow="Cerita Sukses"
          eyebrowIcon="chat"
          title="Apa Kata Mereka?"
          subtitle="Dengarkan pengalaman nyata dari rekan-rekan kita yang telah memulai langkah mereka di KreaNation."
          align="center"
          className="mb-sp-xl"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-md">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              padding="lg"
              className="flex flex-col bg-surface-container-lowest border border-outline-variant/20 h-full justify-between"
            >
              {/* Quote text */}
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed mb-sp-md">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-sp-sm mt-auto pt-sp-sm border-t border-outline-variant/10">
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 border border-secondary-container/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    {item.avatarIcon}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    {item.name}
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    {item.role}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
