"use client";

import React from "react";
import { EXPERT_INFO } from "@/config";

export default function Contacts() {
  const contactMethods = [
    {
      name: "Телефон",
      value: EXPERT_INFO.phone,
      href: `tel:${EXPERT_INFO.phone.replace(/\s/g, "")}`,
      icon: (
        <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.118-3.852-6.675-6.675l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      bg: "bg-[#c5a059]/5 hover:bg-[#c5a059]/10",
      border: "border-[#c5a059]/10 hover:border-[#c5a059]/30",
    },
    {
      name: "WhatsApp",
      value: "Написать эксперту",
      href: EXPERT_INFO.whatsappLink,
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 2.01.597 3.878 1.626 5.438L2.07 22l4.733-1.242A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.78 13.918c-.225.633-1.303 1.174-1.8 1.21-1.04.078-2.392-.284-4.887-1.316-2.528-1.045-4.148-3.6-4.274-3.768-.125-.169-.92-1.22-.92-2.33 0-1.11.579-1.656.786-1.874.207-.218.455-.272.607-.272.152 0 .304.002.437.008.138.006.326-.053.51.353.189.418.647 1.575.704 1.688.056.113.094.244.019.394-.076.15-.113.244-.226.376-.112.13-.238.293-.34.394-.112.113-.23.237-.098.463.132.225.586.966 1.258 1.564.867.772 1.597 1.01 1.823 1.123.226.113.357.094.49-.056.13-.15.563-.656.713-.881.15-.225.3-.188.506-.113.206.075 1.31.618 1.536.73.225.114.375.169.43.264.056.095.056.55-.169 1.183z" clipRule="evenodd" />
        </svg>
      ),
      bg: "bg-emerald-50/50 hover:bg-emerald-50",
      border: "border-emerald-500/10 hover:border-emerald-500/30",
    },
    {
      name: "TikTok",
      value: "@shnaraycosdox",
      href: EXPERT_INFO.tiktok,
      icon: (
        <svg className="w-6 h-6 text-[#171717]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86.17 1.77.26 2.62.39v3.49c-.93-.19-1.89-.35-2.8-.62-.35-.09-.69-.22-1-.38v7.24a7.925 7.925 0 01-13.88 5.12 7.925 7.925 0 014.28-12.82c.04 1.48.5 2.94 1.34 4.14a4.341 4.341 0 00-1.84 5.3 4.341 4.341 0 006.49 1.94 4.341 4.341 0 001.29-2.9v-15.1z" />
        </svg>
      ),
      bg: "bg-neutral-50 hover:bg-neutral-100/80",
      border: "border-neutral-200 hover:border-neutral-400",
    },
    {
      name: "Instagram",
      value: "@cosdox.ala",
      href: EXPERT_INFO.instagram,
      icon: (
        <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      bg: "bg-rose-500/5 hover:bg-rose-500/10",
      border: "border-rose-500/10 hover:border-rose-500/30",
    },
    {
      name: "Email",
      value: EXPERT_INFO.email,
      href: `mailto:${EXPERT_INFO.email}`,
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      bg: "bg-emerald-500/5 hover:bg-emerald-500/10",
      border: "border-emerald-500/10 hover:border-emerald-500/30",
    },
  ];

  return (
    <section id="contacts" className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-sage-100">
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans">
            Связь с экспертом
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-950 mt-2">
            Контакты
          </h2>
          <div className="w-20 h-[3px] bg-emerald-500 mx-auto mt-4" />
          <p className="text-sm text-[#171717]/70 font-sans mt-5">
            Выберите удобный для вас способ связи. Я всегда готова помочь вам подобрать идеальный уход или ответить на интересующие вопросы.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              target={method.name !== "Телефон" && method.name !== "Email" ? "_blank" : undefined}
              rel={method.name !== "Телефон" && method.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`flex flex-col items-center text-center p-6 rounded-2xl border ${method.border} ${method.bg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group`}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-sage-100 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-xs uppercase tracking-widest text-sage-500 font-bold font-sans mt-4">
                {method.name}
              </h3>
              <p className="text-sm font-medium text-sage-950 mt-1 break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Official Website Banner */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#fafaf6] border border-sage-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#c5a059]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253m0 0A17.919 17.919 0 0012 16.5c3.162 0 6.133.815 8.716 2.247m0 0A9.015 9.015 0 003 12c0 .778.099 1.533.284 2.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-sage-950">
                  Официальный сайт COSDOX в Корее
                </h3>
                <p className="text-xs text-sage-500 font-sans mt-0.5">
                  Узнайте больше о научных разработках и глобальном бренде.
                </p>
              </div>
            </div>
            <a
              href="https://www.cosdox.co.kr/ru/main/?setLang=kz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors font-sans whitespace-nowrap"
            >
              Перейти на cosdox.co.kr &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
