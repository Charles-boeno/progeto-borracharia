"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const bannerItems = [{
  image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=1600&h=600&fit=crop&crop=focalpoint&fp-y=.7",
  title: "Borracharia do Borracheiro",
  description: "R. Carlos Sbaraine, 2264 - Jd. Panorama - Toledo - PR"
}, {
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=600&fit=crop&crop=focalpoint&fp-y=.7",
  title: "Serviço 24 Horas Disponível",
  description: "Assistência emergencial quando você mais precisa"
}, {
  image: "https://picsum.photos/200",
  title: "Qualidade Garantida",
  description: "Equipe especializada para melhor atendimento"
}];
export function Banner() {
  return <div className="mt-16">
      <Swiper modules={[Autoplay, Navigation, Pagination]} navigation pagination={{
      clickable: true
    }} autoplay={{
      delay: 6000,
      disableOnInteraction: false
    }} loop className="h-[200px] w-full md:h-[400px] lg:h-[600px]">
        {bannerItems.map((item, index) => <SwiperSlide key={index}>
            <div className="relative h-full w-full bg-cover bg-center" style={{
          backgroundImage: `url(${item.image})`
        }}>
            </div>
          </SwiperSlide>)}
      </Swiper>
    </div>;
}