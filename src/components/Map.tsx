"use client";

export function LocationMap() {
  return (
    <div className="container-fluid py-4 py-md-5">
      <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900">
        Nossa Localização
      </h2>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <a 
          href="https://maps.app.goo.gl/cPH6FAQszcZBMgmEA"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Abrir localização no Google Maps"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.9700069982864!2d-53.741054425464796!3d-24.762217477993577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f39558c9a81e63%3A0xb7b111a54478ad8a!2sBorracharia%20do%20Borracheiro!5e0!3m2!1spt-BR!2sbr!4v1744301045769!5m2!1spt-BR!2sbr"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      </div>
    </div>
  );
}
