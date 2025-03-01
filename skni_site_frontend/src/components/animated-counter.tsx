"use client";
import { useEffect, useState, useRef } from "react";
import { Text } from "@/components/ui/text";

interface AnimatedCounterProps {
  number: number;
  textVariant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "smallText";
  className?: string;
  duration?: number;
}

const AnimatedCounter = ({
  number,
  textVariant,
  className = "",
  duration = 1600,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(start + (number - start) * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    if (isVisible) {
      requestAnimationFrame(updateCounter);
    }
  }, [number, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={counterRef}>
      <Text variant={textVariant} className={className}>
        {count}
      </Text>
    </div>
  );
};

export { AnimatedCounter };
