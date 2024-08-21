"use client";
import { useEffect, useRef } from "react";

type Options = {
  reset?: boolean;
  deplay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  interval?: number;
  opacity?: number;
  origin?: string;
  rotate?: {
    x?: number;
    y?: number;
    z?: number;
  };
  scale?: number;
};
const ScrollReveal = ({
  children,
  className,
  options,
}: {
  children: React.ReactNode;
  className?: string;
  options?: Options;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const defaultOptions = {
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  };

  useEffect(() => {
    async function animate() {
      if (divRef.current) {
        const sr = (await import("scrollreveal")).default;
        options
          ? sr().reveal(divRef.current, {
              ...options,
            })
          : sr().reveal(divRef.current, {
              ...defaultOptions,
            });
      }
    }
    animate();
  }, []);

  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
