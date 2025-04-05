
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da sua borracharia.');
    // Removed the actual phone number
    window.open(`https://wa.me/?text=${message}`, '_blank');
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
