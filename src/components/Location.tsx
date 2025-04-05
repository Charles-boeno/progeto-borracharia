
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from 'lucide-react';

const Location = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Borracharia+Rapidao+Sao+Paulo', '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-borracharia-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Localização</h2>
          <div className="w-20 h-1 bg-borracharia-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos localizados em um ponto de fácil acesso. Venha nos visitar ou entre em contato para agendamento.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Informações</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-borracharia-yellow mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="text-gray-700">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-borracharia-yellow mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Horário de Funcionamento</h4>
                  <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-700">Sábados: 8h às 13h</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={openGoogleMaps}
              className="mt-8 bg-borracharia-yellow text-borracharia-black hover:bg-yellow-400 w-full"
            >
              Como Chegar
            </Button>
          </div>
          
          <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0985065369124!2d-46.65390688502158!3d-23.563273484681576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1642181344118!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              className="rounded-lg"
              title="Localização da Borracharia Rapidão"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
