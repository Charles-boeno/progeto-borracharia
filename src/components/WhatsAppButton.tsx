"use client";

import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const handleClick = () => {
    const phoneNumber = "5511999999999"; // Replace with your actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition-colors hover:bg-green-600"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageSquare className="h-6 w-6" />
    </motion.button>
  );
}
