"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Instagram } from "@/components/Icons";
import { EXPERT_INFO } from "@/config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Главная", href: "#hero" },
    { label: "Обо мне", href: "#about" },
    { label: "Технология", href: "#science" },
    { label: "Каталог", href: "#catalog" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
    { label: "Official site", href: "https://cosdox.co.kr", external: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fafaf6]/80 backdrop-blur-md shadow-sm border-b border-sage-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-emerald-500 font-serif">
              COSDOX
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] -mt-1 font-semibold">
              Эксперт Шнарай
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-[#171717]/85 hover:text-emerald-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={EXPERT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-500 hover:text-emerald-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={EXPERT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-500 hover:text-emerald-600 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href="#lead-form"
              onClick={(e) => handleLinkClick(e, "#lead-form")}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-emerald-500 text-white font-medium text-xs tracking-wider uppercase hover:bg-emerald-600 hover:shadow-md transition-all duration-200"
              id="header-cta-btn"
            >
              Консультация
            </a>
          </div>

          {/* Mobile Menu Burger Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={EXPERT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-500"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5.5 h-5.5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#171717] hover:text-emerald-500 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fafaf6] border-b border-sage-100 shadow-lg absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-base font-semibold text-[#171717] hover:text-emerald-500 transition-colors py-2 border-b border-sage-50"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-4 justify-between">
            <div className="flex items-center space-x-3">
              <a
                href={EXPERT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-sage-50 text-emerald-500"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={EXPERT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-sage-50 text-emerald-500"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#lead-form"
              onClick={(e) => handleLinkClick(e, "#lead-form")}
              className="flex-1 text-center bg-emerald-500 text-white py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-colors"
            >
              Консультация
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
