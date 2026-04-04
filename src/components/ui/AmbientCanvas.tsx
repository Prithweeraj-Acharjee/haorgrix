"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let time = 0;

    const colors = ["#4A94BA", "#425F72", "#457A98", "#7A99AB", "#4A91B5"];
    const bgColor = "#0F111A";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min((canvas.width * canvas.height) / 4000, 800);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 1.5 + 0.3,
        });
      }
    };

    const draw = () => {
      // Trail effect
      ctx.fillStyle = "rgba(15, 17, 26, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.001;

      particles.forEach((p) => {
        // Simple flow field
        const angle = Math.sin(p.x * 0.002) * Math.cos(p.y * 0.002) * Math.PI * 2 + time;
        const targetVx = Math.cos(angle) * 0.8;
        const targetVy = Math.sin(angle) * 0.8;

        p.vx += (targetVx - p.vx) * 0.02;
        p.vy += (targetVy - p.vy) * 0.02;

        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.4;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Wrap around
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
    };

    window.addEventListener("resize", handleResize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-40"
    />
  );
}
