"use client";

import { Children, ReactNode, useEffect, useRef, useState } from "react";

type StaggeredRevealProps = {
  children: ReactNode[];
  className?: string;
  baseDelayMs?: number;
  stepDelayMs?: number;
};

export default function StaggeredReveal({
  children,
  className = "",
  baseDelayMs = 0,
  stepDelayMs = 160,
}: StaggeredRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => (
        <div
          key={index}
          className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""}`}
          style={{
            transitionDelay: `${baseDelayMs + index * stepDelayMs}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
