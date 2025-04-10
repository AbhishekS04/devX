'use client';

import {  Sparkles, Zap, Trophy,Smile } from 'lucide-react';
import Tag from "@/components/Tag";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/beautiful-scenery-mountain-lake_181624-34794.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/majestic-view-mountain-landscape_181624-34795.jpg?semt=ais_hybrid&w=740"
];

export default function ContentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-24 md:py-32">
      <div className="flex justify-center mb-6">
        <Tag>Moments</Tag>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Celebrating the<span className='text-lime-400'> achievements</span> of our community members.
          </h2>
          <p>
            Our community is thriving with incredible accomplishments from groundbreaking projects to innovative solutions, showcasing the talent and dedication of our members.
          </p>
        </div>

        {/* Fixed 16:9 Carousel */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden max-w-full md:max-w-5xl lg:max-w-4xl mx-auto">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={images[currentIndex]} // use image URL as unique key
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover grayscale"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-md p-2 rounded-full transition-all duration-300 shadow-lg w-10 h-10 flex items-center justify-center"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-md p-2 rounded-full transition-all duration-300 shadow-lg w-10 h-10 flex items-center justify-center"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Features Section */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          {[
            { icon: <Zap className="size- t text-lime-400" />, title: "Collaborative", desc: "It supports an entire helping developers and innovate." },
            { icon: <Trophy className="size- t text-lime-400" />, title: "Helpful", desc: "It supports an entire helping developers and businesses." },
            { icon: <Smile className="size- t text-lime-400" />, title: "Happiness", desc: "It supports an helping developers businesses innovate." },
            { icon: <Sparkles className="size- t text-lime-400" />, title: "AI Powered", desc: "It supports an helping developers businesses innovate." }
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2">
                {item.icon}
                <h3 className="text-sm font-medium">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
