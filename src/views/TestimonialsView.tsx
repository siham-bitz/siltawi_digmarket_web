/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from 'lucide-react';
import { testimonialsData } from '../data';

export const TestimonialsView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = testimonialsData.length;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
          ),
        5000 // Transition every 5 seconds
      );
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isPlaying, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div id="testimonials-view" className="space-y-20 py-12 pb-16">
      {/* 1. Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-10" id="testimonials-header">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
          What Our Clients Say
        </h1>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        <p className="font-sans text-brand-neutral text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          We treat our client milestones as our own yardstick of success. Read testimonies from local business operators.
        </p>
      </section>

      {/* 2. Interactive Testimonial Slider Canvas */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6" id="testimonials-slider-section">
        <div
          className="bg-white border border-gray-150 rounded-3xl p-8 sm:p-12 shadow-sm relative text-center"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          id="testimonials-slider-box"
        >
          {/* Decorative quote mark */}
          <div className="absolute top-6 left-6 text-brand-primary opacity-10 font-serif select-none">
            <Quote size={56} className="fill-current" />
          </div>

          <div className="min-h-[220px] flex flex-col justify-between" id="active-slider-canvas">
            {/* Slide animation boundary */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Visual Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-brand-accent fill-current" />
                  ))}
                </div>

                {/* Big Quote */}
                <blockquote className="font-display font-medium text-lg sm:text-xl text-brand-dark leading-relaxed italic px-4">
                  "{testimonialsData[currentIndex].quote}"
                </blockquote>

                {/* Avatar and Metadata */}
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 flex items-center justify-center border border-gray-100 shrink-0 font-display font-black text-brand-primary text-lg select-none uppercase shadow-inner">
                    {testimonialsData[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <div className="font-sans font-bold text-sm text-brand-dark">
                      {testimonialsData[currentIndex].author}
                    </div>
                    <div className="font-sans text-xs text-brand-neutral">
                      {testimonialsData[currentIndex].role}, <span className="text-brand-secondary font-semibold">{testimonialsData[currentIndex].company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider controls: Prev, Autoplay state, Next */}
            <div className="flex justify-between items-center pt-8 mt-6 border-t border-gray-100">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center text-brand-neutral hover:text-brand-primary hover:border-brand-primary cursor-pointer hover:shadow-sm"
                aria-label="Previous testimonial"
                id="slider-prev-btn"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Autoplay Play/Pause feedback state */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gray-50 text-brand-neutral hover:text-brand-primary text-xs font-mono transition-colors duration-200 cursor-pointer"
                id="slider-playpause-btn"
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>{isPlaying ? 'Auto-playing' : 'Paused'}</span>
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center text-brand-neutral hover:text-brand-primary hover:border-brand-primary cursor-pointer hover:shadow-sm"
                aria-label="Next testimonial"
                id="slider-next-btn"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Static Testimonial Grid detailing all feedback lists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="testimonials-supplemental-grid">
        <h3 className="text-center font-display font-bold text-xl text-brand-dark mb-8">
          Detailed Partner Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((client) => (
            <div
              key={client.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm text-left flex flex-col justify-between space-y-6"
              id={`static-feedback-box-${client.id}`}
            >
              <div className="space-y-4">
                <div className="flex space-x-1 text-brand-accent">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current shrink-0" />
                  ))}
                </div>
                <p className="font-sans text-sm text-brand-neutral leading-relaxed">
                  "{client.quote}"
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 flex items-center justify-center border border-gray-100 shrink-0 font-display font-black text-brand-primary text-xs select-none uppercase shadow-inner">
                  {client.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-sans font-bold text-xs text-brand-dark">{client.author}</div>
                  <div className="font-sans text-[10px] text-brand-neutral">
                    {client.role}, <span className="text-brand-secondary font-semibold">{client.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
