
import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  delay = 0,
  distance = 36,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible
          ? "translateY(0)"
          : `translateY(${distance}px)`,
      }}
      className={`
        opacity-0
        transition-[opacity,transform]
        duration-[900ms]
        ease-[cubic-bezier(0.2,0.7,0.2,1)]
        motion-reduce:transform-none
        ${visible ? "opacity-100" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
