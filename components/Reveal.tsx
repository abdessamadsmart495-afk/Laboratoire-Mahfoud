import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  width = "fit-content" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, we can stop observing to perform once
        if (ref.current) observer.unobserve(ref.current);
      }
    }, {
      rootMargin: "-20px 0px", // Trigger slightly earlier
      threshold: 0.1
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ 
        width,
        transitionDelay: `${delay}ms`
      }}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0 blur-0" 
          : "opacity-0 translate-y-6 blur-[2px]"
      }`}
    >
      {children}
    </div>
  );
};