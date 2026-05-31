"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "@/components/Icons";
import { REVIEWS } from "@/config";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-sage-50 relative overflow-hidden">
      {/* Soft backgrounds */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans">
            Отзывы о результатах
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-950">
            Истории преображения кожи
          </h2>
          <p className="text-sm text-[#171717]/70 font-sans max-w-lg mx-auto">
            Опыт реальных клиентов, получивших индивидуальную схему ухода и прошедших путь оздоровления под моим наблюдением.
          </p>
        </div>

        {/* Dynamic Carousel Slide Container */}
        <div className="relative">
          <div className="absolute -top-10 left-6 text-emerald-500/10 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[3px]" />
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white rounded-3xl border border-sage-100 p-8 sm:p-12 shadow-xl text-left relative z-10 flex flex-col justify-between"
              >
                
                <div className="space-y-6">
                  {/* Gold Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#c5a059] text-[#c5a059]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base sm:text-lg text-sage-950 font-serif leading-relaxed italic">
                    «{REVIEWS[activeIndex].text}»
                  </p>
                </div>

                {/* Client Info & Timeframe */}
                <div className="pt-8 mt-8 border-t border-sage-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-sm">
                  <div>
                    <h4 className="font-bold text-sage-950 text-base">{REVIEWS[activeIndex].name}</h4>
                    <p className="text-xs text-sage-500 font-medium">Клиент эксперта Шнарай</p>
                  </div>
                  
                  {/* Monitoring Timeframe Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sage-50 border border-sage-100 text-emerald-800 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Период ведения: {REVIEWS[activeIndex].period}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-sage-200 bg-white flex items-center justify-center text-sage-800 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-emerald-500 w-6" : "bg-sage-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-sage-200 bg-white flex items-center justify-center text-sage-800 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
