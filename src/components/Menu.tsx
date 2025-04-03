"use client";

import { Home, Wrench, Disc, Tag, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Menu() {
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", label: "Início", icon: Home },
    { id: "services", label: "Serviços", icon: Wrench },
    { id: "products", label: "Produtos", icon: Disc },
    { id: "promotions", label: "Promoções", icon: Tag },
    { id: "contact", label: "Contato", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-yellow-500">
              Borracharia Express
            </span>
          </div>
          <div className="flex space-x-8">
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
