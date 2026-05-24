"use client";
import { motion } from "framer-motion";

const services = [
  "Web & App Development",
  "AI & Chatbots",
  "Cloud & Database",
  "Custom Software",
  "Mobile Applications",
  "APIs & Integration",
  "DevOps & Automation",
  "Data & Analytics",
  "Security & Compliance",
  "IT Consultancy",
  "Project & Career Mentorship"
];

export default function ServicesStrip() {
  return (
    <section className="relative bg-slate-50 overflow-hidden py-20 border-y border-slate-200/60">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>
      
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-10"
        >
          Technologies & <span className="text-primary">Capabilities</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-y-4 gap-x-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-5 py-2.5 bg-white text-slate-700 font-medium text-sm rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
