"use client";

import { Facebook, Instagram, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-400">
      <div className="container-fluid py-4 py-md-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white">
              Borracharia Express
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Sua melhor opção em serviços automotivos e pneus na região.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/borracharia.do.borracheiro"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-400 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/borracharia937"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-400 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/554599588507"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-400 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white">
              Horário de Funcionamento
            </h3>
            <p className="mb-1 sm:mb-2 text-sm sm:text-base">Segunda a Sexta: 8h às 18h</p>
            <p className="mb-1 sm:mb-2 text-sm sm:text-base">Sábado: 8h às 12h</p>
            <p className="text-sm sm:text-base">Plantão 24h para emergências</p>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white">Contato</h3>
            <div className="mb-1 sm:mb-2 flex items-center space-x-2">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base">(45) 9958-8507</span>
            </div>
            <div className="mb-1 sm:mb-2 flex items-center space-x-2">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base">contato@borrachariaexpress.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base">Rua Carlos Sbaraine, 2264 - Jardim Panorama, Toledo - PR</span>
            </div>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white">
              Formas de Pagamento
            </h3>
            <ul className="text-sm sm:text-base">
              <li className="mb-1 sm:mb-2">Cartões de Crédito</li>
              <li className="mb-1 sm:mb-2">Cartões de Débito</li>
              <li className="mb-1 sm:mb-2">PIX</li>
              <li>Dinheiro</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-zinc-800 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-zinc-400">
            © {currentYear}{' '}
            <a 
              href="mailto:ccharlesjjose@gmail.com" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              ccharlesjjose@gmail.com
            </a>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
