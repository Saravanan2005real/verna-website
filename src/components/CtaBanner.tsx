"use client";
import { motion } from "framer-motion";
import HomeSectionLink from "@/components/HomeSectionLink";

export default function CtaBanner() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1000px] mx-auto relative z-10">
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-accent bg-[length:200%_200%] px-8 py-20 sm:px-20 sm:py-24 text-center shadow-2xl"
        >
          {/* Abstract glowing background inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-full bg-gradient-to-b from-primary/40 to-transparent blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-accent/30 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto mb-8 leading-tight">
              Focus on your business. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">We'll take care of technology.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto mb-10 font-light">
              Ready to transform your ideas into reality? Let's collaborate and build something extraordinary together.
            </p>
            
            <HomeSectionLink 
              section="contact"
              className="inline-flex items-center justify-center px-10 py-5 font-body text-[1rem] font-bold tracking-wide rounded-full bg-white text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 hover:bg-slate-50 transition-all duration-300"
            >
              Get in Touch Today
            </HomeSectionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
