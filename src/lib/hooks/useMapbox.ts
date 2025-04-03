"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl, { Map, Marker } from "mapbox-gl";

interface MapboxConfig {
  container: HTMLDivElement;
  coordinates: [number, number];
  zoom?: number;
}

export function useMapbox({ container, coordinates, zoom = 15 }: MapboxConfig) {
  const map = useRef<Map | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!container || map.current) return;

    mapboxgl.accessToken = "pk_dummy";
    
    map.current = new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map.current);

    setIsInitialized(true);

    return () => {
      map.current?.remove();
    };
  }, [container, coordinates, zoom]);

  return { isInitialized };
}
