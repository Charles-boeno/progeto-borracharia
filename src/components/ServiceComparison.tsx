"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import type { Service } from "./Services";

interface ServiceFeature {
  name: string;
  description: string;
  price: number;
  benefits: string[];
}

const serviceFeatures: Record<string, ServiceFeature> = {
  "Troca de Pneus": {
    name: "Troca de Pneus",
    description: "Serviço profissional de troca de pneus para todos os veículos",
    price: 80,
    benefits: [
      "Remoção e instalação profissional",
      "Balanceamento incluso",
      "Calibragem precisa",
      "Garantia do serviço",
      "Descarte adequado do pneu usado",
    ],
  },
  "Consertos": {
    name: "Consertos",
    description: "Reparo de furos e avarias em pneus",
    price: 40,
    benefits: [
      "Avaliação detalhada",
      "Reparo profissional",
      "Teste de pressão",
      "Garantia do serviço",
      "Tempo médio: 30 minutos",
    ],
  },
  "Atendimento 24h": {
    name: "Atendimento 24h",
    description: "Assistência emergencial a qualquer hora",
    price: 120,
    benefits: [
      "Disponível 24/7",
      "Atendimento rápido",
      "Cobertura em toda cidade",
      "Equipamentos profissionais",
      "Preço fixo",
    ],
  },
  "Manutenção": {
    name: "Manutenção",
    description: "Serviços gerais de manutenção automotiva",
    price: 150,
    benefits: [
      "Diagnóstico completo",
      "Peças originais",
      "Mecânicos certificados",
      "Garantia estendida",
      "Histórico digital",
    ],
  },
};

export function ServiceComparison() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceName)) {
        return prev.filter((s) => s !== serviceName);
      }
      if (prev.length < 3) {
        return [...prev, serviceName];
      }
      return prev;
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center text-4xl font-bold text-zinc-900"
      >
        Compare Nossos Serviços
      </motion.h2>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {Object.keys(serviceFeatures).map((serviceName) => (
          <motion.button
            key={serviceName}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleService(serviceName)}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              selectedServices.includes(serviceName)
                ? "bg-yellow-500 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {serviceName}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {selectedServices.map((serviceName) => (
            <motion.div
              key={serviceName}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {serviceFeatures[serviceName].name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    {serviceFeatures[serviceName].description}
                  </p>
                </div>
                <button
                  onClick={() => toggleService(serviceName)}
                  className="rounded-full p-1 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className="text-3xl font-bold text-yellow-500">
                  R${serviceFeatures[serviceName].price}
                </span>
                <span className="ml-1 text-zinc-500">/serviço</span>
              </div>

              <ul className="flex-1 space-y-3">
                {serviceFeatures[serviceName].benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <Check className="h-5 w-5 shrink-0 text-yellow-500" />
                    <span className="text-sm text-zinc-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {selectedServices.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-zinc-500"
        >
          Selecione os serviços acima para comparar
        </motion.p>
      )}
    </section>
  );
}
