"use client";


import { useEffect, useState, useRef } from "react";

export const useInView = (options = {}, once = true) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
        if (once && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!entry.isIntersecting && !once) {
        setIsInView(false);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, once]);

  return { ref, isInView };
};

export default useInView;
