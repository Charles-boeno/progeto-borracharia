"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Shield } from "lucide-react";

export function AboutUs() {
  const features = [
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas produtos de primeira linha e marcas reconhecidas",
    },
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Serviço ágil e eficiente para você voltar à estrada",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais treinados e certificados",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Sua segurança é nossa prioridade número um",
    },
  ];

  return (
    <section id="about" className="bg-zinc-900 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">Sobre Nós</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Há mais de 15 anos no mercado, a Borracharia Express se destaca pelo
            atendimento de qualidade e compromisso com a satisfação dos nossos
            clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 rounded-lg bg-zinc-800 p-6"
            >
              <feature.icon className="h-8 w-8 shrink-0 text-yellow-500" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
