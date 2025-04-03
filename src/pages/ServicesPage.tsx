
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Services from '../components/Services';
import { ChevronRight, Settings, Gauge, Wrench, Car } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-borracharia-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <div className="w-20 h-1 bg-borracharia-yellow mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Conheça todos os serviços oferecidos pela Borracharia Rapidão 
              para manter seus pneus em perfeito estado e garantir sua segurança nas estradas.
            </p>
            <div className="flex items-center mt-8 text-gray-400">
              <Link to="/" className="hover:text-borracharia-yellow transition-colors">Início</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-borracharia-yellow">Serviços</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <Services />
      
      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços Adicionais</h2>
            <div className="w-20 h-1 bg-borracharia-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Além dos serviços principais, oferecemos soluções completas para a manutenção do seu veículo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 rounded-full bg-borracharia-yellow flex items-center justify-center">
                  <Settings className="h-8 w-8 text-borracharia-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Alinhamento</h3>
                <p className="text-gray-600 mb-4">
                  O alinhamento correto das rodas é essencial para a dirigibilidade, o controle do veículo 
                  e o desgaste uniforme dos pneus. Utilizamos equipamentos de última geração para um alinhamento preciso.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 rounded-full bg-borracharia-yellow flex items-center justify-center">
                  <Gauge className="h-8 w-8 text-borracharia-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Balanceamento</h3>
                <p className="text-gray-600 mb-4">
                  O balanceamento de rodas elimina vibrações indesejadas e proporciona maior conforto ao dirigir. 
                  Nosso serviço de balanceamento garante pneus com desgaste uniforme e maior vida útil.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 rounded-full bg-borracharia-yellow flex items-center justify-center">
                  <Car className="h-8 w-8 text-borracharia-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Calibragem com Nitrogênio</h3>
                <p className="text-gray-600 mb-4">
                  A calibragem com nitrogênio oferece vantagens como menor perda de pressão, menor oxidação 
                  das rodas e melhor desempenho dos pneus em diferentes temperaturas.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 rounded-full bg-borracharia-yellow flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-borracharia-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Manutenção Preventiva</h3>
                <p className="text-gray-600 mb-4">
                  Realizamos checagem completa dos seus pneus, verificando pressão, profundidade dos sulcos, 
                  alinhamento e outros fatores que impactam na segurança e durabilidade.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-borracharia-yellow text-borracharia-black hover:bg-yellow-400">
              <Link to="/contato">Agende um Serviço</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
