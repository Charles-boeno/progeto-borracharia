"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    role: "Motorista Profissional",
    content: "Excelente atendimento! Resolveram o problema do meu pneu rapidamente e com qualidade. Recomendo a todos.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Empresária",
    content: "Serviço de primeira linha. A equipe é muito profissional e o atendimento 24h já me salvou várias vezes.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Pedro Costa",
    role: "Taxista",
    content: "Preço justo e serviço rápido. A melhor borracharia da região, sem dúvida!",
    image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=150&h=150&fit=crop&crop=faces",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-zinc-50 py-4 py-md-5">
      <div className="container-fluid">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center text-4xl font-bold text-zinc-900"
        >
          O Que Nossos Clientes Dizem
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-yellow-500">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative max-w-3xl text-center">
                <Quote className="absolute -left-4 -top-4 h-8 w-8 text-yellow-500 opacity-25" />
                <p className="mb-6 text-xl text-zinc-700">
                  {testimonials[currentIndex].content}
                </p>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-zinc-500">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="rounded-full bg-white p-2 text-zinc-700 shadow-lg transition-colors hover:bg-yellow-500 hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="rounded-full bg-white p-2 text-zinc-700 shadow-lg transition-colors hover:bg-yellow-500 hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-yellow-500" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
