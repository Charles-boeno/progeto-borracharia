"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Service } from "./Services";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative mx-4 w-full max-w-2xl rounded-lg bg-white p-4 md:mx-0 md:p-8 shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex items-start space-x-6">
            <service.icon className="h-16 w-16 shrink-0 text-yellow-500" />
            <div>
              <h3 className="mb-4 text-2xl font-bold text-zinc-900">
                {service.title}
              </h3>
              <p className="mb-6 text-zinc-600">{service.description}</p>
              <div className="space-y-3 text-zinc-600">
                {service.details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
