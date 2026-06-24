"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustPanel from "@/components/TrustPanel";
import About from "@/components/About";
import Science from "@/components/Science";
import ProductCatalog from "@/components/ProductCatalog";
import ConsultationSteps from "@/components/ConsultationSteps";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Header Sticky Nav */}
      <Header />

      <main className="flex-grow">
        {/* Modern Split-Layout Hero */}
        <Hero />

        {/* In-depth Medical Story Bio */}
        <About />

        {/* Core Clinical Trust Badges */}
        <TrustPanel />

        {/* Advanced Liposomal & Factory Science Section */}
        <Science />

        {/* Filterable Products Grid Catalog */}
        <ProductCatalog />

        {/* Steps Chronological Path Timeline */}
        <ConsultationSteps />

        {/* Animated Framer Accordion FAQ */}
        <FAQ />

        {/* Dual Column WhatsApp Lead Capture */}
        <LeadForm />

        {/* Premium Contacts Section */}
        <Contacts />
      </main>

      {/* Premium Dark Forest-Green Footer */}
      <Footer />
    </>
  );
}
