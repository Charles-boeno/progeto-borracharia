
import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da sua borracharia.');
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 175.216 175.552"
        width="30" 
        height="30" 
        fill="#ffffff"
      >
        <path d="M87.4 13.4c-41 0-74.3 33.3-74.3 74.3 0 15.7 4.9 30.3 13.3 42.4L13.7 161.9l33.1-10.6c11.3 6.9 24.5 10.7 38.6 10.7h0c41 0 74.3-33.3 74.3-74.3s-33.3-74.3-74.3-74.3zm43.5 105.4c-1.8 5-5.7 9-10.8 10.3-2.9.8-6.6 1.4-19.3-4.1-16.2-7-26.5-23.6-27.3-24.7-.8-1.1-6.1-8.2-6.1-15.6 0-7.4 3.9-11 5.2-12.6 1.3-1.5 2.9-1.9 3.9-1.9 1 0 2.1.1 3 .1 1 0 2.3-.4 3.6 2.7 1.3 3.2 4.5 10.9 4.8 11.7.3.8.5 1.8.1 2.8-.5 1.1-2.9 5-4 6.7-.3.5-1.1 1-2.1.2-.9-.8-3.8-2.9-6.7-5.6-5-4.6-8.9-10.4-9.9-12.2-.3-.5 0-.9.2-1.2 1.1-1.4 2.1-2.5 3.1-3.8 1.3-1.6.2-4.1.9-5.9.7-1.8 6.1-9.3 6.1-9.3 3.5-3.8 1.2-6.9.7-7.7-.5-.8-3.2-7.6-4.3-10.4-1.2-2.8-2.4-2.4-3.3-2.5-2.2-.4-3.7-.4-5.2-.4s-3.2.5-4.9 1.8c-1.8 1.4-6.7 6.5-6.7 15.9 0 9.3 6.8 18.4 7.7 19.7.9 1.3 13.3 21.3 32.8 28.9 19.5 7.6 19.5 5 23 4.7 3.5-.3 11.4-4.7 13-9.1 1.6-4.5 1.6-8.3 1.1-9.1-.5-.8-1.7-1.3-3.8-2.3"></path>
      </svg>
    </button>
  );
};

export default WhatsAppButton;
