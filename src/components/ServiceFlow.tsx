"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Wrench, CheckCircle, Clock, Car } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: typeof Car;
  duration: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Chegada",
    description: "Recepção e avaliação inicial do veículo",
    icon: Car,
    duration: "5 min",
  },
  {
    id: 2,
    title: "Diagnóstico",
    description: "Inspeção detalhada dos pneus",
    icon: Wrench,
    duration: "10 min",
  },
  {
    id: 3,
    title: "Serviço",
    description: "Execução do serviço necessário",
    icon: Clock,
    duration: "30-45 min",
  },
  {
    id: 4,
    title: "Finalização",
    description: "Verificação final e liberação",
    icon: CheckCircle,
    duration: "5 min",
  },
];

export function ServiceFlow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveStep(1);
    let step = 2;
    
    const interval = setInterval(() => {
      if (step > steps.length) {
        setIsAnimating(false);
        clearInterval(interval);
        return;
      }
      setActiveStep(step);
      step++;
    }, 2000);

    return () => clearInterval(interval);
  };

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-zinc-900"
        >
          Processo de Atendimento
        </motion.h2>

        <div className="mb-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startAnimation}
            disabled={isAnimating}
            className="rounded-lg bg-yellow-500 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-600 disabled:opacity-50"
          >
            {isAnimating ? "Visualizando..." : "Ver Processo"}
          </motion.button>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 bg-zinc-200" />
          
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex w-48 flex-col items-center"
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: activeStep === step.id ? 1.1 : 1,
                    backgroundColor:
                      activeStep && activeStep >= step.id
                        ? "rgb(234 179 8)"
                        : "rgb(244 244 245)",
                  }}
                  className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100"
                >
                  <step.icon
                    className={`h-8 w-8 transition-colors ${
                      activeStep && activeStep >= step.id
                        ? "text-white"
                        : "text-zinc-400"
                    }`}
                  />
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: activeStep && activeStep > step.id ? "100%" : 0,
                      }}
                      className="absolute left-full h-1 bg-yellow-500"
                      style={{ width: "100px" }}
                    />
                  )}
                </motion.div>
                
                <AnimatePresence mode="wait">
                  {(activeStep === step.id || !isAnimating) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-center"
                    >
                      <h3 className="mb-1 font-semibold text-zinc-900">
                        {step.title}
                      </h3>
                      <p className="mb-2 text-sm text-zinc-600">
                        {step.description}
                      </p>
                      <span className="text-xs font-medium text-yellow-500">
                        {step.duration}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
