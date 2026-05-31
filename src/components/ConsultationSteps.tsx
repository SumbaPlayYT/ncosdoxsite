"use client";

import React from "react";
import { motion } from "framer-motion";
import { CONSULTATION_STEPS } from "@/config";
import { User, ClipboardList, Sparkles, Box, CheckCircle } from "@/components/Icons";

export default function ConsultationSteps() {
  const icons = [
    <User key="0" className="w-5 h-5 text-white" />,
    <ClipboardList key="1" className="w-5 h-5 text-white" />,
    <Sparkles key="2" className="w-5 h-5 text-white" />,
    <Box key="3" className="w-5 h-5 text-white" />,
    <CheckCircle key="4" className="w-5 h-5 text-white" />,
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tagline */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans">
            Как мы будем работать
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-950">
            5 шагов к вашей идеальной коже
          </h2>
          <p className="text-sm text-[#171717]/70 font-sans max-w-md mx-auto">
            Моя система ведения клиентов построена на принципах заботы, медицинской точности и регулярного контроля прогресса.
          </p>
        </div>

        {/* Chronological Grid (Steps path) */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line for desktop */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-sage-100 hidden md:block z-0" />

          {CONSULTATION_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center space-y-4 group"
            >
              {/* Step indicator node */}
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center border-4 border-white group-hover:bg-emerald-500 shadow-md group-hover:shadow-emerald-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#c5a059] flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  {icons[idx] || step.step}
                </div>
              </div>

              {/* Card info */}
              <div className="p-5 rounded-2xl bg-sage-50/50 border border-sage-100 group-hover:bg-white group-hover:border-emerald-500/10 group-hover:shadow-lg transition-all duration-300 space-y-2 flex-1 w-full max-w-[260px] md:max-w-none flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5a059] block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold font-serif text-sage-950 group-hover:text-emerald-700 transition-colors mt-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#171717]/70 font-sans font-light leading-relaxed mt-2">
                    {step.description}
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
