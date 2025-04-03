"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const bannerItems = [{
  image: "/img/banner-1.jpg",
  title: "Borracharia do Borracheiro",
  description: "R. Carlos Sbaraine, 2264 - Jd. Panorama - Toledo - PR"
}, {
  image: "/img/banner-2.jpg",
  title: "Serviço 24 Horas Disponível",
  description: "Assistência emergencial quando você mais precisa"
}, {
  image: "/img/banner-3.jpg",
  title: "Qualidade Garantida",
  description: "Equipe especializada para melhor atendimento"
}];
export function Banner() {
  return <div className="mt-16 px-4">
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
        className="mx-auto h-[400px] max-w-6xl"
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
