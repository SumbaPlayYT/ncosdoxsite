"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dna, Factory, BadgeCheck, Zap } from "@/components/Icons";

export default function Science() {
  const technologies = [
    {
      icon: <Dna className="w-8 h-8 text-emerald-500" />,
      title: "Липосомальный транспорт",
      description: "Активные вещества (пептиды, витамины) упакованы в микросферы - нанолипосомы. Они легко преодолевают липидный барьер кожи и высвобождают питательные элементы на уровне глубоких слоев дермы, повышая биодоступность в 10 раз.",
    },
    {
      icon: <Factory className="w-8 h-8 text-emerald-500" />,
      title: "Завод CNF (Южная Корея)",
      description: "Продукция разрабатывается и производится на одном из самых передовых научно-производственных предприятий Южной Кореи — CNF Factory. Это технологический хаб, создающий косметику для люксовых мировых брендов.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-emerald-500" />,
      title: "Стандарты CGMP & ISO",
      description: "CNF Factory сертифицирован по строжайшим международным протоколам ISO 22716 и CGMP (Current Good Manufacturing Practice). Это гарантирует аптечную стерильность, контроль сырья и стабильность формул.",
    },
  ];

  return (
    <section id="science" className="py-20 sm:py-24 premium-gradient text-white relative overflow-hidden">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Blurred spots */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-gold-400/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-bold font-sans">
            Научные инновации в уходе
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Секрет эффективности COSDOX
          </h2>
          <p className="text-sm sm:text-base text-sage-300 font-sans font-light leading-relaxed max-w-xl mx-auto">
            В отличие от масс-маркета, который работает лишь на поверхности рогового слоя, COSDOX внедряет глубокие клеточные технологии нано-доставки.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl glass-panel-dark border border-white/5 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="space-y-6">
                {/* Tech Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/15 transition-all duration-300">
                  {tech.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#c5a059] transition-colors duration-200">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-sage-300 leading-relaxed font-sans font-light">
                    {tech.description}
                  </p>
                </div>
              </div>

              {/* Bottom Visual Tag */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-sage-400 font-sans">
                <span className="uppercase tracking-widest text-[#c5a059] font-semibold">Нанотехнология</span>
                <span className="flex items-center gap-1 font-light">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  Активная фаза
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparative Illustration / Interactive Fact */}
        <motion.div
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c5a059]/20 text-[#c5a059] text-xs font-semibold uppercase tracking-wider font-sans">
              Сравнительный анализ
            </div>
            <h3 className="text-2xl font-serif font-bold">Обычный крем VS Липосомальный COSDOX</h3>
            <p className="text-sm text-sage-300 leading-relaxed font-sans font-light">
              Молекулы коллагена и гиалуроновой кислоты в обычных кремах слишком велики (более 3000 кДа) и физически не могут преодолеть кожный барьер. Липосомы COSDOX имеют нано-размер (100–120 нм), проникают сквозь межклеточные промежутки и доставляют пептидные комплексы прямо к фибробластам для выработки собственного коллагена.
            </p>
          </div>
          {/* Visual Percentage Circles */}
          <div className="flex gap-8 justify-center flex-shrink-0">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white/10 flex items-center justify-center relative">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-sage-400">8%</span>
              </div>
              <span className="text-xs text-sage-400 font-sans mt-3">Эффективность обычного крема</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-emerald-500 flex items-center justify-center relative bg-emerald-500/10 shadow-lg shadow-emerald-500/20">
                {/* Circular glow */}
                <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping pointer-events-none" />
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#c5a059]">92%</span>
              </div>
              <span className="text-xs text-[#c5a059] font-sans font-semibold mt-3">Эффективность COSDOX</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
