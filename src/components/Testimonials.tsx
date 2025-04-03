
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonialData = [
  {
    name: "Carlos Silva",
    role: "Cliente há 5 anos",
    comment: "Atendimento rápido e serviço de qualidade. Meus pneus nunca estiveram tão bem cuidados. Recomendo a todos!",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    role: "Cliente",
    comment: "Excelente atendimento! Tive um pneu furado na estrada e o time da Borracharia Rapidão foi super ágil em me atender.",
    rating: 5
  },
  {
    name: "João Pereira",
    role: "Cliente empresarial",
    comment: "Nossa frota de caminhões é sempre atendida com agilidade e profissionalismo. Parceiros de confiança há anos.",
    rating: 4
  },
  {
    name: "Mariana Costa",
    role: "Cliente",
    comment: "Serviço impecável. Preço justo e atendimento transparente. Não troco mais de borracharia!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-borracharia-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <div className="w-20 h-1 bg-borracharia-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A opinião dos nossos clientes é muito importante para nós. 
            Confira alguns depoimentos de quem já utilizou nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialData.map((testimonial, index) => (
            <Card key={index} className="bg-borracharia-gray border-none">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-borracharia-yellow fill-borracharia-yellow' : 'text-gray-400'}`} 
                    />
                  ))}
                </div>
                <p className="text-white mb-4">"{testimonial.comment}"</p>
              </CardContent>
              <CardFooter className="border-t border-gray-700 pt-4">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
