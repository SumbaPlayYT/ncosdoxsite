"use client";

import React, { useState } from "react";
import Image from "next/image";

interface YouTubeVideoPlayerProps {
  videoId?: string;
  startTime?: number;
  title?: string;
}

export default function YouTubeVideoPlayer({
  videoId = "OKuEhhY_63M",
  startTime = 86,
  title = "Интервью: Здоровье, омоложение и нано-космецевтика COSDOX",
}: YouTubeVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?start=${startTime}&autoplay=1&rel=0`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative w-full mx-auto pb-4 pt-2">
      {/* Notch capsule for Mobile layout */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center lg:hidden shadow-inner">
        <div className="w-8 h-1 bg-gray-800 rounded-full" />
        <div className="w-1.5 h-1.5 bg-blue-900/30 rounded-full ml-2" />
      </div>

      {/* Main Mockup Container (Laptop frame on desktop, responsive card on mobile) */}
      <div
        className="relative w-full mx-auto select-none transition-all duration-500 bg-black overflow-hidden
          aspect-[16/10] rounded-[2.2rem] border-[8px] border-white dark:border-sage-950 shadow-[0_20px_50px_rgba(11,69,40,0.25)]
          lg:aspect-[16/10] lg:rounded-t-[1.5rem] lg:rounded-b-none lg:border-[12px] lg:border-gray-800 lg:bg-[#0c0c0c]"
      >
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0 relative z-20"
          />
        ) : (
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {/* Thumbnail background */}
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:from-black/70 transition-opacity duration-300" />

            {/* Glossy screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />

            {/* YouTube Badge at Top */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold tracking-wide uppercase shadow-md backdrop-blur-sm">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YouTube Подкаст</span>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button className="w-16 h-16 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 active:scale-95 relative">
                <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {/* Pulsing Ring */}
                <span className="absolute -inset-2 rounded-full border border-red-500/50 animate-ping opacity-75 pointer-events-none" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
              <span className="text-xs text-red-400 font-bold uppercase tracking-wider block mb-1 font-sans">
                Большое интервью
              </span>
              <p className="text-sm sm:text-base font-serif font-bold text-white leading-snug drop-shadow-md">
                {title}
              </p>
              <p className="text-xs text-white/70 font-sans mt-0.5">
                Нажмите, чтобы смотреть со 2-й минуты (1:26)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Laptop Keyboard Base (Desktop Only) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-[0px] w-[108%] h-[16px] bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 rounded-b-xl border-t border-gray-400 shadow-[0_12px_25px_rgba(0,0,0,0.4)] z-30">
        {/* Trackpad Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-400/40 rounded-b" />
        <div className="absolute -bottom-1 left-[10%] right-[10%] h-1 bg-black/40 blur-[2px]" />
      </div>
    </div>
  );
}
