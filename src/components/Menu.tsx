"use client";

import { Home, Wrench, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Menu() {
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", label: "Início", icon: Home },
    { id: "services", label: "Serviços", icon: Wrench },
    { id: "about", label: "Sobre Nós", icon: Users },
    { id: "contact", label: "Contato", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 flex-col items-center justify-center gap-4 py-4 md:h-24 md:flex-row md:justify-between md:py-0">
          <div className="flex items-center">
            <img 
              src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/1590313479f7ea67deca8ed8bc901cf6.png"
              alt="Borracharia Express Logo"
              className="h-16 w-auto md:h-20"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap md:space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveItem(item.id)}
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
      </div>
    </nav>
  );
}
