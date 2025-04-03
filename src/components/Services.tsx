"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Car, AlertTriangle, Clock, Wrench, LucideIcon } from "lucide-react";
import { ServiceModal } from "./ServiceModal";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: Car,
    title: "Troca de Pneus",
    description: "Serviço profissional de troca de pneus para todos os veículos",
    details: [
      "Troca rápida e segura",
      "Alinhamento computadorizado",
      "Balanceamento de precisão",
      "Garantia do serviço",
      "Todas as marcas de pneus",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Consertos",
    description: "Reparo de furos e avarias em pneus",
    details: [
      "Reparo profissional",
      "Avaliação detalhada",
      "Conserto de furos",
      "Remendos de qualidade",
      "Garantia do serviço",
    ],
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Assistência emergencial a qualquer hora",
    details: [
      "Atendimento imediato",
      "Cobertura em toda cidade",
      "Equipe especializada",
      "Suporte telefônico",
      "Preços justos",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Serviços gerais de manutenção automotiva",
    details: [
      "Revisão preventiva",
      "Diagnóstico preciso",
      "Peças originais",
      "Mecânicos qualificados",
      "Garantia dos serviços",
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="container-fluid py-4 py-md-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center text-4xl font-bold text-zinc-900"
      >
        Nossos Serviços
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedService(service)}
            className="group cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="flex items-start space-x-4">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="rounded-full bg-yellow-50 p-3"
              >
                <service.icon className="h-8 w-8 text-yellow-500" />
              </motion.div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 group-hover:text-yellow-500">
                  {service.title}
                </h3>
                <p className="text-zinc-600">{service.description}</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-2 text-sm font-medium text-yellow-500"
                >
                  Clique para saber mais →
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
