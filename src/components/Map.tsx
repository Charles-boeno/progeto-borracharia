"use client";

import { useEffect, useRef, useState } from "react";
import { Map, Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export function LocationMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapContainer.current || map.current) return;

    mapboxgl.accessToken = "pk_dummy";
    
    map.current = new Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-46.6388, -23.5489], // São Paulo coordinates
      zoom: 15,
    });

    const marker = new Marker()
      .setLngLat([-46.6388, -23.5489])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [isMounted]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900">
        Nossa Localização
      </h2>
      <div 
        ref={mapContainer} 
        className="h-[400px] w-full rounded-lg shadow-lg"
      />
    </div>
  );
}
