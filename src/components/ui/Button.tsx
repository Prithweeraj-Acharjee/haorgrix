"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ variant = "primary", size = "md", href, children, className, onClick }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-500 overflow-hidden relative group";
  const sizes = {
    sm: "px-5 py-2.5 text-xs uppercase tracking-[0.2em]",
    md: "px-8 py-3.5 text-sm uppercase tracking-[0.15em]",
    lg: "px-12 py-5 text-base uppercase tracking-[0.1em]",
  };
  const variants = {
    primary: "bg-art-primary text-white hover:bg-art-accent shadow-[0_0_20px_rgba(74,148,186,0.15)] hover:shadow-[0_0_35px_rgba(130,202,235,0.3)] hover:-translate-y-0.5",
    secondary: "bg-transparent border border-white/20 text-white hover:border-art-accent/50 hover:bg-white/5",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
