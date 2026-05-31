"use client";

import React from "react";
import { ArrowUp, Phone, Mail, MapPin, Instagram, MessageSquare } from "@/components/Icons";
import { EXPERT_INFO } from "@/config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-sage-950 text-sage-100 pt-16 pb-8 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Slogan */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold tracking-widest text-[#c5a059] font-serif">
                COSDOX
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-sage-300 font-semibold">
                Медицинский Эксперт Шнарай
              </span>
            </div>
            <p className="text-sm text-sage-300 max-w-sm leading-relaxed mb-6">
              Корейские нанотехнологии и липосомальный уход за кожей с заботой о вашем здоровье и качестве жизни. Красота, начинающаяся изнутри.
            </p>
            <div className="flex space-x-4">
              <a
                href={EXPERT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center text-sage-100 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={EXPERT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center text-sage-100 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-[#c5a059] mb-6">
              Навигация
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#hero" className="text-sage-300 hover:text-[#c5a059] transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="text-sage-300 hover:text-[#c5a059] transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#science" className="text-sage-300 hover:text-[#c5a059] transition-colors">
                  Технологии
                </a>
              </li>
              <li>
                <a href="#catalog" className="text-sage-300 hover:text-[#c5a059] transition-colors">
                  Каталог продукции
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sage-300 hover:text-[#c5a059] transition-colors">
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-sage-300 hover:text-[#c5a059] transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="https://www.cosdox.co.kr/ru/main/?setLang=kz" target="_blank" rel="noopener noreferrer" className="text-sage-300 hover:text-[#c5a059] transition-colors">
                  Official Site
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-[#c5a059] mb-6">
              Контакты
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3 text-sage-300">
                <Phone className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a href={`tel:${EXPERT_INFO.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {EXPERT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sage-300">
                <svg className="w-4 h-4 text-[#c5a059] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.011 2C6.485 2 2.002 6.482 2 12.008c0 1.765.459 3.486 1.332 5.002L2 22l5.122-1.343a9.988 9.988 0 004.887 1.28c5.526 0 10.009-4.482 10.011-10.008C22.022 6.483 17.538 2 12.011 2h0z" />
                </svg>
                <a href={EXPERT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Эксперта
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sage-300">
                <svg className="w-4 h-4 text-[#c5a059] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86.17 1.77.26 2.62.39v3.49c-.93-.19-1.89-.35-2.8-.62-.35-.09-.69-.22-1-.38v7.24a7.925 7.925 0 01-13.88 5.12 7.925 7.925 0 014.28-12.82c.04 1.48.5 2.94 1.34 4.14a4.341 4.341 0 00-1.84 5.3 4.341 4.341 0 006.49 1.94 4.341 4.341 0 001.29-2.9v-15.1z" />
                </svg>
                <a href={EXPERT_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @shnaraycosdox
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sage-300">
                <Instagram className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a href={EXPERT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @cosdox.ala
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sage-300">
                <Mail className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a href={`mailto:${EXPERT_INFO.email}`} className="hover:text-white transition-colors">
                  {EXPERT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sage-300">
                <MapPin className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>{EXPERT_INFO.location}</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1wTw6vR8L841FcH5bSVwrCqNdhVncuxbb/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                  id="footer-download-catalog"
                >
                  Скачать каталог
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sage-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xs text-sage-400 text-center md:text-left mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Cosdox Казахстан. Сделано с заботой 💛
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#privacy" className="hover:underline">Политика конфиденциальности</a>
              <a href="#offer" className="hover:underline">Публичная оферта</a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-white transition-colors"
            id="scroll-to-top-btn"
          >
            <span>Наверх</span>
            <div className="w-8 h-8 rounded-full border border-sage-800 flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
