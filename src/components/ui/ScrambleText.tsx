"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>/?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  scrambleOnHover?: boolean;
}

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  duration = 1000,
  scrambleOnHover = false,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isAnimating, setIsAnimating] = useState(false);

  // Split text into array for exact length matching
  const originalChars = text.split("");

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const start = Date.now();
    const startTime = start + delay * 1000;

    const tick = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Using easeOut effect - starts fast, slows down
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const revealCount = Math.floor(easeProgress * originalChars.length);

      const nextText = originalChars
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < revealCount) return originalChars[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(nextText);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setIsAnimating(false);
        setDisplayText(text);
      }
    };

    requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (isInView) {
      scramble();
    }
  }, [isInView]);

  return (
    <motion.span
      ref={ref}
      className={className}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.1, delay }}
    >
      {displayText}
    </motion.span>
  );
}
