"use client";

import { useEffect, useRef, useState } from "react";
import { useMapbox } from "@/lib/hooks/useMapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const BORRACHARIA_COORDINATES: [number, number] = [-53.7437, -24.7161]; // Toledo coordinates

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
    <div className="container-fluid py-4 py-md-5">
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
