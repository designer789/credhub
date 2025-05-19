'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { setGlobalLenisInstance } from '@/utils/scrollUtils';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoResize: true,
    });

    // Set the Lenis instance globally for direct access from other components
    setGlobalLenisInstance(lenisRef.current);

    // Set up the animation loop
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Handle resize events
    const resizeObserver = new ResizeObserver(() => {
      lenisRef.current?.resize();
    });

    resizeObserver.observe(document.body);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
} 