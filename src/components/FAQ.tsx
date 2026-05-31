"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "@/components/Icons";
import { FAQ_ITEMS } from "@/config";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-sage-50 relative overflow-hidden">
      {/* Blurred decorative spots */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans">
            Ответы на популярные вопросы
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-950">
            Часто задаваемые вопросы (FAQ)
          </h2>
          <p className="text-sm text-[#171717]/70 font-sans max-w-md mx-auto">
            Ознакомьтесь с подробными ответами на важные вопросы о технологии COSDOX, ведении клиентов и результатах.
          </p>
        </div>

        {/* Collapsible Accordion Group */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-emerald-500/20 shadow-md"
                    : "bg-white/60 border-sage-100 hover:bg-white hover:border-sage-200"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isOpen ? "bg-emerald-500/10 text-emerald-600" : "bg-sage-100 text-sage-500"
                    }`}>
                      <HelpCircle className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <span className="font-serif font-bold text-[#171717] text-base sm:text-lg leading-snug">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Expanding toggle indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    isOpen
                      ? "border-emerald-500/20 bg-emerald-500 text-white"
                      : "border-sage-200 text-sage-600"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Collapsible Details Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-[#171717]/85 font-sans font-light text-sm sm:text-base leading-relaxed border-t border-sage-50">
                    <p className="pl-12">{item.answer}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
