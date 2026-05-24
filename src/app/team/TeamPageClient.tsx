"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Vinoth N. A. S.",
    role: "Founder",
    photo: "/team/vinoth.png",
    linkedin: "https://www.linkedin.com/in/dr-vinoth-n-a-s-3b671b28b/",
    bio: "As the Founder, Dr. Vinoth establishes the core vision of VernaTech, ensuring our technological solutions consistently empower clients to scale and succeed in a digital-first world.",
  },
  {
    name: "Mr. Dinesh .S",
    role: "Co-Founder & CEO",
    photo: "/team/dinesh.jpeg",
    linkedin: "https://www.linkedin.com/in/dinesh-siva/",
    bio: "Mr. Dinesh drives VernaTech's strategic growth and client success. He ensures that every partnership and technical solution delivers measurable ROI and long-term business value for our clients.",
  },
  {
    name: "Mr. Saravanan Sathishkumar",
    role: "Co-Founder & CTO",
    initials: "SS",
    photo: "/team/saravanan.png",
    linkedin: "https://www.linkedin.com/in/saravanan-sathishkumar-a98923247/",
    bio: "Spearheading our technical operations, Mr. Saravanan guarantees the delivery of robust, scalable, and high-performance technological solutions tailored to solve complex business challenges.",
  },
  {
    name: "Dr. Sreekumar .S",
    role: "Strategic Advisor",
    photo: "/team/sreekumar.png",
    linkedin: "https://www.linkedin.com/in/sree-kumar-k-516163258/",
    bio: "Dr. Sreekumar provides expert industry foresight and strategic consultancy. He helps our clients navigate complex digital transformations and unlock new market opportunities.",
  }
];

export default function TeamPageClient() {
  return (
    <section className="py-24 bg-white relative">
      {/* Very subtle corporate background line pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[length:64px_64px] pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Minimalist Corporate Header */}
        <div className="max-w-4xl mb-24 border-b border-slate-200 pb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6"
          >
            Executive Leadership
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-5xl sm:text-6xl font-normal text-slate-900 leading-[1.1]"
          >
            The visionaries driving <br className="hidden sm:block" /> 
            <span className="font-bold text-primary-dark">technological excellence.</span>
          </motion.h1>
        </div>

        {/* Equal Grid for All Leadership */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col group w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm"
            >
              {/* Professional Corporate Portrait Box */}
              <div className="w-full aspect-square rounded-xl bg-slate-100 mb-6 relative overflow-hidden shadow-sm border border-slate-200 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
                {member.photo ? (
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500">
                    <span className="text-5xl font-heading font-light text-slate-300">{member.initials || member.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              
              <h3 className="font-heading font-bold text-slate-900 mb-1 whitespace-nowrap tracking-tight text-lg xl:text-xl">{member.name}</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-1">
                {member.bio}
              </p>
              
              <a 
                href={member.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#0077b5] transition-colors mt-auto"
                aria-label={`LinkedIn of ${member.name}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn Profile</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
