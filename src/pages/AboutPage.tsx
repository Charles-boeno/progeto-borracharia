
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Testimonials from '../components/Testimonials';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-borracharia-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>
            <div className="w-20 h-1 bg-borracharia-yellow mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Conheça a história da Borracharia Rapidão e como nos tornamos 
              referência em serviços de pneus na cidade de São Paulo.
            </p>
            <div className="flex items-center mt-8 text-gray-400">
              <Link to="/" className="hover:text-borracharia-yellow transition-colors">Início</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-borracharia-yellow">Sobre Nós</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
              <div className="w-20 h-1 bg-borracharia-yellow mb-6"></div>
              
              <p className="text-lg text-gray-700 mb-6">
                Fundada em 2005 pelo Sr. José Silva, a Borracharia Rapidão nasceu da paixão pelo 
                atendimento de qualidade e serviços automotivos de excelência. O que começou como uma 
                pequena borracharia de bairro cresceu rapidamente para se tornar uma referência 
                na cidade de São Paulo.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Ao longo dos anos, investimos em treinamento constante da nossa equipe, equipamentos 
                modernos e processos eficientes para garantir o melhor atendimento aos nossos clientes. 
                Nossa missão sempre foi oferecer soluções rápidas e confiáveis para problemas com pneus.
              </p>
              
              <p className="text-lg text-gray-700">
                Hoje, contamos com uma equipe de 15 profissionais altamente capacitados e uma 
                estrutura completa para atender veículos de todos os tipos, desde carros de passeio 
                até veículos comerciais e de grande porte.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1535813447-160859e4cd77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Estabelecimento da borracharia" 
                    className="rounded-lg h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Carro sendo atendido" 
                    className="rounded-lg h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Mecânico trabalhando" 
                    className="rounded-lg h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1630963045431-a7a632e76e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Pneus na oficina" 
                    className="rounded-lg h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-borracharia-yellow rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="block text-4xl font-bold text-borracharia-black">15+</span>
                    <span className="text-borracharia-black font-medium">Anos de experiência</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-borracharia-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <div className="w-20 h-1 bg-borracharia-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os princípios que norteiam nosso trabalho e nos ajudam a oferecer 
              sempre o melhor serviço para nossos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-borracharia-yellow mr-2" />
                Qualidade
              </h3>
              <p className="text-gray-600">
                Priorizamos a qualidade em cada serviço que realizamos, utilizando os 
                melhores materiais e seguindo os procedimentos recomendados pelos fabricantes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-borracharia-yellow mr-2" />
                Integridade
              </h3>
              <p className="text-gray-600">
                Trabalhamos com transparência e honestidade em todas as nossas relações 
                com clientes, fornecedores e colaboradores.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-borracharia-yellow mr-2" />
                Comprometimento
              </h3>
              <p className="text-gray-600">
                Estamos comprometidos com a satisfação dos nossos clientes e com a 
                excelência em todos os serviços que prestamos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-borracharia-yellow mr-2" />
                Inovação
              </h3>
              <p className="text-gray-600">
                Buscamos constantemente novas tecnologias e métodos para aprimorar 
                nossos serviços e oferecer soluções mais eficientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-borracharia-yellow mr-2" />
                Segurança
              </h3>
              <p className="text-gray-600">
                Consideramos a segurança uma prioridade em todos os nossos serviços, 
                garantindo que seu veículo estará em perfeitas condições para rodar.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-borracharia-yellow mr-2" />
                Responsabilidade Ambiental
              </h3>
              <p className="text-gray-600">
                Adotamos práticas sustentáveis, com descarte adequado de resíduos 
                e reciclagem de materiais sempre que possível.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <div className="w-20 h-1 bg-borracharia-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais dedicados que fazem parte da Borracharia Rapidão 
              e trabalham diariamente para oferecer o melhor serviço.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="José Silva - Fundador" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-borracharia-yellow rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-borracharia-black font-bold">15+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">José Silva</h3>
              <p className="text-gray-600">Fundador</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Carlos Pereira - Gerente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-borracharia-yellow rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-borracharia-black font-bold">10+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Carlos Pereira</h3>
              <p className="text-gray-600">Gerente</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Marcos Oliveira - Mecânico Chefe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-borracharia-yellow rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-borracharia-black font-bold">8+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Marcos Oliveira</h3>
              <p className="text-gray-600">Mecânico Chefe</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Ana Costa - Atendimento" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-borracharia-yellow rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-borracharia-black font-bold">5+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Ana Costa</h3>
              <p className="text-gray-600">Atendimento</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
