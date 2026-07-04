"use client";

import React, { useRef, useState, useEffect } from "react";

interface CustomVideoPlayerProps {
  src: string;
}

export default function CustomVideoPlayer({ src }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto-hide controls after 3 seconds of inactivity when playing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isPlaying && showControls) {
      timeoutId = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isPlaying, showControls]);

  // Handle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch((err) => {
        console.error("Error playing video:", err);
      });
      setIsPlaying(true);
    }
    setShowControls(true);
  };

  // Handle time update
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    if (!duration && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  // Handle loaded metadata
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  // Handle video end
  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  // Handle progress bar click/change
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Handle mute/unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    const muted = !isMuted;
    videoRef.current.muted = muted;
    setIsMuted(muted);
    if (!muted && volume === 0) {
      setVolume(0.5);
      videoRef.current.volume = 0.5;
    }
  };

  // Handle volume slider change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    videoRef.current.volume = vol;
    setIsMuted(vol === 0);
    videoRef.current.muted = vol === 0;
  };

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error("Fullscreen error:", err);
      });
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Update fullscreen state on escape key or manual exit
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Format time (mm:ss)
  const formatTime = (time: number) => {
    if (isNaN(time) || time <= 0) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Format remaining time (-mm:ss)
  const formatRemainingTime = (time: number) => {
    if (isNaN(time) || time <= 0) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formatted = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    return `-${formatted}`;
  };

  const remainingTime = Math.max(0, duration - currentTime);

  return (
    <div className="relative w-full mx-auto pb-4 pt-2">
      {/* Notch capsule for Phone layout (Mobile only) */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center lg:hidden shadow-inner">
        <div className="w-8 h-1 bg-gray-800 rounded-full" />
        <div className="w-1.5 h-1.5 bg-blue-900/30 rounded-full ml-2" />
      </div>

      {/* Main Mockup Container (Responsive: Phone on mobile, Laptop screen on desktop) */}
      <div
        ref={containerRef}
        className="relative w-full mx-auto select-none transition-all duration-500 bg-black overflow-hidden
          aspect-[9/16] rounded-[2.2rem] border-[8px] border-white dark:border-sage-950 shadow-[0_20px_50px_rgba(11,69,40,0.25)]
          lg:aspect-[16/10] lg:rounded-t-[1.5rem] lg:rounded-b-none lg:border-[12px] lg:border-gray-800 lg:bg-[#0c0c0c]"
        onMouseMove={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Main Video Element (object-cover on all screens to stretch and fill the mockup space completely) */}
        <video
          ref={videoRef}
          src={src}
          className="relative w-full h-full object-cover cursor-pointer z-10"
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onDurationChange={handleLoadedMetadata}
          onEnded={handleVideoEnded}
          preload="metadata"
          playsInline
        />

        {/* Glossy screen glare reflection (Premium look) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-white/8 pointer-events-none z-20" />

        {/* Dark Vignette Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100 z-10"
        />

        {/* Play/Pause Center Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 z-20 ${
            isPlaying && !showControls ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={togglePlay}
            className="pointer-events-auto w-16 h-16 rounded-full flex items-center justify-center bg-[#c5a059] hover:bg-[#d4b574] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group/btn relative"
          >
            {isPlaying ? (
              // Pause Icon
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              // Play Icon
              <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
            {/* Pulsing ring animation when paused */}
            {!isPlaying && (
              <span className="absolute -inset-2 rounded-full border border-[#c5a059]/40 animate-ping opacity-75 pointer-events-none" />
            )}
          </button>
        </div>

        {/* Custom Bottom Control Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-5 pt-10 pb-6 transition-all duration-300 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-3 pointer-events-auto z-20 ${
            showControls ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          {/* Progress Bar Container */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="relative flex items-center group/progress cursor-pointer">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                disabled={!duration}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#c5a059] outline-none transition-all duration-200 group-hover/progress:h-1.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 disabled:opacity-50"
                style={{
                  background: `linear-gradient(to right, #c5a059 0%, #c5a059 ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, rgba(255, 255, 255, 0.2) ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, rgba(255, 255, 255, 0.2) 100%)`,
                }}
              />
            </div>
            {/* Time indicator */}
            <div className="flex justify-between text-[10px] text-white/80 font-sans tracking-wide">
              <span>{formatTime(currentTime)}</span>
              <span>{formatRemainingTime(remainingTime)}</span>
            </div>
          </div>

          {/* Action Controls Row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="text-white hover:text-[#c5a059] transition-colors"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Mute/Volume Control Group */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#c5a059] transition-colors"
                >
                  {isMuted || volume === 0 ? (
                    // Mute Icon
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M6.5 18H4.5a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 014.5 6h2l5.244-3.062a.75.75 0 011.156.646v16.832a.75.75 0 01-1.156.646L6.5 18z" />
                    </svg>
                  ) : volume < 0.5 ? (
                    // Low Volume Icon
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  ) : (
                    // High Volume Icon
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.53 8.47a3.5 3.5 0 010 5.06m2.47-7.53a7 7 0 010 9.9" />
                    </svg>
                  )}
                </button>
                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#c5a059] outline-none transition-all duration-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
                  style={{
                    background: `linear-gradient(to right, #c5a059 0%, #c5a059 ${
                      (isMuted ? 0 : volume) * 100
                    }%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) 100%)`,
                  }}
                />
              </div>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-[#c5a059] transition-colors"
            >
              {isFullscreen ? (
                // Exit Fullscreen Icon
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3 3m12 6V4.5M15 9h4.5M15 9l6-6m-6 12v4.5M15 15h4.5M15 15l6 6m-6-6l-6 6m6-6H4.5" />
                </svg>
              ) : (
                // Enter Fullscreen Icon
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Laptop Keyboard Base (Desktop Only) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-[0px] w-[108%] h-[16px] bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 rounded-b-xl border-t border-gray-400 shadow-[0_12px_25px_rgba(0,0,0,0.4)] z-30">
        {/* Trackpad Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-400/40 rounded-b" />
        {/* Rubber feet shadow helper */}
        <div className="absolute -bottom-1 left-[10%] right-[10%] h-1 bg-black/40 blur-[2px]" />
      </div>
    </div>
  );
}
