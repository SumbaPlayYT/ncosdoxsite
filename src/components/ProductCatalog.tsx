"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ShoppingBag, Eye } from "@/components/Icons";
import { PRODUCTS, Product, EXPERT_INFO } from "@/config";

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { key: "all", label: "Все продукты" },
    { key: "cleansing", label: "Очищение" },
    { key: "creams", label: "Кремы" },
    { key: "serums-toners", label: "Сыворотки & Тонеры" },
    { key: "special", label: "Спецпредложения" },
  ];

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (product: Product) => {
    const text = `Здравствуйте, Шнарай! Хочу заказать или проконсультироваться по поводу продукта: "${product.name} ${product.subname || ''}".`;
    return `${EXPERT_INFO.whatsappLink}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalog" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold font-sans">
            Каталог продукции COSDOX
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sage-950 mt-2">
            Высокоэффективный уход по категориям
          </h2>
          <p className="text-sm text-[#171717]/70 font-sans mt-3">
            Выберите средство для вашего типа кожи. Все продукты содержат передовые нанолипосомы для доставки в глубокие слои дермы.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider font-sans transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10"
                  : "bg-sage-50 text-sage-800 border border-sage-100 hover:bg-sage-100 hover:border-sage-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl bg-sage-50/30 border border-sage-100 overflow-hidden flex flex-col justify-between hover:bg-white hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Section */}
                <div className="relative aspect-square bg-white border-b border-sage-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-sage-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-5 py-2.5 rounded-full bg-white text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
                    >
                      <Eye className="w-4 h-4" />
                      Подробнее
                    </button>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    {product.badge && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3 h-3 text-gold-400" />
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold font-sans">
                        {categories.find(c => c.key === product.category)?.label || "Космецевтика"}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-sage-950 leading-snug group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h3>
                    {product.subname && (
                      <p className="text-[11px] uppercase tracking-wider text-sage-500 -mt-1 font-sans">
                        {product.subname}
                      </p>
                    )}
                    <p className="text-xs text-[#171717]/70 font-sans line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sage-100 flex items-center justify-end">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] hover:text-emerald-600 transition-colors font-sans flex items-center gap-1"
                    >
                      Подробнее &rarr;
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product Details Modal Dialog */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-sage-950/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-sage-100 shadow-2xl text-left"
              >
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center text-sage-800 hover:bg-emerald-500 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
                  {/* Left Column: Image */}
                  <div className="md:col-span-5 relative aspect-square bg-white border border-sage-50 rounded-2xl overflow-hidden self-start">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-contain p-6"
                      sizes="320px"
                    />
                  </div>

                  {/* Right Column: Complete Details */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold font-sans">
                        {categories.find(c => c.key === selectedProduct.category)?.label}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sage-950 leading-tight mt-1">
                        {selectedProduct.name}
                      </h3>
                      {selectedProduct.subname && (
                        <p className="text-xs uppercase tracking-widest text-sage-400 font-sans">
                          {selectedProduct.subname}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 rounded-xl bg-sage-50 flex items-center justify-center">
                      <a
                        href={getWhatsAppLink(selectedProduct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest shadow hover:bg-emerald-600 transition-colors text-center"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Заказать в WhatsApp
                      </a>
                    </div>

                    {/* Detailed Accordion Information */}
                    <div className="space-y-4 font-sans text-sm">
                      {/* Active Ingredients */}
                      <div className="space-y-2">
                        <h4 className="font-semibold uppercase tracking-wider text-sage-950 text-xs">Активные компоненты:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProduct.keyActives.map((active, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 rounded-lg bg-emerald-500/5 text-emerald-800 border border-emerald-500/10 text-xs font-medium"
                            >
                              {active}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Usage */}
                      <div className="space-y-1">
                        <h4 className="font-semibold uppercase tracking-wider text-sage-950 text-xs">Способ применения:</h4>
                        <p className="text-[#171717]/80 leading-relaxed font-light">{selectedProduct.usage}</p>
                      </div>

                      {/* Expected Result */}
                      <div className="space-y-1">
                        <h4 className="font-semibold uppercase tracking-wider text-sage-950 text-xs">Ожидаемый результат:</h4>
                        <p className="text-emerald-700 leading-relaxed font-semibold">{selectedProduct.result}</p>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
