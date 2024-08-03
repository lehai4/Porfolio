"use client";
import { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function animate() {
      if (divRef.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(divRef.current, {
          reset: true,
          distance: "80px",
          duration: 2000,
          delay: 200,
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
