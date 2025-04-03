
import React from 'react';
import { Button } from "@/components/ui/button";
import { Award, Clock, ThumbsUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-borracharia-yellow rounded-lg transform -translate-x-5 -translate-y-5"></div>
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe da borracharia" 
                className="w-full h-auto rounded-lg relative z-10 shadow-xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Borracharia Rapidão</h2>
            <div className="w-20 h-1 bg-borracharia-yellow mb-6"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Desde 2005, a Borracharia Rapidão oferece serviços de qualidade para manutenção e troca de pneus. 
              Nossa equipe é formada por profissionais experientes e comprometidos com a excelência no atendimento.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Trabalhamos com as melhores marcas e tecnologias do mercado, garantindo segurança e durabilidade para seus pneus. 
              Nosso compromisso é oferecer soluções rápidas e eficientes, mantendo você seguro nas estradas.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Award className="h-8 w-8 text-borracharia-yellow mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">Qualidade</h3>
                  <p className="text-gray-600">Excelência em serviços</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-8 w-8 text-borracharia-yellow mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">Rapidez</h3>
                  <p className="text-gray-600">Atendimento ágil</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ThumbsUp className="h-8 w-8 text-borracharia-yellow mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">Garantia</h3>
                  <p className="text-gray-600">Serviços garantidos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="h-8 w-8 text-borracharia-yellow mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">Experiência</h3>
                  <p className="text-gray-600">+15 anos de mercado</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-borracharia-yellow text-borracharia-black hover:bg-yellow-400">
              <Link to="/sobre">Saiba Mais Sobre Nós</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
