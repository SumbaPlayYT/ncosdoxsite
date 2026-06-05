"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Play, Sparkles, Award } from "@/components/Icons";
import { EXPERT_INFO } from "@/config";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-sage-50 relative overflow-hidden">
      {/* Absolute Decorative Circles */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images & Visual Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-[400px] lg:max-w-none mx-auto rounded-3xl overflow-hidden shadow-xl border-8 border-white bg-white">
              <Image
                src="/images/shnarai_president.jpg"
                alt="Шнарай и основатель COSDOX господин Хван Джин Ок"
                fill
                className="object-cover object-center"
                sizes="(max-w-7xl) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Premium Glassmorphism Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/50 shadow-lg text-center z-10">
                <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold block mb-0.5">
                  Прямое сотрудничество
                </span>
                <p className="text-xs text-sage-950 font-serif font-bold leading-snug">
                  Шнарай и разработчик формул, президент COSDOX господин Хван Джин Ок
                </p>
              </div>
            </div>

            {/* Float Premium Card */}
            <motion.div
              className="absolute -top-6 -right-4 bg-emerald-500 text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-[200px] text-left border border-emerald-600"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>
              <p className="text-xs uppercase tracking-wider text-emerald-100 font-semibold font-sans">
                Философия
              </p>
              <p className="text-sm font-serif font-medium mt-1 leading-snug">
                «Здоровье изнутри отражается сиянием кожи снаружи»
              </p>
            </motion.div>
          </div>

          {/* Right Side: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans block">
                Ваш эксперт по красоте и здоровью
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-950 leading-tight">
                Позвольте представиться, <br />
                <span className="text-emerald-500">Шнарай</span>
              </h2>
              <div className="w-20 h-[3px] bg-emerald-500 mt-2" />
            </div>

            {/* Professional biography paragraphs */}
            <div className="space-y-4 text-[#171717]/85 text-sm sm:text-base font-sans font-light leading-relaxed">
              {EXPERT_INFO.bio.map((para, index) => (
                <p key={index} className="pl-4 border-l-2 border-sage-200 hover:border-emerald-500 transition-colors duration-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Credential highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-sage-200">
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-sage-950 font-sans">
                    Образование
                  </h4>
                  <p className="text-xs text-[#171717]/70 font-sans mt-0.5">
                    Медицинское
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-sage-950 font-sans">
                    Специализация
                  </h4>
                  <p className="text-xs text-[#171717]/70 font-sans mt-0.5">
                    Нано-космецевтика и иммунология
                  </p>
                </div>
              </div>
            </div>

            {/* Social handles CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={EXPERT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-emerald-500 border border-sage-200 text-xs font-bold uppercase tracking-wider font-sans hover:bg-sage-50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>cosdox.ala</span>
              </a>
              <a
                href={EXPERT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#171717] border border-sage-200 text-xs font-bold uppercase tracking-wider font-sans hover:bg-sage-50 transition-colors"
              >
                {/* Custom TikTok Svg Icon since Lucide doesn't have it */}
                <svg className="w-4 h-4 text-rose-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86.17 1.77.26 2.62.39v3.49c-.93-.19-1.89-.35-2.8-.62-.35-.09-.69-.22-1-.38v7.24a7.925 7.925 0 01-13.88 5.12 7.925 7.925 0 014.28-12.82c.04 1.48.5 2.94 1.34 4.14a4.341 4.341 0 00-1.84 5.3 4.341 4.341 0 006.49 1.94 4.341 4.341 0 001.29-2.9v-15.1z" />
                </svg>
                <span>@shnaraycosdox</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
