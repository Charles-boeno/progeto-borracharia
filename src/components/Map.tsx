"use client";

export function LocationMap() {
  return (
    <div className="container-fluid py-4 py-md-5">
      <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900">
        Nossa Localização
      </h2>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1743719669614!6m8!1m7!1s-Y8hQXNt4ViTebi71Fbg-g!2m2!1d-24.76212393342831!2d-53.7384950318499!3f165.9175!4f0!5f0.7820865974627469" 
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
