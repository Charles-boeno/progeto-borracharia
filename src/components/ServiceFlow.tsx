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
    <section className="bg-zinc-50 py-4 py-md-5">
      <div className="container-fluid">
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
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-zinc-200 md:left-1/2 md:top-1/2 md:h-1 md:w-full md:-translate-x-1/2 md:-translate-y-1/2" />
          
          <div className="relative flex flex-col items-center space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0">
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
                    <div className="absolute bottom-0 left-1/2 h-[4rem] w-1 -translate-x-1/2 translate-y-full bg-zinc-200 md:bottom-auto md:left-full md:top-1/2 md:h-1 md:w-[calc(100%_+_Xrem)] md:-translate-x-0 md:-translate-y-1/2">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{
                          height: activeStep && activeStep > step.id ? "100%" : 0,
                          width: "100%",
                        }}
                        className="h-full w-full origin-top bg-yellow-500 md:h-1 md:w-full md:origin-left"
                      />
                    </div>
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
