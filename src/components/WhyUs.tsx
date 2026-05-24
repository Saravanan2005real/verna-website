"use client";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function WhyUs() {
  return (
    <section className="relative bg-gradient-to-br from-[#0c264a] via-primary-dark to-primary text-white overflow-hidden py-24 sm:py-32" id="why-us">
      {/* Moving Background Pattern */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" 
      />
      
      {/* Floating orbs */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block font-body text-xs font-bold uppercase tracking-widest text-accent mb-4"
          >
            Why VernaTech
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Why We're Different
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              num: "01",
              title: "Service-First",
              desc: "We are a service-based company. Every engagement—IT services, solutions, consultancy, or talent mentorship—is built entirely around your success.",
            },
            {
              num: "02",
              title: "Expert Consultancy",
              desc: "Clear, unbiased advice on technology choices, architecture, and digital transformation. We help businesses and emerging professionals make the right moves.",
            },
            {
              num: "03",
              title: "From Business to Campus",
              desc: "We serve enterprises with robust IT solutions and concurrently support the next generation with expert mentorship on real-world projects and careers.",
            }
          ].map((item, i) => (
            <motion.article 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.03, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
              className="group relative bg-white/10 backdrop-blur-md p-10 rounded-[2rem] border border-white/20 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Drifting background number */}
              <motion.div 
                animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700 font-heading text-8xl font-black text-accent pointer-events-none -mr-4 -mt-4"
              >
                {item.num}
              </motion.div>
              
              <div className="relative z-10">
                <motion.div 
                  initial={{ rotate: -5 }}
                  whileInView={{ rotate: 0 }}
                  className="font-heading text-3xl font-bold text-accent-light mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6"
                >
                  {item.num}.
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-blue-100 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
