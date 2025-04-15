"use client";

import { Home, Wrench, Users, Phone, Menu as MenuIcon, X, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Menu() {
  const [activeItem, setActiveItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Início", icon: Home, ref: "top" },
    { id: "services", label: "Serviços", icon: Wrench, ref: "services" },
    { id: "about", label: "Sobre Nós", icon: Users, ref: "about" },
    { id: "contact", label: "Contato", icon: Phone, ref: "contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref: string) => {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) return;

    if (ref === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(ref);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/40 shadow-lg backdrop-blur-sm">
      <div className="container-fluid">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('top')}
              className="bg-transparent border-none p-0 cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <img 
                src="/img/logo.png"
                alt="Borracharia Express Logo"
                className="h-48 w-auto md:h-64"
              />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-300"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveItem(item.id);
                  scrollToSection(item.ref);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors tracking-wide ${
                  activeItem === item.id
                    ? "text-white font-bold"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 shadow-lg backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveItem(item.id);
                      scrollToSection(item.ref);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors tracking-wide ${
                      activeItem === item.id
                        ? "text-white font-bold"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
