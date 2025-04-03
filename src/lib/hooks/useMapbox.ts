"use client";

import { useEffect, useRef, useState } from "react";
import { Map, Marker } from "mapbox-gl";

interface MapboxConfig {
  container: HTMLDivElement;
  coordinates: [number, number];
  zoom?: number;
}

const initializeMapbox = (
  container: HTMLDivElement,
  coordinates: [number, number],
  zoom: number
): Map => {
  const mapboxgl = window.mapboxgl;
  if (!mapboxgl) {
    console.error('Mapbox GL JS is not loaded');
    return null;
  }

  mapboxgl.accessToken = "pk_dummy";
  
  const map = new window.mapboxgl.Map({
    container,
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates,
    zoom,
  });

  // @ts-ignore - we know this exists globally
  new window.mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);

  return map;
};

export function useMapbox({ container, coordinates, zoom = 15 }: MapboxConfig) {
  const map = useRef<Map | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!container || map.current) return;

    if (typeof window !== "undefined") {
      map.current = initializeMapbox(container, coordinates, zoom);
      setIsInitialized(true);
    }

    return () => {
      map.current?.remove();
    };
  }, [container, coordinates, zoom]);

  return { isInitialized };
}
