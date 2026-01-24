import { useState, useEffect } from "react";

export function useHoverCapable() {
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    // Check if device supports hover (not touch-only)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsHoverCapable(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHoverCapable(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isHoverCapable;
}
