"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useEntrance } from "@/components/EntranceProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { headerReady } = useEntrance();

  if (!headerReady) return null;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      className="bg-primary-dark text-blue-200 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Subtle moving top gradient glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" 
      />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-primary-light/30">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 lg:pr-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-black text-white mb-6"
            >
              VernaTech
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm leading-relaxed mb-8 font-light text-blue-100"
            >
              VernaTech is a premier service-based technology firm dedicated to delivering high-performance web applications, AI solutions, and expert IT consultancy.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
              className="flex items-center gap-4"
            >
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                href="https://www.linkedin.com/company/vernatech/" target="_blank" rel="noopener noreferrer" 
                className="group social-icon-btn social-icon-btn--linkedin" 
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 } }}
                href="https://www.instagram.com/vernatech.co?igsh=Y2wyazB6bTMzOWx0" target="_blank" rel="noopener noreferrer" 
                className="group social-icon-btn social-icon-btn--instagram" 
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}
                href="https://wa.me/918220012671?text=Hi%20VernaTech!%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" 
                className="group social-icon-btn social-icon-btn--whatsapp" 
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-6 tracking-wide text-[0.95rem]">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/#home" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>Home</Link></li>
              <li><Link href="/#about" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>About Us</Link></li>
              <li><Link href="/#why-us" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>Why Choose Us</Link></li>
              <li><Link href="/team" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>Our Team</Link></li>
              <li><Link href="/#contact" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-6 tracking-wide text-[0.95rem]">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/#services" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>Web Development</Link></li>
              <li><Link href="/#services" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>Mobile Apps</Link></li>
              <li><Link href="/#services" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>AI & Chatbots</Link></li>
              <li><Link href="/#services" className="hover:text-accent transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-accent transition-all"></span>IT Consultancy</Link></li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 lg:pl-4"
          >
            <h4 className="text-white font-semibold mb-6 tracking-wide text-[0.95rem]">Contact Information</h4>
            <ul className="space-y-5 text-sm">
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="mailto:support@vernatech.co" 
                  className="flex items-start gap-4 group hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary border border-primary-light flex items-center justify-center shrink-0 group-hover:border-accent group-hover:text-accent group-hover:bg-primary-dark transition-all">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-widest text-blue-300 mb-1 font-semibold">Email</span>
                    <span className="break-all font-medium">support@vernatech.co</span>
                  </div>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="tel:+918220012671" 
                  className="flex items-start gap-4 group hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary border border-primary-light flex items-center justify-center shrink-0 group-hover:border-accent group-hover:text-accent group-hover:bg-primary-dark transition-all">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs uppercase tracking-widest text-blue-300 mb-1 font-semibold">Phone</span>
                    <span className="font-medium">+91 8220012671</span>
                  </div>
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs font-semibold text-blue-300 tracking-wide">
          <p>© {currentYear} VernaTech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
