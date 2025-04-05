
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonialData = [
  {
    name: "Carlos Silva",
    role: "Cliente há 5 anos",
    comment: "Atendimento rápido e serviço de qualidade. Meus pneus nunca estiveram tão bem cuidados. Recomendo a todos!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ana Oliveira",
    role: "Cliente",
    comment: "Excelente atendimento! Tive um pneu furado na estrada e o time da Borracharia Rapidão foi super ágil em me atender.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "João Pereira",
    role: "Cliente empresarial",
    comment: "Nossa frota de caminhões é sempre atendida com agilidade e profissionalismo. Parceiros de confiança há anos.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mariana Costa",
    role: "Cliente",
    comment: "Serviço impecável. Preço justo e atendimento transparente. Não troco mais de borracharia!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Pedro Santos",
    role: "Cliente recorrente",
    comment: "Sempre que preciso de serviços para os pneus do meu carro, vou direto para a Borracharia Rapidão. Confio no trabalho deles há mais de 3 anos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Luciana Mendes",
    role: "Cliente nova",
    comment: "Primeira vez que utilizei os serviços e fiquei impressionada com a rapidez e qualidade. Certamente voltarei!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Fernando Alves",
    role: "Cliente",
    comment: "Precisei trocar os pneus do meu carro com urgência e a equipe me atendeu prontamente. Serviço rápido e de qualidade.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Camila Rodrigues",
    role: "Cliente",
    comment: "Ótimo atendimento e preço justo. A equipe é muito profissional e prestativa. Recomendo!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-borracharia-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Depoimentos</h1>
            <div className="w-20 h-1 bg-borracharia-yellow mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Veja o que nossos clientes dizem sobre a qualidade dos nossos serviços 
              e atendimento na Borracharia Rapidão.
            </p>
            <div className="flex items-center mt-8 text-gray-400">
              <Link to="/" className="hover:text-borracharia-yellow transition-colors">Início</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-borracharia-yellow">Depoimentos</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="py-16 bg-borracharia-yellow">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto p-12 bg-white rounded-lg shadow-xl">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-borracharia-yellow rounded-full w-16 h-16 flex items-center justify-center">
              <Quote className="h-8 w-8 text-borracharia-black" />
            </div>
            
            <div className="text-center">
              <p className="text-xl md:text-2xl italic text-gray-700 mb-8">
                "A Borracharia Rapidão superou todas as minhas expectativas. 
                O atendimento é excelente, os serviços são realizados com rapidez e qualidade, 
                e o preço é justo. Indico para todos os meus amigos e familiares."
              </p>
              
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-6 w-6 text-borracharia-yellow fill-borracharia-yellow" 
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/img/testimonial.jpg" 
                    alt="Cliente destaque" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold">Roberto Martins</h4>
                  <p className="text-gray-600">Cliente há 7 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <div className="w-20 h-1 bg-borracharia-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira os depoimentos de clientes que já utilizaram nossos serviços 
              e compartilharam suas experiências.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg transition-transform hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-borracharia-yellow fill-borracharia-yellow' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-borracharia-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Pronto para experimentar nossos serviços?</h2>
              <p className="text-lg text-gray-300">
                Entre em contato conosco hoje mesmo e descubra por que tantos clientes confiam na Borracharia Rapidão.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <Link 
                to="/contato" 
                className="inline-block bg-borracharia-yellow text-borracharia-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;
