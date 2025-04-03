"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerItems = [
  {
    image: "https://images.unsplash.com/photo-1578844251758-2f71da4c7703?w=1600&h=600&fit=crop",
    title: "Troca de Pneus com Desconto!",
    description: "Aproveite nossos preços especiais em todas as marcas",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=600&fit=crop",
    title: "Serviço 24 Horas Disponível",
    description: "Assistência emergencial quando você mais precisa",
  },
  {
    image: "https://images.unsplash.com/photo-1632823471565-1ecdf5f04af8?w=1600&h=600&fit=crop",
    title: "Balanceamento Grátis",
    description: "Na compra de pneus novos",
  },
];

export function Banner() {
  return (
    <div className="mt-16">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[600px] w-full"
      >
        {bannerItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h2 className="mb-4 text-5xl font-bold text-white">
                  {item.title}
                </h2>
                <p className="text-xl text-gray-200">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
