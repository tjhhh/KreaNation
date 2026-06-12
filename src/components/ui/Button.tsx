import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass";
  size?: "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-label-md text-label-md rounded-full transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-on-primary shadow-level-1 hover:bg-surface-tint hover:shadow-level-2 hover:-translate-y-0.5",
    secondary:
      "bg-transparent border border-outline-variant/60 text-secondary hover:bg-surface-container-low hover:text-on-surface hover:border-outline-variant",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-level-1 hover:bg-white/20 hover:border-white/30 hover:shadow-level-2 hover:-translate-y-0.5",
  };

  const sizes = {
    md: "h-12 px-6",
    lg: "h-14 px-8",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
