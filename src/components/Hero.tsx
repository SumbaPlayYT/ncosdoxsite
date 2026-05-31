"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight } from "@/components/Icons";
import { EXPERT_INFO } from "@/config";

export default function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cream-gradient"
    >
      {/* Premium Ambient Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-gold-400/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content Left */}
          <motion.div
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-700 text-xs font-semibold uppercase tracking-wider font-sans"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Профессиональный медицинский подход</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-sage-950 leading-[1.1] tracking-tight">
                Красота без компромиссов:{" "}
                <span className="relative inline-block text-emerald-500">
                  липосомальный
                  <span className="absolute left-0 bottom-1 w-full h-[4px] bg-[#c5a059]/30 -skew-x-12" />
                </span>{" "}
                уход COSDOX
              </h1>
              <p className="text-lg sm:text-xl text-[#171717]/75 font-sans font-light leading-relaxed max-w-xl">
                Индивидуальный подбор средств премиум-класса и полное сопровождение от сертифицированного медицинского эксперта{" "}
                <span className="font-semibold text-emerald-600 font-serif">Шнарай</span> для сияния и здоровья вашей кожи.
              </p>
            </motion.div>

            {/* Bullet Points of Value */}
            <motion.ul variants={itemVariants} className="space-y-3.5 font-sans text-sm sm:text-base text-sage-800">
              <li className="flex items-start gap-3">
                <div className="w-5.5 h-5.5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>20+ лет опыта:</strong> медицинский подход фельдшера к диагностике состояния кожи.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5.5 h-5.5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Липосомальная доставка:</strong> активы глубокого проникновения от южнокорейского завода CNF.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5.5 h-5.5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Иммунный уход:</strong> оздоровление организма изнутри с трансфер факторами 4Life.
                </span>
              </li>
            </motion.ul>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white font-medium text-sm tracking-wider uppercase shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-300"
              >
                <span>Получить разбор кожи</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-emerald-700 font-medium text-sm tracking-wider uppercase border border-sage-200 hover:bg-sage-50 transition-colors duration-300"
              >
                Смотреть каталог
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image Right */}
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative w-full max-w-[420px] lg:max-w-none mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-sage-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="/images/shnarai1.jpg"
                alt="Эксперт Шнарай"
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-w-7xl) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Float Glass Badge Bottom Left */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel text-left shadow-lg border border-white/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="text-[#c5a059] text-xs font-bold uppercase tracking-wider font-sans">
                  Ваш эксперт по красоте
                </div>
                <div className="text-sage-950 text-xl font-bold font-serif leading-tight">
                  Шнарай
                </div>
                <div className="text-sage-800 text-xs font-sans mt-1">
                  Дипломированный фельдшер и топ-специалист COSDOX
                </div>
              </motion.div>
            </motion.div>

            {/* Float Experience Indicator Right */}
            <motion.div
              className="absolute -top-6 -right-4 bg-[#c5a059] text-white p-4.5 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center font-sans tracking-wide text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            >
              <span className="text-2xl font-bold font-serif">20+</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider leading-none">
                лет опыта
              </span>
              <span className="text-[9px] text-white/90">в медицине</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
