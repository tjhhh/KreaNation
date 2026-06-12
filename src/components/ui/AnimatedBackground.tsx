"use client";

import React, { useEffect, useState, useRef } from "react";

export const AnimatedBackground: React.FC = () => {
  const [mouse, setMouse] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseLeave = () => {
      setMouse({ x: null, y: null });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden bg-background">
      {/* 1. Ambient Floating Gradient Orbs (CSS Keyframe Animated) */}
      <div className="absolute inset-0 opacity-80 mix-blend-multiply">
        {/* Red Orb 1 - Top Left */}
        <div 
          className="absolute w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[130px] opacity-[0.06] bg-primary"
          style={{
            top: "-10%",
            left: "-10%",
            animation: "float-orb-1 25s ease-in-out infinite",
          }}
        />
        
        {/* Slate Blue Orb 2 - Bottom Right */}
        <div 
          className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[120px] opacity-[0.05] bg-secondary"
          style={{
            bottom: "10%",
            right: "-10%",
            animation: "float-orb-2 30s ease-in-out infinite",
          }}
        />

        {/* Red Orb 3 - Center/Right */}
        <div 
          className="absolute w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full blur-[110px] opacity-[0.04] bg-primary"
          style={{
            top: "35%",
            right: "15%",
            animation: "float-orb-3 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* 2. Interactive Mouse-Glow (Follows Cursor) */}
      {isMounted && mouse.x !== null && mouse.y !== null && (
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] transition-opacity duration-500 ease-out pointer-events-none"
          style={{
            left: `${mouse.x}px`,
            top: `${mouse.y}px`,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(182, 0, 19, 0.08) 0%, rgba(182, 0, 19, 0) 70%)",
          }}
        />
      )}

      {/* 3. Tech Dot Matrix Grid Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(86, 94, 116, 0.07) 1.2px, transparent 1.2px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* 4. Diagonal Sweeping Light Beam (Represents Digital Signal/Pulses) */}
      <div 
        className="absolute w-[200vw] h-[1px] opacity-[0.12]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(182, 0, 19, 0.6) 50%, transparent 100%)",
          top: "0",
          left: "0",
          transformOrigin: "top left",
          animation: "sweep-beam 12s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        }}
      />

      {/* Embedded CSS Animations for self-contained, high-performance execution */}
      <style jsx global>{`
        @keyframes float-orb-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(80px, 40px) scale(1.15);
          }
        }
        
        @keyframes float-orb-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-70px, -50px) scale(0.9);
          }
        }
        
        @keyframes float-orb-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(50px, -70px) scale(1.1);
          }
        }

        @keyframes sweep-beam {
          0% {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
          100% {
            transform: translate(100%, 100%) rotate(-45deg);
          }
        }
      `}</style>
    </div>
  );
};
