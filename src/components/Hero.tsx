"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEntrance } from "@/components/EntranceProvider";

export default function Hero() {
  const { headerReady } = useEntrance();

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-slate-50 overflow-hidden pt-20" id="home">
      
      {/* Ambient glowing radial light in the background with continuous movement */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: headerReady ? [0.4, 0.7, 0.4] : 0,
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" 
      />
      
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 relative z-10 py-12">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial="hidden"
            animate={headerReady ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.18, delayChildren: 0.12 }
              }
            }}
            className="mb-8"
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              className="font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 tracking-tight leading-[1.15] whitespace-nowrap"
            >
              Empowering Businesses <br />
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-300-percent animate-gradient drop-shadow-sm inline-block">
                Advanced Technology.
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={headerReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.45, type: "spring" }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Expert IT Services, Custom Software Solutions, and Mentorship to accelerate your digital transformation and scale your ideas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.65, type: "spring" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <Link href="#services" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 15px 40px rgba(26,78,149,0.4)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-[1.05rem] shadow-[0_8px_30px_rgba(26,78,149,0.3)] border border-primary/20 transition-all"
              >
                Explore Our Services
                <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, y: -4, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-bold text-[1.05rem] shadow-sm transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
