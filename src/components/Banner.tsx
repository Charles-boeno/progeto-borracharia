"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const bannerItems = [{
  image: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/8f2037d28849d7d58e28b1ad9931a5eb.png",
  title: "Borracharia do Borracheiro",
  description: "R. Carlos Sbaraine, 2264 - Jd. Panorama - Toledo - PR"
}, {
  image: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/7e91310d77dbac9cedf99963676e2a9a.png",
  title: "Serviço 24 Horas Disponível",
  description: "Assistência emergencial quando você mais precisa"
}, {
  image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&h=600&fit=crop",
  title: "Qualidade Garantida",
  description: "Equipe especializada para melhor atendimento"
}];
export function Banner() {
  return <div className="mt-16">
      <Swiper 
        modules={[Autoplay, Navigation, Pagination]} 
        navigation 
        pagination={{
          clickable: true
        }} 
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }} 
        loop 
        className="h-[600px] w-full"
      >
        {bannerItems.map((item, index) => <SwiperSlide key={index}>
            <div className="relative h-full w-full bg-cover bg-center" style={{
          backgroundImage: `url(${item.image})`
        }}>
            </div>
          </SwiperSlide>)}
      </Swiper>
    </div>;
}
