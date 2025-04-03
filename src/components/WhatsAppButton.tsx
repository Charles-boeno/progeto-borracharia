
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da sua borracharia.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={30} />
    </button>
  );
};

export default WhatsAppButton;
