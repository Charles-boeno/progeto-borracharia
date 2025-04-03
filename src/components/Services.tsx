"use client";

import { motion } from "framer-motion";
import {
  Car,
  Gauge,
  Settings,
  AlertTriangle,
  Clock,
  Tool,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Troca de Pneus",
    description: "Serviço profissional de troca de pneus para todos os veículos",
  },
  {
    icon: Gauge,
    title: "Balanceamento",
    description: "Balanceamento preciso para um rodar mais suave",
  },
  {
    icon: Settings,
    title: "Alinhamento",
    description: "Alinhamento computadorizado de última geração",
  },
  {
    icon: AlertTriangle,
    title: "Consertos",
    description: "Reparo de furos e avarias em pneus",
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Assistência emergencial a qualquer hora",
  },
  {
    icon: Tool,
    title: "Manutenção",
    description: "Serviços gerais de manutenção automotiva",
  },
];

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
          >
            <service.icon className="mb-4 h-12 w-12 text-yellow-500" />
            <h3 className="mb-2 text-xl font-semibold text-zinc-900">
              {service.title}
            </h3>
            <p className="text-zinc-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
