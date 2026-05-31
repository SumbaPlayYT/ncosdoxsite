"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Sparkles,
  HeartPulse,
  UserCheck,
  Activity,
} from "@/components/Icons";
import { TRUST_CARDS } from "@/config";

export default function TrustPanel() {
  const icons = [
    <Award key="0" className="w-6 h-6 text-[#c5a059]" />,
    <GraduationCap key="1" className="w-6 h-6 text-[#c5a059]" />,
    <Sparkles key="2" className="w-6 h-6 text-[#c5a059]" />,
    <HeartPulse key="3" className="w-6 h-6 text-[#c5a059]" />,
    <UserCheck key="4" className="w-6 h-6 text-[#c5a059]" />,
    <Activity key="5" className="w-6 h-6 text-[#c5a059]" />,
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-white border-y border-sage-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Tagline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans mb-3">
            Почему доверяют Шнарай
          </h2>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-sage-950">
            Синергия доказательной медицины и инновационных нанотехнологий
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TRUST_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-sage-50/50 border border-sage-100 hover:border-emerald-500/20 hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-emerald-500/35 transition-all duration-300" />
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/10 transition-colors duration-300">
                  {icons[idx] || <Award className="w-6 h-6 text-[#c5a059]" />}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-serif text-sage-950 group-hover:text-emerald-700 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#171717]/70 leading-relaxed font-sans font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
