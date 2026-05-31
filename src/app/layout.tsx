import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Шнарай — Эксперт COSDOX | Индивидуальный подбор ухода и здоровья",
  description: "Инновационная липосомальная косметика COSDOX и трансфер факторы 4Life. Персональные консультации от медицинского эксперта Шнарай с опытом более 20 лет.",
  keywords: "корейская косметика cosdox, skindox, трансфер факторы 4life, Шнарай, индивидуальный подбор ухода, здоровье кожи, липосомный уход, косметология",
  authors: [{ name: "Шнарай" }],
  openGraph: {
    title: "Шнарай — Липосомальный уход COSDOX & Иммунитет 4Life",
    description: "Медицинский подход к красоте и здоровью кожи. Получите персональную схему ухода и сопровождение от эксперта с медицинским образованием.",
    url: "https://skindoxcosdox.kz/",
    type: "website",
    images: [
      {
        url: "/images/shnarai1.jpg",
        width: 1200,
        height: 630,
        alt: "Шнарай — Эксперт по уходу за кожей",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fafaf6] text-[#171717] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
