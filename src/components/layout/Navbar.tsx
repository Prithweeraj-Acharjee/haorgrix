"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const links = [
  { label: "HaorGrix", href: "/" },
  { label: "Our Projects", href: "/portfolio" },
  { label: "Our Clients", href: "/clients" },
  { label: "Our Team", href: "/team" },
  { label: "Let's Talk", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // We keep the scrolled logic to add a delicate blur when moving away from the top
  const isScrolled = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-art-midnight/40 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-svg.svg"
            alt="HaorGrix"
            width={300}
            height={90}
            className="h-12 sm:h-16 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(74,148,186,0.2)]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wider uppercase transition-colors relative pb-1 ${
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                } ${isActive ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-art-accent" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger - bigger touch target */}
        <button
          className="md:hidden p-3 -mr-2 rounded-xl active:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-16 sm:top-20 bg-art-midnight/95 backdrop-blur-3xl z-40"
          >
            <div className="px-8 py-12 flex flex-col h-full">
              {/* Nav links - large and tappable */}
              <div className="space-y-4 flex-1">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block py-5 px-6 rounded-3xl text-[24px] font-medium transition-all duration-500 ${
                        isActive
                          ? "text-art-accent bg-white/5 shadow-[0_0_30px_rgba(130,202,235,0.05)] border border-white/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Footer info */}
              <div className="pb-20 text-center">
                <p className="text-[12px] font-mono uppercase tracking-[0.4em] text-white/20 mb-4">Dhaka, Bangladesh</p>
                <p className="text-[14px] text-white/40 font-light">hello@haorgrix.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
