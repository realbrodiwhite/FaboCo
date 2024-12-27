import { useState, useCallback } from 'react';

const MIN_ZOOM = 50;
const MAX_ZOOM = 200;
const ZOOM_STEP = 10;

export function useZoom(initialZoom: number = 100) {
  const [zoom, setZoom] = useState(initialZoom);

  const increaseZoom = useCallback(() => {
    setZoom(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  }, []);

  const decreaseZoom = useCallback(() => {
    setZoom(prev => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(100);
  }, []);

  const setCustomZoom = useCallback((value: number) => {
    const newZoom = Math.max(MIN_ZOOM, Math.min(value, MAX_ZOOM));
    setZoom(newZoom);
  }, []);

  return {
    zoom,
    increaseZoom,
    decreaseZoom,
    resetZoom,
    setCustomZoom,
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    zoomStep: ZOOM_STEP
  };
}
