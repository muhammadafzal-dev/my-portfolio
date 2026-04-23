"use client";


import { useEffect, useRef, useState } from "react";

export const useInView = (options: IntersectionObserverInit = {}, once = true) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) observer.unobserve(currentRef);
      } else if (!once) {
        setIsInView(false);
      }
    }, optionsRef.current);

    observer.observe(currentRef);

    return () => observer.unobserve(currentRef);
  }, [once]);

  return { ref, isInView };
};

export default useInView;
