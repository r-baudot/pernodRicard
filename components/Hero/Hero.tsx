"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { HeroSlide } from "@/types";

interface HeroProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  showProgressBar?: boolean;
  showControls?: boolean;
  controlsPosition?: 'left' | 'right';
}

export function Hero({
  slides,
  autoPlayInterval = 5000,
  showProgressBar = true,
  showControls = true,
  controlsPosition = 'right'
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setProgress(0);
    let currentProgress = 0;

    // Progress bar animation
    progressIntervalRef.current = setInterval(() => {
      currentProgress += 100 / (autoPlayInterval / 50);
      setProgress(currentProgress);
    }, 50);

    // Slide change
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
  }, [autoPlayInterval, slides.length]);

  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  useEffect(() => {
    isPlaying ? startAutoPlay() : stopAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, [isPlaying, currentSlide, startAutoPlay]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (isPlaying) startAutoPlay();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (isPlaying) startAutoPlay();
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-[1024px] px-4 lg:px-8 text-white">
              <h1 className="text-[42px] md:text-[48px] font-serif font-bold mb-4 animate-fadeIn leading-[1.2em]">
                {slide.title}
              </h1>
              <p className="text-[18px] md:text-[20px] mb-8 animate-fadeIn animation-delay-200 leading-[1.2em]">
                {slide.subtitle}
              </p>
              {slide.ctaText && slide.ctaLink && (
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors animate-fadeIn animation-delay-400"
                >
                  {slide.ctaText}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar + Controls - Bottom */}
      {(showProgressBar || showControls) && (
        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
          <div className="w-full max-w-[1024px] px-4 lg:px-8">
            {/* Progress Bar - Segmented */}
            {showProgressBar && (
              <div className="mb-4">
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
                    >
                      <div
                        className={`h-full transition-all ease-linear ${
                          index === currentSlide ? "duration-100" : "duration-300"
                        }`}
                        style={{
                          width:
                            index < currentSlide
                              ? "100%"
                              : index === currentSlide
                              ? `${progress}%`
                              : "0%",
                          backgroundColor:
                            index === currentSlide ? "#EA4E14" : "#FFFFFF",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Controls */}
            {showControls && (
              <div className={`flex ${controlsPosition === 'left' ? 'justify-start' : 'justify-end'} items-center gap-3 pb-8`}>
                {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Left Arrow */}
            <button
              onClick={goToPrevSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Slide Counter */}
            <div className="flex items-center text-white text-sm font-medium px-2">
              <span>{String(currentSlide + 1).padStart(2, "0")}</span>
              <span className="mx-2 opacity-50">/</span>
              <span className="opacity-50">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNextSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
