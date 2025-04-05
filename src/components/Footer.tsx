
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, MessageSquare, Info, Phone, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-borracharia-black text-white pt-10 md:pt-12 pb-4 md:pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-6 md:mb-8">
          <div>
            <div className="mb-3 md:mb-4">
              <img 
                src="/lovable-uploads/d8e9f6c7-d245-4d9b-b97f-28983fec15cb.png" 
                alt="Borracharia Rapidão Logo" 
                className="h-15 md:h-[17.5px]"
              />
            </div>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
              Serviços de qualidade para seus pneus, com atendimento rápido e profissional.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5 text-white hover:text-borracharia-yellow transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 text-white hover:text-borracharia-yellow transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 text-white hover:text-borracharia-yellow transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-3 md:mb-4">Menu</h4>
            <nav className="flex flex-col space-y-1 md:space-y-2">
              <Link to="/" className="text-gray-300 hover:text-borracharia-yellow transition-colors flex items-center">
                <Home className="h-4 w-4 mr-2" /> Início
              </Link>
              <Link to="/servicos" className="text-gray-300 hover:text-borracharia-yellow transition-colors flex items-center">
                <Wrench className="h-4 w-4 mr-2" /> Serviços
              </Link>
              <Link to="/depoimentos" className="text-gray-300 hover:text-borracharia-yellow transition-colors flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" /> Depoimentos
              </Link>
              <Link to="/sobre" className="text-gray-300 hover:text-borracharia-yellow transition-colors flex items-center">
                <Info className="h-4 w-4 mr-2" /> Sobre Nós
              </Link>
              <Link to="/contato" className="text-gray-300 hover:text-borracharia-yellow transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" /> Contato
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-3 md:mb-4">Serviços</h4>
            <ul className="text-gray-300 space-y-1 md:space-y-2 text-sm md:text-base">
              <li>Troca de Pneus</li>
              <li>Rodízio</li>
              <li>Reparos</li>
              <li>Atendimento Móvel</li>
              <li>Balanceamento</li>
              <li>Alinhamento</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-3 md:mb-4">Endereço</h4>
            <address className="text-gray-300 not-italic text-sm md:text-base">
              <p>Av. Paulista, 1000 - Bela Vista</p>
              <p>São Paulo - SP, 01310-100</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 md:pt-6 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Borracharia Rapidão. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 md:space-x-6 text-gray-400 text-xs md:text-sm">
              <a href="#" className="hover:text-borracharia-yellow transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-borracharia-yellow transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
