"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export const AboutSection: React.FC = () => {
  const missions = [
    {
      icon: "school",
      title: "Membuka Akses Skill Digital",
      description: "Membantu setiap pemuda mempelajari desain, strategi media sosial, dan teknologi dari dasar secara menyenangkan dan ramah pemula.",
    },
    {
      icon: "groups_3",
      title: "Mendorong Kolaborasi Kreatif",
      description: "Mempertemukan para kreator muda dari berbagai latar belakang untuk membangun portofolio bersama dan belajar memecahkan masalah dalam tim.",
    },
    {
      icon: "local_fire_department",
      title: "Menghasilkan Dampak Nyata",
      description: "Membimbing pembuatan karya digital yang langsung berkontribusi memajukan produk lokal, UMKM, dan inisiatif sosial di sekitar kita.",
    },
  ];

  return (
    <section id="about" className="py-sp-xl md:py-32 bg-surface scroll-mt-20 overflow-hidden relative">
      {/* Decorative ambient background glows to elevate aesthetics */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>

      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: About Copywriting */}
          <div className="flex flex-col gap-sp-md items-start text-left">
            <Badge icon="explore" variant="active">
              Tentang & Misi Kita
            </Badge>

            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface tracking-tight leading-tight font-extrabold">
              Menyatukan <span className="text-primary">Kreativitas</span> dan <span className="text-primary">Teknologi</span> untuk Pemuda Indonesia
            </h2>

            <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-xl">
              KreaNation lahir sebagai inisiatif tulus dari <strong>Mahreen Indonesia</strong> untuk mengajak generasi muda Indonesia bergerak aktif, berkarya melalui perpaduan kreativitas dan teknologi, serta bersama-sama melahirkan solusi nyata yang bermanfaat bagi kemajuan bangsa.
            </p>

            <div className="p-sp-md border-l-4 border-primary/40 bg-primary-container/5 rounded-r-2xl max-w-xl">
              <p className="font-body-md text-body-md text-secondary italic leading-relaxed">
                &ldquo;Kami percaya bahwa kreativitas tanpa batas yang dipadukan dengan pemanfaatan teknologi secara tepat adalah kunci bagi anak muda untuk membawa perubahan positif.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Mission Grid/List */}
          <div className="flex flex-col gap-sp-sm w-full">
            {missions.map((mission, idx) => (
              <Card
                key={idx}
                padding="md"
                className="flex gap-sp-md items-start bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/20 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Hover ambient highlight */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                
                {/* Hover left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-0"></div>

                {/* Mission Icon Bubble */}
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 relative z-10">
                  <span className="material-symbols-outlined text-[24px]">
                    {mission.icon}
                  </span>
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-1 relative z-10">
                  <h3 className="font-headline-md text-[18px] leading-snug text-on-surface group-hover:text-primary transition-colors duration-200 font-bold">
                    {mission.title}
                  </h3>
                  <p className="font-body-md text-[14px] text-secondary leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
