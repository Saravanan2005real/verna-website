"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/#about" },
  { name: "Our Team", href: "/team" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-6 px-4 sm:px-8",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <div 
          className={cn(
            "max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-500 rounded-full",
            isScrolled 
              ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(26,78,149,0.12)] border border-slate-200 px-6 py-3" 
              : "bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-sm px-6 py-4"
          )}
        >
          {/* Logo */}
          <Link href="#home" className="relative z-50">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="bg-white px-3 py-1 rounded-full shadow-sm">
              <Image 
                src="/logo.png" 
                alt="VernaTech Logo" 
                width={200} 
                height={50} 
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 relative">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2.5 text-[0.95rem] font-semibold text-slate-700 transition-colors z-10 hover:text-primary"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.name}
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/5 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white bg-primary rounded-full overflow-hidden shadow-md shadow-primary/20"
              >
                <span className="absolute inset-0 w-full h-full bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Contact Us
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-50 p-2.5 bg-white text-primary rounded-full border border-slate-200 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white border-l border-slate-200 shadow-2xl flex flex-col pt-32 px-8 pb-10 overflow-y-auto"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 text-3xl font-bold text-slate-800 hover:text-primary transition-colors border-b border-slate-100"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-5 bg-primary text-white rounded-full font-bold text-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
