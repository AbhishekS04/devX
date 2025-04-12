"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && hovered) {
      const updateMaskPosition = (e: MouseEvent) => {
        const rect = svgRef.current!.getBoundingClientRect();
        const cx = ((e.clientX - rect.left) / rect.width) * 100;
        const cy = ((e.clientY - rect.top) / rect.height) * 100;
        setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
      };
      window.addEventListener("mousemove", updateMaskPosition);
      return () => window.removeEventListener("mousemove", updateMaskPosition);
    }
  }, [hovered]);

  return (
    <div className="w-full h-full group">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="select-none"
      >
        <defs>
          {/* Gradient on hover */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="50%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#65a30d" />
          </linearGradient>

          {/* Radial reveal mask */}
          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            animate={maskPosition}
            transition={{ duration: duration ?? 0.2, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="textMask">
            <rect width="100%" height="100%" fill="url(#revealMask)" />
          </mask>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#84cc16" />
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#84cc16" />
          </filter>
        </defs>

        {/* Base Text - subtle skeleton */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent stroke-neutral-400 dark:stroke-neutral-700 font-[helvetica] text-5xl font-bold"
          style={{ opacity: 0.1 }}
        >
          {text}
        </text>

        {/* Hover Reveal Text */}
        {hovered && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#textGradient)"
            strokeWidth="0.3"
            mask="url(#textMask)"
            className="fill-transparent font-[helvetica] text-5xl font-bold"
            filter="url(#glow)"
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  );
};
