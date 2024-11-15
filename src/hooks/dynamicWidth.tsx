import { useState, useEffect, useRef } from 'react';

export function useDynamicWidth() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<string>('0px');

  useEffect(() => {
    const updateWidth = () => {
      if (elementRef.current) {
        setWidth(`${elementRef.current.offsetWidth}px`);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return { ref: elementRef, width };
}
