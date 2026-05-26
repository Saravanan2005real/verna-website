"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Trophy, Users, ChevronRight, CheckCircle2, Code, Zap, Globe, Rocket, Plus, Trash2, Upload, QrCode, CreditCard, Lightbulb, Cpu, Network, GraduationCap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Member = {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  department: string;
};

const initialMemberState = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  year: "",
  department: "",
};

export default function BuildXClient() {
  const [isMounted, setIsMounted] = useState(false);
  const [members, setMembers] = useState<Member[]>([{ ...initialMemberState }]);
  const [teamName, setTeamName] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Use an effect to set mounted state, ensuring the component only renders on the client
  // This completely prevents browser-extension hydration mismatch errors on forms!
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleMemberChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [e.target.name]: e.target.value };
    setMembers(updatedMembers as any);
  };

  const addMember = () => {
    if (members.length < 3) {
      setMembers([...members, { ...initialMemberState } as any]);
    }
  };

  const removeMember = (index: number) => {
    if (members.length > 1) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

  const scrollToRegister = () => {
    const element = document.getElementById("register-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!teamName.trim()) {
      alert("Validation Error: Please enter your Team Name.");
      return;
    }

    for (let i = 0; i < members.length; i++) {
      const member = members[i];
      const memberRole = i === 0 ? "Team Leader" : `Teammate ${i + 1}`;
      
      if (!member.fullName.trim()) {
        alert(`Validation Error: Please enter the Full Name for the ${memberRole}.`);
        return;
      }
      if (!member.email.trim()) {
        alert(`Validation Error: Please enter the Email Address for the ${memberRole}.`);
        return;
      }
      if (!member.phone.trim()) {
        alert(`Validation Error: Please enter the Phone Number for the ${memberRole}.`);
        return;
      }
      if (!member.college.trim()) {
        alert(`Validation Error: Please enter the College Name for the ${memberRole}.`);
        return;
      }
      if (!member.department.trim()) {
        alert(`Validation Error: Please enter the Department for the ${memberRole}.`);
        return;
      }
      if (!member.year) {
        alert(`Validation Error: Please select the Current Year for the ${memberRole}.`);
        return;
      }
    }

    if (!screenshot) {
      alert("Validation Error: Please upload the payment screenshot image (photo) of your transaction.");
      return;
    }

    setIsSubmitting(true);
    
    const fd = new FormData();
    fd.append("teamName", teamName);
    fd.append("members", JSON.stringify(members));
    fd.append("screenshot", screenshot);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: fd
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div suppressHydrationWarning className="min-h-screen bg-slate-950 text-slate-100 font-body overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8 max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-light font-semibold mb-6"
          >
            <Rocket size={18} />
            <span>Registration Open Now</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-primary-light font-semibold uppercase tracking-widest mb-4"
          >
            VernaTech LLP Presents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-accent-light to-white">BuildX 2026</span><br/>
            <span className="text-3xl md:text-5xl text-white">A Virtual Hackathon</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Turning Ideas Into Impactful Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
              <Calendar className="text-accent" size={20} />
              <span>27-28 June 2026</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
              <Users className="text-accent" size={20} />
              <span>Team Size: 1-3 Members</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
              <Globe className="text-accent" size={20} />
              <span>Registration Fee: ₹199/Team</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={scrollToRegister}
              className="group relative inline-flex items-center gap-2 px-8 py-4 font-bold text-white text-lg bg-gradient-to-r from-primary to-accent rounded-full overflow-hidden shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 cursor-pointer z-10"
            >
              <span>Register Now</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Tracks Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">Hackathon Tracks (6)</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Choose from 6 diverse tracks and build solutions that matter.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI & Emerging Technologies", icon: Zap },
              { title: "Healthcare & MedTech", icon: Rocket },
              { title: "FinTech & Smart Business", icon: Trophy },
              { title: "Education & Social Impact", icon: Users },
              { title: "Sustainability & Smart Living", icon: Globe },
              { title: "Open Innovation", icon: Code },
            ].map((track, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-primary/20">
                  <track.icon className="text-primary-light" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-light transition-colors">{track.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathon Rounds Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Hackathon Structure & Rounds</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Follow the journey from a spark of inspiration to a fully-realized business-ready solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 -translate-y-1/2 z-0" />

            {[
              {
                round: "Round 1",
                title: "Idea Pitching & Presentation",
                desc: "Establish your core concept, define the problem statement, and pitch your innovative solution with an interactive slide presentation.",
                icon: Lightbulb,
                color: "from-amber-500/20 to-yellow-500/20",
                iconColor: "text-amber-400",
                badge: "Initial Screening",
              },
              {
                round: "Round 2",
                title: "Prototype & Tech Evaluation",
                desc: "Present your system architecture, technical design, chosen tech stack, and showcase your partially completed project prototype.",
                icon: Cpu,
                color: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-cyan-400",
                badge: "Implementation Review",
              },
              {
                round: "Round 3",
                title: "Final Demo & Business Pitch",
                desc: "Demonstrate your finalized working project, present your target business model, monetization strategy, and pitch to potential sponsors.",
                icon: Trophy,
                color: "from-emerald-500/20 to-teal-500/20",
                iconColor: "text-emerald-400",
                badge: "Grand Finale",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="relative z-10 flex flex-col p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-primary/20 transition-all hover:bg-slate-900/60 group shadow-lg backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                  {item.badge}
                </div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                  <item.icon className={item.iconColor} size={28} />
                </div>

                <span className="text-xs uppercase tracking-widest font-bold text-accent mb-2">{item.round}</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Jury Panel & Networking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative rounded-3xl overflow-hidden border border-white/5 bg-slate-900/30 p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto"
        >
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-8 text-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-semibold">
                <Network size={16} />
                <span>Expert Panels</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Distinguished Academic & Industry Jury
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg max-w-2xl">
                Your projects will be evaluated by recognized experts representing both top tier academic institutions and leading technology companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4 hover:border-primary/20 transition-all hover:bg-slate-900/40">
                <div className="p-3 rounded-xl bg-primary/20 text-primary-light shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Academic Wisdom</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Receive constructive suggestions on research methodologies, algorithmic rigor, and foundational theories.</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4 hover:border-primary/20 transition-all hover:bg-slate-900/40">
                <div className="p-3 rounded-xl bg-accent/20 text-accent-light shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Industry Standards</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Get insights on real-world product deployment, scalability patterns, code efficiency, and business viability.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Participate (Full Width Above Form) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10">Why Participate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { icon: Trophy, title: "Cash Prizes for Winners", desc: "Compete and win exciting cash rewards." },
              { icon: Zap, title: "Internship Opportunities", desc: "Top performers get a chance to intern at VernaTech." },
              { icon: Users, title: "Industry Mentorship & Guidance", desc: "Learn directly from experienced tech leaders." },
              { icon: Code, title: "Participation & Winner Certificates", desc: "Add verifiable achievements to your portfolio." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <item.icon className="text-primary-light" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Registration Flow */}
        <motion.div
          id="register-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="text-center border-b border-white/10 pb-8">
                      <h3 className="text-3xl font-bold text-white mb-2">Team Registration</h3>
                      <p className="text-slate-400">Fill in the details below to complete your application.</p>
                    </div>

                    {/* Step 1: Team Name */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xl font-bold text-white">
                        <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-sm">1</span>
                        Team Details
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm text-slate-300 font-medium">Team Name *</label>
                          <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600" placeholder="E.g., The Tech Titans" />
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Team Members */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xl font-bold text-white">
                          <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-sm">2</span>
                          Member Details
                        </div>
                        <span className="text-sm font-medium text-slate-400 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                          {members.length}/3 Members
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        {members.map((member, idx) => (
                          <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-4 relative">
                            <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                              <h4 className="font-bold text-primary-light flex items-center gap-2">
                                <Users size={18} />
                                {idx === 0 ? "Team Leader" : `Teammate ${idx + 1}`}
                              </h4>
                              {idx > 0 && (
                                <button type="button" onClick={() => removeMember(idx)} className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 text-sm bg-red-400/10 px-3 py-1.5 rounded-lg">
                                  <Trash2 size={14} /> Remove
                                </button>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div className="space-y-1">
                                <label className="text-xs text-slate-400 uppercase tracking-wider">Full Name *</label>
                                <input type="text" name="fullName" value={member.fullName} onChange={(e) => handleMemberChange(idx, e)} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs text-slate-400 uppercase tracking-wider">Email Address *</label>
                                <input type="email" name="email" value={member.email} onChange={(e) => handleMemberChange(idx, e)} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs text-slate-400 uppercase tracking-wider">Phone Number *</label>
                                <input type="tel" name="phone" value={member.phone} onChange={(e) => handleMemberChange(idx, e)} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91 9876543210" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs text-slate-400 uppercase tracking-wider">College Name *</label>
                                <input type="text" name="college" value={member.college} onChange={(e) => handleMemberChange(idx, e)} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="University of Tech" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs text-slate-400 uppercase tracking-wider">Department *</label>
                                <input type="text" name="department" value={member.department} onChange={(e) => handleMemberChange(idx, e)} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Computer Science" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs text-slate-400 uppercase tracking-wider">Current Year *</label>
                                <select name="year" value={member.year} onChange={(e) => handleMemberChange(idx, e)} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none [&>option]:bg-slate-900">
                                  <option value="" disabled>Select Year</option>
                                  <option value="1">1st Year</option>
                                  <option value="2">2nd Year</option>
                                  <option value="3">3rd Year</option>
                                  <option value="4">4th Year</option>
                                  <option value="Graduated">Graduated</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {members.length < 3 && (
                        <button
                          type="button"
                          onClick={addMember}
                          className="w-full py-4 bg-white/5 hover:bg-white/10 border-2 border-dashed border-white/20 rounded-2xl text-primary-light hover:text-white hover:border-primary/40 transition-all flex items-center justify-center gap-2 font-semibold text-lg"
                        >
                          <Plus size={20} /> Add Teammate
                        </button>
                      )}
                    </div>

                    {/* Step 3: Payment */}
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xl font-bold text-white">
                        <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light text-sm">3</span>
                        Payment
                      </div>
                      
                      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 md:flex md:gap-8 items-center">
                        <div className="flex-1 mb-8 md:mb-0 space-y-4">
                          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                            <CreditCard className="text-accent" />
                            Pay Registration Fee
                          </h4>
                          <p className="text-slate-300 leading-relaxed text-sm">
                            Scan the QR code to pay the <strong className="text-white text-lg">₹199</strong> registration fee. The payment will go directly to <strong>Dinesh</strong>. Once completed, upload the success screenshot below.
                          </p>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <CheckCircle2 size={16} className="text-green-500" /> Supports GPay, PhonePe, Paytm
                          </div>
                        </div>
                        
                        <div className="shrink-0 bg-white p-3 rounded-2xl mx-auto w-fit shadow-xl rotate-1 hover:rotate-0 transition-transform">
                          <img 
                            src="/payment-qr.jpeg" 
                            alt="Payment QR Code for Dinesh" 
                            width={160} 
                            height={160}
                            className="rounded-xl object-contain h-[160px] w-[160px]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <label className="text-sm text-slate-300 font-medium">Upload Payment Screenshot *</label>
                        <div className="relative">
                          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="screenshot-upload" />
                          <label 
                            htmlFor="screenshot-upload"
                            className={cn(
                              "flex items-center justify-center w-full p-6 border-2 border-dashed rounded-2xl cursor-pointer transition-colors bg-white/[0.02]",
                              screenshot ? "border-green-500/50 bg-green-500/10 text-green-400" : "border-white/20 hover:border-primary/50 text-slate-400 hover:text-white"
                            )}
                          >
                            <div className="flex flex-col items-center gap-3">
                              {screenshot ? <CheckCircle2 size={32} /> : <Upload size={32} className="text-primary-light" />}
                              <span className="font-medium">
                                {screenshot ? screenshot.name : "Click to select your screenshot"}
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 group relative inline-flex items-center justify-center gap-2 px-8 py-5 font-bold text-white text-lg bg-gradient-to-r from-primary to-accent rounded-2xl overflow-hidden shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="relative flex items-center gap-2">
                        {isSubmitting ? "Submitting Application..." : "Complete Registration"}
                        {!isSubmitting && <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />}
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-green-400 w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-4">Registration Successful!</h3>
                      <p className="text-slate-400 max-w-md mx-auto text-lg leading-relaxed">
                        We've received your team's application and payment screenshot. Keep an eye on your email for further details!
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setMembers([{ ...initialMemberState } as any]);
                        setTeamName("");
                        setScreenshot(null);
                      }}
                      className="text-primary-light hover:text-white transition-colors underline font-medium mt-8"
                    >
                      Submit another application
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
