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
  const base = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary: "bg-steel text-white hover:bg-sky hover:text-text-primary",
    secondary: "bg-transparent border-2 border-steel text-steel hover:bg-sky hover:border-sky hover:text-text-primary",
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
