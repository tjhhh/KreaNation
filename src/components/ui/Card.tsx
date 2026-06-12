import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: "md" | "lg" | "none";
  interactive?: boolean;
  border?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = "md",
  interactive = true,
  border = true,
  className = "",
  ...props
}) => {
  const baseStyles = "bg-surface-container-lowest rounded-2xl transition-all duration-300 overflow-hidden";
  
  const paddings = {
    none: "",
    md: "p-sp-md",
    lg: "p-sp-lg",
  };

  const borderStyles = border ? "border border-outline-variant/30" : "";
  const hoverStyles = interactive
    ? "shadow-level-1 hover:shadow-level-2 hover:-translate-y-1"
    : "shadow-level-1";

  return (
    <div
      className={`${baseStyles} ${paddings[padding]} ${borderStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
