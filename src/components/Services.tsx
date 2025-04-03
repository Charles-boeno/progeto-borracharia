
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Truck, RotateCw, ShieldCheck } from 'lucide-react';

const servicesData = [
  {
    icon: <Wrench className="h-10 w-10 mb-4 text-borracharia-yellow" />,
    title: "Troca de Pneus",
    description: "Troca rápida e segura de pneus para todos os tipos de veículos, do mais simples ao mais sofisticado."
  },
  {
    icon: <RotateCw className="h-10 w-10 mb-4 text-borracharia-yellow" />,
    title: "Rodízio",
    description: "Prolongue a vida útil de seus pneus com nosso serviço de rodízio profissional."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 mb-4 text-borracharia-yellow" />,
    title: "Reparos",
    description: "Reparos de emergência, furos e outros danos nos pneus com rapidez e qualidade."
  },
  {
    icon: <Truck className="h-10 w-10 mb-4 text-borracharia-yellow" />,
    title: "Atendimento Móvel",
    description: "Serviço de emergência onde você estiver. Atendemos em domicílio e na estrada."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-borracharia-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-borracharia-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços relacionados a pneus, 
            todos com garantia de qualidade e atendimento rápido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="transition-transform hover:scale-105 border-none shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
