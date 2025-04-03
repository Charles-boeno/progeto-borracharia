
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-pattern min-h-screen flex items-center text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">
              Serviços de <span className="text-borracharia-yellow">Qualidade</span> para seus Pneus
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Oferecemos serviços rápidos e confiáveis para manter seus pneus em perfeito estado. 
              Atendimento profissional e garantia de satisfação.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-borracharia-yellow text-borracharia-black hover:bg-yellow-400">
                <Link to="/contato" className="flex items-center">
                  Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-borracharia-yellow text-borracharia-yellow hover:bg-borracharia-yellow hover:text-borracharia-black">
                <Link to="/servicos">Nossos Serviços</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-borracharia-yellow rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Mecânico trocando pneu" 
                className="w-full h-auto rounded-lg relative z-10 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
