"use client"

import Lenis from "lenis";
import { useEffect } from "react";



export default function RootLayout({ children }) {



  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <html lang="en">
      <body
       className="[--pattern-fg:var(--color-neutral-50)]"
      >
        {children}
      </body>
    </html>
  );
}
