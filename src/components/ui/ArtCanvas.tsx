"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  history: { x: number; y: number }[];
}

export default function ArtCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const targetsRef = useRef<{x: number, y: number}[]>([]);
  const edgeTargetsRef = useRef<{x: number, y: number}[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let glowParticles: any[] = [];
    let time = 0;
    
    // States: FLOW -> ASSEMBLE -> HOLD
    let phase: "FLOW" | "ASSEMBLE" | "HOLD" = "FLOW";
    let phaseTimer = 0;
    let flowCycleCount = 1;

    const colors = [
      "#4A94BA",
      "#425F72",
      "#457A98",
      "#7A99AB",
      "#4A91B5",
      "#4886A7",
      "#457F9F",
      "#42728F",
      "#335A71",
    ];
    const bgColor = "#0F111A";
    const glowColors = ["#82CAEB", "#9FD7F1", "#A8E5FF", "#FFFFFF", "#86D1F3"];

    // Pre-render glow sprites (one per color) to avoid expensive shadowBlur every frame
    const glowSprites = new Map<string, HTMLCanvasElement>();
    const createGlowSprite = (color: string, radius: number) => {
      const key = `${color}_${radius}`;
      if (glowSprites.has(key)) return glowSprites.get(key)!;
      
      const size = Math.ceil(radius * 6);
      const spriteCanvas = document.createElement("canvas");
      spriteCanvas.width = size;
      spriteCanvas.height = size;
      const sCtx = spriteCanvas.getContext("2d")!;
      
      const cx = size / 2;
      const cy = size / 2;
      
      // Outer glow (radial gradient)
      const gradient = sCtx.createRadialGradient(cx, cy, 0, cx, cy, size / 2);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.3, color + "AA");
      gradient.addColorStop(0.6, color + "33");
      gradient.addColorStop(1, color + "00");
      
      sCtx.fillStyle = gradient;
      sCtx.fillRect(0, 0, size, size);
      
      // Bright center dot
      sCtx.beginPath();
      sCtx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
      sCtx.fillStyle = "#FFFFFF";
      sCtx.fill();
      
      glowSprites.set(key, spriteCanvas);
      return spriteCanvas;
    };

    const getTextTargets = (width: number, height: number) => {
      const textCanvas = document.createElement("canvas");
      const tCtx = textCanvas.getContext("2d");
      if (!tCtx) return { fill: [] as {x:number,y:number}[], edge: [] as {x:number,y:number}[] };

      textCanvas.width = width;
      textCanvas.height = height;

      const fontSize = Math.min(width / 7, 200);
      tCtx.font = `900 ${fontSize}px "SF Pro Display", "Inter", "Arial Black", sans-serif`;
      tCtx.fillStyle = "white";
      tCtx.textAlign = "center";
      tCtx.textBaseline = "middle";
      
      const text = "HAORGRIX";
      tCtx.fillText(text, width / 2, height / 2);

      const imageData = tCtx.getImageData(0, 0, width, height).data;
      const fillCoords: {x:number,y:number}[] = [];
      const edgeCoords: {x:number,y:number}[] = [];
      const step = Math.max(Math.floor(width / 350), 3); 

      const isOpaque = (px: number, py: number) => {
        if (px < 0 || px >= width || py < 0 || py >= height) return false;
        return imageData[(py * width + px) * 4 + 3] > 128;
      };

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          if (isOpaque(x, y)) {
            fillCoords.push({ x, y });
            const isEdge = !isOpaque(x - step, y) || !isOpaque(x + step, y) ||
                           !isOpaque(x, y - step) || !isOpaque(x, y + step);
            if (isEdge) {
              edgeCoords.push({ x, y });
            }
          }
        }
      }
      return { fill: fillCoords, edge: edgeCoords };
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Clear sprite cache on resize
      glowSprites.clear();
      
      const result = getTextTargets(canvas.width, canvas.height);
      targetsRef.current = result.fill;
      edgeTargetsRef.current = result.edge;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      glowParticles = [];
      const targets = targetsRef.current;
      const edges = edgeTargetsRef.current;
      // Reduced cap for better performance
      const particleCount = Math.min((canvas.width * canvas.height) / 1000, 2500);

      const hasTargets = targets.length > 0;
      if (hasTargets) {
        targets.sort(() => Math.random() - 0.5); 
      }

      for (let i = 0; i < particleCount; i++) {
        let pTarget = { x: canvas.width / 2, y: canvas.height / 2 };
        if (hasTargets) {
           pTarget = targets[i % targets.length];
        }
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: 0,
          vy: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 1.5 + 0.3,
          history: [],
          targetX: pTarget.x,
          targetY: pTarget.y,
        } as any);
      }

      // Glow particles — reduced to 300 for performance
      if (edges.length > 0) {
        const glowCount = Math.min(edges.length, 300);
        const shuffledEdges = [...edges].sort(() => Math.random() - 0.5);
        for (let i = 0; i < glowCount; i++) {
          const edge = shuffledEdges[i % shuffledEdges.length];
          const color = glowColors[Math.floor(Math.random() * glowColors.length)];
          const size = Math.random() * 1.2 + 0.4;
          glowParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: 0,
            vy: 0,
            targetX: edge.x,
            targetY: edge.y,
            color,
            size,
            alpha: Math.random() * 0.5 + 0.5,
            pulseOffset: Math.random() * Math.PI * 2,
            // Pre-create the glow sprite for this particle
            sprite: createGlowSprite(color, size),
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      ctx.fillStyle = "rgba(15, 17, 26, 0.08)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.0015;
      phaseTimer++;

      // Compute dynamic flow duration based on cycle (Assuming 60fps)
      let flowDuration = 150; // 2.5 seconds (1st cycle)
      if (flowCycleCount === 2) flowDuration = 300; // 5 seconds
      else if (flowCycleCount === 3) flowDuration = 480; // 8 seconds
      else if (flowCycleCount > 3) flowDuration = 600; // 10 seconds

      if (phase === "FLOW" && phaseTimer > flowDuration) {
        phase = "ASSEMBLE";
        phaseTimer = 0;
      } else if (phase === "ASSEMBLE" && phaseTimer > 150) { // 2.5 sec gather
        phase = "HOLD";
        phaseTimer = 0;
      } else if (phase === "HOLD" && phaseTimer > 150) { // 2.5 sec hold
        phase = "FLOW";
        phaseTimer = 0;
        flowCycleCount++;
        
        // EXPLOSION VECTOR: blast all particles outward
        particles.forEach(p => {
          p.history = [];
          const blastAngle = Math.random() * Math.PI * 2;
          const blastForce = Math.random() * 25 + 15;
          p.vx = Math.cos(blastAngle) * blastForce;
          p.vy = Math.sin(blastAngle) * blastForce;
        });
        glowParticles.forEach((g: any) => {
          const blastAngle = Math.random() * Math.PI * 2;
          const blastForce = Math.random() * 12 + 6;
          g.vx = Math.cos(blastAngle) * blastForce;
          g.vy = Math.sin(blastAngle) * blastForce;
        });
      }

      const { x: mouseX, y: mouseY } = mouseRef.current;
      const mouseActive = mouseX > -500;
      const sinTime = Math.sin(time);

      // ─── Main particles ───
      particles.forEach((p: any) => {
        
        if (phase === "FLOW") {
          const angle = Math.sin(p.x * 0.002) * Math.cos(p.y * 0.002) * Math.PI * 2 + sinTime * 1.5;
          const targetVx = Math.cos(angle) * 2.5;
          const targetVy = Math.sin(angle) * 2.5; 
          
          p.vx += (targetVx - p.vx) * 0.04;
          p.vy += (targetVy - p.vy) * 0.04;
          
        } else {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          
          const force = phase === "ASSEMBLE" ? 0.05 : 0.15;
          p.vx += (dx * force - p.vx) * 0.12;
          p.vy += (dy * force - p.vy) * 0.12;

          if (phase === "HOLD") {
            const distSq = dx * dx + dy * dy;
            if (distSq < 25) {
              p.vx += (Math.random() - 0.5) * 0.8;
              p.vy += (Math.random() - 0.5) * 0.8;
            }
          }
        }

        // Mouse repulsion — only check if mouse is on screen
        if (mouseActive) {
          const mdx = mouseX - p.x;
          const mdy = mouseY - p.y;
          const mDistSq = mdx * mdx + mdy * mdy;

          if (mDistSq < 62500) { // 250^2
            const mDist = Math.sqrt(mDistSq);
            const mForce = (250 - mDist) / 250;
            const pushAngle = Math.atan2(mdy, mdx) + Math.PI;
            
            p.vx += Math.cos(pushAngle) * mForce * 1.5;
            p.vy += Math.sin(pushAngle) * mForce * 1.5;
            
            p.vx += Math.cos(pushAngle + Math.PI/2) * mForce * 0.8;
            p.vy += Math.sin(pushAngle + Math.PI/2) * mForce * 0.8;
          }
        }

        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        if (p.history.length > 0) {
          const last = p.history[p.history.length - 1];
          const pdx = p.x - last.x;
          const pdy = p.y - last.y;
          if (pdx * pdx + pdy * pdy < 1600) { // 40^2
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(p.x, p.y);
          }
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }

        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = "round";
        ctx.stroke();

        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > 3) {
          p.history.shift(); 
        }

        if (phase === "FLOW") {
          if (p.x < -50) { p.x = canvas.width + 50; p.history = []; }
          if (p.x > canvas.width + 50) { p.x = -50; p.history = []; }
          if (p.y < -50) { p.y = canvas.height + 50; p.history = []; }
          if (p.y > canvas.height + 50) { p.y = -50; p.history = []; }
        }
      });

      // ─── Draw glow particles (border shimmer) — no shadowBlur, uses pre-rendered sprites ───
      const sinTimeFast = Math.sin(time * 80);
      glowParticles.forEach((g: any) => {
        if (phase === "FLOW") {
          const angle = Math.sin(g.x * 0.003) * Math.cos(g.y * 0.003) * Math.PI * 2 + sinTime * 2.4;
          const targetVx = Math.cos(angle) * 1.2;
          const targetVy = Math.sin(angle) * 1.2;
          g.vx += (targetVx - g.vx) * 0.03;
          g.vy += (targetVy - g.vy) * 0.03;
        } else {
          const dx = g.targetX - g.x;
          const dy = g.targetY - g.y;
          const force = phase === "ASSEMBLE" ? 0.06 : 0.18;
          g.vx += (dx * force - g.vx) * 0.15;
          g.vy += (dy * force - g.vy) * 0.15;

          if (phase === "HOLD") {
            const distSq = dx * dx + dy * dy;
            if (distSq < 16) {
              g.vx += (Math.random() - 0.5) * 0.4;
              g.vy += (Math.random() - 0.5) * 0.4;
            }
          }
        }

        // Mouse repulsion
        if (mouseActive) {
          const mdx = mouseX - g.x;
          const mdy = mouseY - g.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < 40000) { // 200^2
            const mDist = Math.sqrt(mDistSq);
            const mForce = (200 - mDist) / 200;
            const pushAngle = Math.atan2(mdy, mdx) + Math.PI;
            g.vx += Math.cos(pushAngle) * mForce * 1.2;
            g.vy += Math.sin(pushAngle) * mForce * 1.2;
          }
        }

        g.vx *= 0.90;
        g.vy *= 0.90;
        g.x += g.vx;
        g.y += g.vy;

        // Pulsing alpha
        const pulse = 0.5 + 0.5 * Math.sin(sinTimeFast + g.pulseOffset);
        const drawAlpha = g.alpha * (0.4 + pulse * 0.6);

        // Draw pre-rendered glow sprite (much faster than shadowBlur)
        const sprite = g.sprite as HTMLCanvasElement;
        ctx.globalAlpha = drawAlpha;
        ctx.drawImage(sprite, g.x - sprite.width / 2, g.y - sprite.height / 2);
        ctx.globalAlpha = 1.0;

        // Wrap during flow
        if (phase === "FLOW") {
          if (g.x < -30) g.x = canvas.width + 30;
          if (g.x > canvas.width + 30) g.x = -30;
          if (g.y < -30) g.y = canvas.height + 30;
          if (g.y > canvas.height + 30) g.y = -30;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    setTimeout(() => {
      resize();
      draw();
    }, 50);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
