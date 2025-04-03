"use client";

export function LocationMap() {
  return (
    <div className="container-fluid py-4 py-md-5">
      <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900">
        Nossa Localização
      </h2>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.0447796322824!2d-53.74068372489143!3d-24.762123934228308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3855998b29599%3A0x8e5ed2256c6f846!2sR.%20Carlos%20Sbaraine%2C%202264%20-%20Jardim%20Panorama%2C%20Toledo%20-%20PR%2C%2085911-060!5e0!3m2!1spt-BR!2sbr!4v1711646145459!5m2!1spt-BR!2sbr"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
