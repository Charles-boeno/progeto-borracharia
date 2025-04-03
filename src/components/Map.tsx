"use client";

import { useEffect, useRef, useState } from "react";
import { useMapbox } from "@/lib/hooks/useMapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const BORRACHARIA_COORDINATES: [number, number] = [-46.6388, -23.5489]; // São Paulo coordinates

export function LocationMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { isInitialized } = useMapbox({
    container: mapContainer.current!,
    coordinates: BORRACHARIA_COORDINATES,
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900">
        Nossa Localização
      </h2>
      {isMounted && (
        <div 
          ref={mapContainer} 
          className="h-[400px] w-full rounded-lg shadow-lg"
        />
      )}
    </div>
  );
}
