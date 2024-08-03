import { useCallback, useState } from "react";

const browser = typeof window !== undefined;
const useViewPortWidth = () => {
  const [width, setWidth] = useState(browser ? window.innerWidth : 0);

  const setSize = useCallback(() => {
    setWidth(window.innerWidth || 0);
  }, []);

  window.addEventListener("resize", setSize, { passive: true });
  window.addEventListener("orientationchange", setSize, { passive: true });

  return width;
};

export default useViewPortWidth;
