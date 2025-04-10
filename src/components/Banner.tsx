"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-secondary">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        {/* Imagem para mobile */}
        <img
          src="/img/movel.jpg"
          alt="Borracharia"
          className="h-full w-full object-cover object-center opacity-50 md:hidden"
        />
        {/* Imagem para desktop */}
        <img
          src="/img/banner.jpg"
          alt="Borracharia Express"
          className="hidden h-full w-full object-cover object-center opacity-50 md:block"
        />
      </div>

      {/* Conteúdo */}
      <div className="container-fluid relative flex h-full items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center text-black"
        >
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Sua Borracharia de Confiança
          </h1>
          <p className="mb-8 text-base sm:text-lg md:text-xl">
            Serviços de qualidade para seu veículo com atendimento rápido e eficiente.
            Estamos prontos para ajudar você 24 horas por dia.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto flex items-center space-x-2 rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black transition-colors hover:bg-yellow-500 sm:text-lg"
            onClick={() => {
              window.open('https://wa.me/554599588507', '_blank');
            }}
          >
            <span>Entre em Contato</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 