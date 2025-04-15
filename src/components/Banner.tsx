"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-secondary">
      {/* Restauradas as imagens estáticas de fundo */}
      <div className="absolute inset-0">
        {/* Restaurada imagem específica para mobile */}
        <img
          src="/img/movel.png"
          alt="Borracharia"
          className="h-full w-full object-cover object-left-top md:hidden"
        />
        {/* Restaurada imagem específica para desktop */}
        <img
          src="/img/banner.jpg"
          alt="Borracharia Express"
          className="hidden h-full w-full object-cover object-center md:block"
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
          {/* Removido o h1 */}
          {/* <h1 className="...">...</h1> */}
          
          {/* Removido o p */}
          {/* <p className="...">...</p> */}
          
          {/* Removendo a div com os ícones sociais */}
          {/* <div className="mt-8 flex justify-center space-x-4"> ... </div> */}
          
          {/* Readicionado o botão "Entre em Contato" */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto mt-80 md:mt-8 flex items-center space-x-2 rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black transition-colors hover:bg-yellow-500 sm:text-lg"
            onClick={() => {
              const phoneNumber = "5545999588507"; // Adicionado código do país 55
              const message = "o que posso lhe ajudar";
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
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