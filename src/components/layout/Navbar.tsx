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
  { label: "Our Team", href: "/team" },
  { label: "Let's Talk", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";
  const showDarkText = scrolled || !isHomepage;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDarkText
          ? "bg-white shadow-sm border-b border-steel-light/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={showDarkText ? "/images/logo-light.png" : "/images/logo-dark.png"}
            alt="HaorGrix"
            width={200}
            height={60}
            className="h-10 sm:h-14 w-auto"
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
                className={`text-sm font-semibold transition-colors relative pb-1 ${
                  showDarkText
                    ? isActive
                      ? "text-steel"
                      : "text-text-primary hover:text-steel"
                    : isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                } ${isActive ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sky after:rounded-full" : ""}`}
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
            <X size={28} className={showDarkText ? "text-text-primary" : "text-white"} />
          ) : (
            <Menu size={28} className={showDarkText ? "text-text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-white z-40"
          >
            <div className="px-6 py-8 flex flex-col h-full">
              {/* Nav links - large and tappable */}
              <div className="space-y-2 flex-1">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block py-4 px-4 rounded-xl text-xl font-bold transition-colors ${
                        isActive
                          ? "text-steel bg-steel-light/50"
                          : "text-text-primary hover:bg-ice active:bg-steel-light/30"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Footer info */}
              <div className="pb-8">
                <p className="text-center text-xs text-text-secondary">hello@haorgrix.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
