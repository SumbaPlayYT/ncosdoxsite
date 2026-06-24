"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  UserCheck, 
  Factory, 
  Award
} from "@/components/Icons";

export default function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden cream-gradient"
    >
      {/* Premium Ambient Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-gold-400/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Left - Brand Details */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-700 text-xs font-semibold uppercase tracking-wider font-sans"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              <span>Официальные данные о бренде</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-sage-950 leading-[1.2] tracking-tight">
                О бренде <span className="text-emerald-500 font-serif">COSDOX</span>
              </h1>
              <div className="w-16 h-[3px] bg-emerald-500" />
            </motion.div>

            {/* Brand Detailed Stack */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-sage-800">
              
              {/* 1. COSDOX в Казахстане */}
              <motion.div 
                variants={itemVariants}
                className="p-4 rounded-xl border border-sage-200/50 bg-white/70 backdrop-blur-sm shadow-sm flex gap-3.5 items-start hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/8 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-serif font-bold text-sage-950">
                    COSDOX в Казахстане
                  </h4>
                  <p className="text-xs text-[#171717]/80 leading-relaxed font-light">
                    Официальное представительство COSDOX в Казахстане — <strong>ТОО «COSDOX.KZ»</strong>, зарегистрированное в Алматы по адресу: ул. Богенбай батыра, 150. Руководитель представительства — Хван Джин Ок (Hwang Jin Ok).
                  </p>
                  <p className="text-xs text-[#171717]/80 leading-relaxed font-light">
                    Партнёром COSDOX в Казахстане является <strong>Шнарай</strong>, что способствует развитию локального присутствия бренда и доступности продукции на рынке Казахстана.
                  </p>
                </div>
              </motion.div>

              {/* 2. Штаб-квартира COSDOX */}
              <motion.div 
                variants={itemVariants}
                className="p-4 rounded-xl border border-sage-200/50 bg-white/70 backdrop-blur-sm shadow-sm flex gap-3.5 items-start hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/8 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Factory className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-serif font-bold text-sage-950">
                    Штаб-квартира COSDOX
                  </h4>
                  <p className="text-xs text-[#171717]/80 leading-relaxed font-light">
                    Головной офис COSDOX расположен в Сеуле, Республика Корея: 서울특별시 동작구 남부순환로 2053 (사당동), 1–2 этаж. Это подтверждает официальное присутствие бренда в Южной Корее и его связь с головной компанией. Генеральный директор COSDOX — Hwang Jin Ok.
                  </p>
                </div>
              </motion.div>

              {/* 3. Генеральный директор */}
              <motion.div 
                variants={itemVariants}
                className="p-4 rounded-xl border border-sage-200/50 bg-white/70 backdrop-blur-sm shadow-sm flex gap-3.5 items-start hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/8 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-serif font-bold text-sage-950">
                    Генеральный директор
                  </h4>
                  <p className="text-xs text-[#171717]/80 leading-relaxed font-light">
                    <strong>Hwang Jin Ok</strong> возглавляет COSDOX и участвует в формировании стратегии компании. Под его руководством бренд делает акцент на качестве продукции, инновационных разработках и расширении международного присутствия. Его подход основан на сочетании технологичности, научного подхода и философии осознанного ухода за кожей.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Highlights Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4 border-t border-sage-200/60"
            >
              <div className="flex gap-2.5">
                <Award className="w-4.5 h-4.5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[11px] font-semibold uppercase tracking-wider text-sage-950 font-sans">
                    Категория бренда
                  </h5>
                  <p className="text-[11px] text-[#171717]/70 font-sans mt-0.5 leading-snug">
                    Функциональная нанокосмецевтика
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Award className="w-4.5 h-4.5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[11px] font-semibold uppercase tracking-wider text-sage-950 font-sans">
                    Технологии
                  </h5>
                  <p className="text-[11px] text-[#171717]/70 font-sans mt-0.5 leading-snug">
                    Липосомальная трансдермальная доставка
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Right */}
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative w-full max-w-[420px] lg:max-w-none mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sage-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="https://www.cosdox.co.kr/img/about_img03.jpg"
                alt="COSDOX корейская косметика"
                fill
                priority
                className="object-cover object-center"
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
                  Официальное представительство в РК
                </div>
                <div className="text-sage-950 text-lg font-bold font-serif leading-tight">
                  ТОО «COSDOX.KZ»
                </div>
                <div className="text-sage-800 text-xs font-sans mt-1">
                  г. Алматы, ул. Богенбай батыра, 150
                </div>
              </motion.div>
            </motion.div>

            {/* Float Experience/Brand Indicator Right */}
            <motion.div
              className="absolute -top-6 -right-4 bg-[#c5a059] text-white p-4.5 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center font-sans tracking-wide text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            >
              <span className="text-2xl font-bold font-serif">100%</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider leading-none">
                Оригинал
              </span>
              <span className="text-[9px] text-white/90">из Южной Кореи</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
