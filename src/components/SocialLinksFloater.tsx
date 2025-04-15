"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function SocialLinksFloater() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start space-y-2">
      {/* Link do Instagram */}
      <motion.a
        href="https://www.instagram.com/borracharia937"
        aria-label="Instagram"
        className="flex items-center space-x-2 rounded bg-black/70 p-2 text-white shadow-lg transition-transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image 
          src="/img/-logo.png" 
          alt="Instagram" 
          width={30}
          height={30} 
          className="block"
        />
        <span className="text-xs">Instagram</span>
      </motion.a>
      
      {/* Link do Facebook */}
      <motion.a
        href="https://www.facebook.com/borracharia.do.borracheiro"
        aria-label="Facebook"
        className="flex items-center space-x-2 rounded bg-black/70 p-2 text-white shadow-lg transition-transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image 
          src="/img/facebook.png" 
          alt="Facebook" 
          width={30}
          height={30} 
          className="block"
        />
        <span className="text-xs">Facebook</span>
      </motion.a>
    </div>
  );
} 