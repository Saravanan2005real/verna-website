"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden relative" id="about">
      {/* Moving background grid */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(26,78,149,1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,78,149,1)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" 
      />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block font-body text-[0.8rem] font-bold uppercase tracking-widest text-primary mb-4"
            >
              About VernaTech
            </motion.span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.15] mb-6">
              Engineering Excellence <br />
              <span className="text-slate-400 font-light">Since Day One.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
              We are a team of passionate technologists dedicated to solving complex business problems through elegant software. From sleek web applications to robust AI systems, we deliver scalable solutions that drive real impact.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Client-centric approach focused on business goals.",
                "Expertise across modern tech stacks and cloud infrastructure.",
                "Commitment to clean code, performance, and scalability."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), type: "spring" }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  </motion.div>
                  <span className="text-slate-700 font-light group-hover:text-primary transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Side - Light Bento Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                  className="bg-white border border-slate-100 rounded-3xl p-8 aspect-square flex flex-col justify-center shadow-[0_8px_30px_rgba(26,78,149,0.06)] hover:border-primary/30 transition-colors"
                >
                  <span className="text-5xl font-bold text-primary mb-2">50+</span>
                  <span className="text-slate-500 font-medium">Projects Delivered</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                  className="relative bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 aspect-square flex flex-col justify-center shadow-lg overflow-hidden group"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full blur-2xl"
                  />
                  <span className="relative z-10 text-5xl font-bold mb-2">100%</span>
                  <span className="relative z-10 text-blue-100 font-medium">Client Satisfaction</span>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                  className="relative bg-gradient-to-br from-accent to-primary text-white rounded-3xl p-8 aspect-square flex flex-col justify-center shadow-[0_15px_30px_rgba(35,151,184,0.2)] overflow-hidden group"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full blur-2xl"
                  />
                  <span className="relative z-10 text-5xl font-bold mb-2">24/7</span>
                  <span className="relative z-10 text-cyan-50 font-medium">Dedicated Support</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                  className="bg-white border border-slate-100 rounded-3xl p-8 aspect-square flex flex-col justify-center shadow-[0_8px_30px_rgba(26,78,149,0.06)] hover:border-primary/30 transition-colors"
                >
                  <span className="text-5xl font-bold text-primary mb-2">10+</span>
                  <span className="text-slate-500 font-medium">Expert Engineers</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
