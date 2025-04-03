"use client";

import { Facebook, Instagram, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Borracharia Express
            </h3>
            <p className="mb-4">
              Sua melhor opção em serviços automotivos e pneus na região.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-400 hover:text-yellow-500"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-400 hover:text-yellow-500"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-zinc-400 hover:text-yellow-500"
              >
                <MessageSquare className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Horário de Funcionamento
            </h3>
            <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
            <p className="mb-2">Sábado: 8h às 12h</p>
            <p>Plantão 24h para emergências</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contato</h3>
            <div className="mb-2 flex items-center space-x-2">
              <Phone className="h-5 w-5 text-yellow-500" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="mb-2 flex items-center space-x-2">
              <Mail className="h-5 w-5 text-yellow-500" />
              <span>contato@borrachariaexpress.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-yellow-500" />
              <span>Av. Principal, 1000 - Centro</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Formas de Pagamento
            </h3>
            <ul>
              <li className="mb-2">Cartões de Crédito</li>
              <li className="mb-2">Cartões de Débito</li>
              <li className="mb-2">PIX</li>
              <li>Dinheiro</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
          <p>
            © {currentYear} Borracharia Express. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
