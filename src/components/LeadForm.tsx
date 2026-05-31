"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, MessageSquare, ShieldCheck } from "@/components/Icons";
import { EXPERT_INFO } from "@/config";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    concern: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct rich text for WhatsApp
    const text = `Здравствуйте, Шнарай! Хочу записаться на индивидуальную консультацию по уходу за кожей.\n\nМои данные:\n• Имя: ${formData.name}\n• Возраст: ${formData.age} лет\n• Город: ${formData.city}\n• Мой вопрос / проблема кожи: ${formData.concern}`;
    
    const whatsappUrl = `${EXPERT_INFO.whatsappLink}?text=${encodeURIComponent(text)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="py-20 sm:py-24 bg-white relative">
      {/* Background design accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold-400/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container with premium grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 rounded-3xl bg-sage-50/50 border border-sage-100 overflow-hidden shadow-2xl">
          
          {/* Column 1: Aesthetic / Value Proposition */}
          <div className="lg:col-span-5 premium-gradient text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans">
                Индивидуальный разбор
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                Начните путь к сияющей коже
              </h3>
              <p className="text-xs sm:text-sm text-sage-300 font-sans font-light leading-relaxed">
                Заполните форму, и мы составим пошаговую персональную программу ухода COSDOX, которая решит именно ваши эстетические задачи.
              </p>
            </div>

            <div className="space-y-4 pt-12 relative z-10 font-sans text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">100% Конфиденциальность</h4>
                  <p className="text-sage-400 text-[10px]">Ваши данные передаются только эксперту</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Быстрый ответ в WhatsApp</h4>
                  <p className="text-sage-400 text-[10px]">Обычно я отвечаю в течение 30-60 минут</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form element */}
          <div className="lg:col-span-7 p-8 sm:p-10 text-left">
            <h4 className="text-xl font-serif font-bold text-sage-950 mb-6">
              Анкета для подбора ухода
            </h4>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h5 className="text-lg font-serif font-bold text-sage-950">Заявка успешно сформирована!</h5>
                <p className="text-sm text-[#171717]/70 font-sans leading-relaxed max-w-sm mx-auto">
                  Вы перенаправлены в WhatsApp. Если чат не открылся автоматически, пожалуйста, нажмите кнопку ниже:
                </p>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-colors mt-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Открыть WhatsApp еще раз
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-sage-800 font-bold block">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Например, Асель"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sage-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sage-950 font-sans transition-all duration-200"
                  />
                </div>

                {/* Age & City grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Age */}
                  <div className="space-y-1.5">
                    <label htmlFor="age" className="text-xs uppercase tracking-wider text-sage-800 font-bold block">
                      Возраст *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min="12"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Например, 32"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sage-950 font-sans transition-all duration-200"
                    />
                  </div>
                  {/* City */}
                  <div className="space-y-1.5">
                    <label htmlFor="city" className="text-xs uppercase tracking-wider text-sage-800 font-bold block">
                      Город проживания *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Например, Шымкент"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sage-950 font-sans transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Skin Concern / Question */}
                <div className="space-y-1.5">
                  <label htmlFor="concern" className="text-xs uppercase tracking-wider text-sage-800 font-bold block">
                    Какие проблемы кожи вас беспокоят? *
                  </label>
                  <textarea
                    id="concern"
                    name="concern"
                    required
                    rows={4}
                    value={formData.concern}
                    onChange={handleChange}
                    placeholder="Например: беспокоит сухость и мелкие морщинки вокруг глаз, хочу подобрать базовый липосомальный уход COSDOX..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sage-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sage-950 font-sans transition-all duration-200 resize-none"
                  />
                </div>

                {/* Privacy Agreement statement */}
                <p className="text-[10px] text-sage-500 leading-normal font-light">
                  Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности и обработкой персональных данных.
                </p>

                {/* Action button */}
                <button
                  type="submit"
                  id="lead-submit-btn"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest shadow hover:bg-emerald-600 hover:shadow-lg transition-all duration-300"
                >
                  <span>Отправить и открыть чат</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
