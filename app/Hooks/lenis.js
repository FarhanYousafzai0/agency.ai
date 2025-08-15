"use client";
import { useEffect } from "react";
import { ReactLenis, useLenis } from 'lenis/react'

export function useSmoothScroll() { // <-- renamed
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
