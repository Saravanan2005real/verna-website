"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden scroll-mt-24" id="contact">
      {/* Moving Light Tech grid */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(rgba(26,78,149,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,78,149,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" 
      />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block font-body text-xs font-bold uppercase tracking-widest text-primary mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 leading-tight"
          >
            Let's Build Something <br className="hidden sm:block" /> Together
          </motion.h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          whileHover={{ boxShadow: "0px 20px 60px rgba(26,78,149,0.12)" }}
          className="max-w-4xl mx-auto bg-white p-10 sm:p-14 rounded-[2.5rem] shadow-[0_8px_40px_rgba(26,78,149,0.08)] border border-slate-100 flex flex-col md:flex-row gap-12 justify-between items-center transition-all duration-500"
        >
          
          <div className="flex-1 w-full space-y-8">
            <motion.div 
              whileHover={{ x: 10 }}
              className="group flex items-start gap-5 cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(26,78,149,0.3)] transition-all duration-300 border border-primary/10"
              >
                <Mail size={24} className="group-hover:rotate-12 transition-transform" />
              </motion.div>
              <div>
                <span className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">Email Us</span>
                <a href="mailto:support@vernatech.co" className="text-lg sm:text-xl font-medium text-slate-800 hover:text-primary transition-colors break-all">
                  support@vernatech.co
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="group flex items-start gap-5 cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(35,151,184,0.3)] transition-all duration-300 border border-accent/10"
              >
                <Phone size={24} className="group-hover:-rotate-12 transition-transform" />
              </motion.div>
              <div>
                <span className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">Call Us</span>
                <a href="tel:+918220012671" className="text-lg sm:text-xl font-medium text-slate-800 hover:text-accent transition-colors">
                  +91 8220012671
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden md:block w-[1px] h-32 bg-slate-100" />
          <div className="md:hidden h-[1px] w-full bg-slate-100" />

          <div className="flex-1 w-full flex flex-col justify-center">
            <span className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6 md:text-center">Connect Socially</span>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              
              <a 
                href="https://www.linkedin.com/company/vernatech/" target="_blank" rel="noopener noreferrer" 
                className="group social-card-btn social-card-btn--linkedin"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span className="font-medium">LinkedIn</span>
              </a>

              <a 
                href="https://www.instagram.com/vernatech.co?igsh=Y2wyazB6bTMzOWx0" target="_blank" rel="noopener noreferrer" 
                className="group social-card-btn social-card-btn--instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span className="font-medium">Instagram</span>
              </a>

              <a 
                href="https://wa.me/918220012671?text=Hi%20VernaTech!%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" 
                className="group social-card-btn social-card-btn--whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
