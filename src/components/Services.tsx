"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";
import HomeSectionLink from "@/components/HomeSectionLink";

const services = [
  {
    title: "Web & App Development",
    desc: "End-to-end development of high-performance web applications, scalable cloud solutions, and intuitive mobile apps.",
    icon: Code2,
    colorClass: "text-primary",
    bgClass: "bg-primary/10"
  },
  {
    title: "AI & Automation",
    desc: "Custom AI agents, smart chatbots, and intelligent automation to bridge the gap between technology and your operations.",
    icon: Smartphone,
    colorClass: "text-accent",
    bgClass: "bg-accent/10"
  },
  {
    title: "IT Consultancy",
    desc: "Expert, unbiased guidance on technology strategy, cloud architecture, and driving your digital transformation.",
    icon: Lightbulb,
    colorClass: "text-indigo-500",
    bgClass: "bg-indigo-500/10"
  },
  {
    title: "Mentorship & Projects",
    desc: "Mentoring and guidance for students on their academic and real-world projects. We guide the next generation of technologists.",
    icon: GraduationCap,
    colorClass: "text-teal-500",
    bgClass: "bg-teal-500/10"
  }
];

export default function Services() {
  return (
    <section className="py-24 sm:py-32 relative bg-slate-50 overflow-hidden" id="services">
      {/* Dynamic Background Float */}
      <motion.div 
        animate={{ y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[80px]"
      />
      <motion.div 
        animate={{ y: [0, -50, 0], x: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[80px]"
      />
      
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block font-body text-xs font-bold uppercase tracking-widest text-primary mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-light"
          >
            Delivering robust technology solutions that let your people lead, not do data entry between systems.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 20px 40px rgba(0,53,244,0.12)",
                  borderColor: "rgba(0,53,244,0.2)"
                }}
                className="group relative bg-white backdrop-blur-md border border-slate-100 shadow-[0_8px_30px_rgba(0,53,244,0.04)] rounded-[2rem] p-8 sm:p-10 transition-colors duration-500 overflow-hidden"
              >
                {/* Subtle Hover Glow behind card content */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 ${service.bgClass}`}
                  >
                    <Icon className={`w-8 h-8 ${service.colorClass} group-hover:rotate-12 transition-transform duration-500`} />
                  </motion.div>
                  
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light mb-6">
                      {service.desc}
                    </p>
                    
                    <HomeSectionLink 
                      section="contact"
                      className="relative z-10 inline-flex items-center gap-2 font-semibold text-primary text-sm tracking-wide group/link"
                    >
                      <motion.span whileHover={{ x: 5 }} className="flex items-center gap-2">
                        Learn more 
                        <ArrowRight size={16} />
                      </motion.span>
                    </HomeSectionLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
