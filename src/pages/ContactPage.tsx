
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Location from '../components/Location';
import { ChevronRight, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Mensagem enviada!",
      description: "Recebemos sua mensagem e entraremos em contato em breve.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-borracharia-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <div className="w-20 h-1 bg-borracharia-yellow mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Estamos à disposição para atender suas dúvidas, receber feedback 
              ou agendar serviços para seu veículo.
            </p>
            <div className="flex items-center mt-8 text-gray-400">
              <Link to="/" className="hover:text-borracharia-yellow transition-colors">Início</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-borracharia-yellow">Contato</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="w-16 h-1 bg-borracharia-yellow mb-8"></div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-borracharia-yellow flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-borracharia-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-borracharia-yellow flex items-center justify-center mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-borracharia-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600">(11) 3333-3333</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-borracharia-yellow flex items-center justify-center mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-borracharia-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">contato@borrachariarapidao.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-borracharia-yellow flex items-center justify-center mr-4 shrink-0">
                    <Clock className="h-6 w-6 text-borracharia-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábados: 8h às 13h</p>
                    <p className="text-gray-600">Domingos: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              <div className="w-16 h-1 bg-borracharia-yellow mb-8"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Nome Completo</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">Telefone</label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">Assunto</label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-borracharia-yellow text-borracharia-black hover:bg-yellow-400 px-8 py-2"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <Location />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
