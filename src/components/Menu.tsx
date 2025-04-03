"use client";

import { Home, Wrench, Users, Phone, Menu as MenuIcon, X } from "lucide-react";
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
    <nav className="fixed top-0 z-50 w-full bg-zinc-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/1590313479f7ea67deca8ed8bc901cf6.png"
              alt="Borracharia Express Logo"
              className="h-16 w-auto md:h-20"
            />
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-yellow-500"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
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
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium ${
                  activeItem === item.id
                    ? "text-yellow-500"
                    : "text-gray-300 hover:text-yellow-500"
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
              className="md:hidden"
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
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium ${
                      activeItem === item.id
                        ? "text-yellow-500"
                        : "text-gray-300 hover:text-yellow-500"
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
