"use client"
import { useEffect, useState } from "react";
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
} : AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime: number) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3); 

            setCount(Math.round(start + (number - start) * easedProgress));

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }, [number, duration]);
    
    return (
        <Text variant={textVariant} className={className}>
            {count}
        </Text>
    );
};

export { AnimatedCounter };