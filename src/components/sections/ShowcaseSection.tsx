import React from "react";
import Image from "next/image";
import { showcaseItems } from "../../data/showcase";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";

export const ShowcaseSection: React.FC = () => {
  return (
    <section id="showcase" className="py-sp-xl md:py-32 scroll-mt-20">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <SectionTitle
          eyebrow="Galeri Inovasi"
          eyebrowIcon="gallery_thumbnail"
          title="Karya Nyata dari Kreator KreaNation"
          subtitle="Lihat bagaimana ide-ide kecil berubah menjadi produk digital yang memecahkan masalah nyata masyarakat."
          align="center"
          className="mb-sp-xl"
        />

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-md">
          {showcaseItems.map((item) => (
            <Card
              key={item.id}
              padding="none"
              className="flex flex-col bg-surface-container-lowest border border-outline-variant/20 h-full group"
            >
              {/* Product Screenshot / Graphic */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-low border-b border-outline-variant/10">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-sp-sm left-sp-sm z-10">
                  <Badge variant="active" className="bg-surface-container-lowest/95 backdrop-blur-sm shadow-sm border border-primary/20 font-bold">
                    {item.category}
                  </Badge>
                </div>
              </div>

              {/* Text Body */}
              <div className="flex flex-col flex-1 p-sp-md gap-sp-sm justify-between">
                <div className="flex flex-col gap-sp-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Impact Highlight (UX Psychology Social Proof) */}
                <div className="mt-sp-sm pt-sp-sm border-t border-outline-variant/10 flex items-center gap-2 text-primary font-semibold font-body-md">
                  <span className="material-symbols-outlined text-[18px]">
                    volunteer_activism
                  </span>
                  <span className="text-on-surface-variant font-label-md">
                    Dampak: <span className="text-primary font-bold">{item.impact}</span>
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
