"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from "react-select";
import { ChevronRight } from "lucide-react";

interface Vehicle {
  make: string;
  models: {
    name: string;
    years: number[];
  }[];
}

interface TireType {
  id: string;
  name: string;
  description: string;
  sizes: string[];
  image: string;
}

const vehicles: Vehicle[] = [
  {
    make: "Toyota",
    models: [
      {
        name: "Corolla",
        years: [2023, 2022, 2021, 2020],
      },
      {
        name: "Camry",
        years: [2023, 2022, 2021, 2020],
      },
    ],
  },
  {
    make: "Honda",
    models: [
      {
        name: "Civic",
        years: [2023, 2022, 2021, 2020],
      },
      {
        name: "Accord",
        years: [2023, 2022, 2021, 2020],
      },
    ],
  },
];

const tireTypes: TireType[] = [
  {
    id: "all-season",
    name: "All Season",
    description: "Perfect for year-round performance",
    sizes: ["205/55R16", "215/55R17", "225/45R18"],
    image: "https://images.unsplash.com/photo-1578844251758-2f71da4c7703?w=400",
  },
  {
    id: "performance",
    name: "Performance",
    description: "Enhanced grip and handling",
    sizes: ["225/40R18", "235/40R19", "245/35R20"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400",
  },
  {
    id: "all-terrain",
    name: "All Terrain",
    description: "Designed for both on and off-road use",
    sizes: ["265/70R17", "275/65R18", "285/60R18"],
    image: "https://images.unsplash.com/photo-1632823471565-1ecdf5f04af8?w=400",
  },
];

export function TireSelector() {
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTireType, setSelectedTireType] = useState<TireType | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const makeOptions = vehicles.map((v) => ({ value: v.make, label: v.make }));
  const modelOptions = selectedMake
    ? vehicles
        .find((v) => v.make === selectedMake)
        ?.models.map((m) => ({ value: m.name, label: m.name })) ?? []
    : [];
  const yearOptions =
    selectedModel && selectedMake
      ? vehicles
          .find((v) => v.make === selectedMake)
          ?.models.find((m) => m.name === selectedModel)
          ?.years.map((y) => ({ value: y, label: y.toString() })) ?? []
      : [];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center text-4xl font-bold text-zinc-900"
      >
        Encontre o Pneu Ideal
      </motion.h2>

      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Marca do Veículo
            </label>
            <Select
              options={makeOptions}
              onChange={(option) => {
                setSelectedMake(option?.value ?? null);
                setSelectedModel(null);
                setSelectedYear(null);
              }}
              value={makeOptions.find((o) => o.value === selectedMake)}
              className="text-sm"
              placeholder="Selecione a marca"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Modelo
            </label>
            <Select
              options={modelOptions}
              onChange={(option) => {
                setSelectedModel(option?.value ?? null);
                setSelectedYear(null);
              }}
              value={modelOptions.find((o) => o.value === selectedModel)}
              isDisabled={!selectedMake}
              className="text-sm"
              placeholder="Selecione o modelo"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Ano
            </label>
            <Select
              options={yearOptions}
              onChange={(option) => setSelectedYear(option?.value ?? null)}
              value={yearOptions.find((o) => o.value === selectedYear)}
              isDisabled={!selectedModel}
              className="text-sm"
              placeholder="Selecione o ano"
            />
          </div>

          {selectedYear && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg bg-yellow-50 p-4"
            >
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">Veículo selecionado:</span>{" "}
                {selectedMake} {selectedModel} {selectedYear}
              </p>
            </motion.div>
          )}
        </div>

        <div>
          <AnimatePresence mode="wait">
            {selectedYear ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  Tipos de Pneus Disponíveis
                </h3>
                <div className="grid gap-4">
                  {tireTypes.map((tire) => (
                    <motion.div
                      key={tire.id}
                      className={`cursor-pointer rounded-lg border p-4 transition-all hover:border-yellow-500 ${
                        selectedTireType?.id === tire.id
                          ? "border-yellow-500 bg-yellow-50"
                          : "border-zinc-200"
                      }`}
                      onClick={() => setSelectedTireType(tire)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="h-24 w-24 overflow-hidden rounded-lg">
                          <img
                            src={tire.image}
                            alt={tire.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-zinc-900">
                            {tire.name}
                          </h4>
                          <p className="mt-1 text-sm text-zinc-600">
                            {tire.description}
                          </p>
                          {selectedTireType?.id === tire.id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-3"
                            >
                              <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Tamanho
                              </label>
                              <Select
                                options={tire.sizes.map((size) => ({
                                  value: size,
                                  label: size,
                                }))}
                                onChange={(option) =>
                                  setSelectedSize(option?.value ?? null)
                                }
                                value={tire.sizes
                                  .map((size) => ({
                                    value: size,
                                    label: size,
                                  }))
                                  .find((o) => o.value === selectedSize)}
                                className="text-sm"
                                placeholder="Selecione o tamanho"
                              />
                            </motion.div>
                          )}
                        </div>
                        <ChevronRight
                          className={`ml-auto h-6 w-6 transform text-yellow-500 transition-transform ${
                            selectedTireType?.id === tire.id ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex h-full items-center justify-center"
              >
                <p className="text-center text-zinc-500">
                  Selecione seu veículo para ver os pneus disponíveis
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
