import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: string;
  variant?: "active" | "neutral";
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = "active",
  className = "",
  style,
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-label-sm text-label-sm w-max transition-colors duration-200";

  const variants = {
    active: "bg-primary-container/10 text-primary border border-primary/10",
    neutral: "bg-secondary-container/20 text-on-secondary-container border border-secondary-container/10",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} style={style}>
      {icon && (
        <span className="material-symbols-outlined text-[16px] leading-none" data-icon={icon}>
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};
