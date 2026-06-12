import React from "react";
import { Badge } from "./Badge";

interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  eyebrowIcon?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  eyebrow,
  eyebrowIcon,
  subtitle,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-sp-xs ${
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Badge icon={eyebrowIcon} variant="active" className="mb-2">
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body-md text-body-md text-secondary mt-1 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
