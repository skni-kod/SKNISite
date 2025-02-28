"use client";

import { useEffect,
         useMemo,
         useState } from "react";
import Image from "next/image";

import Python from "../../../../public/images/heropage/interactive-bg/python.png";
import Gamepad from "../../../../public/images/heropage/interactive-bg/gamepad.png";
import Keyboard from "../../../../public/images/heropage/interactive-bg/keyboard.png";
import Arduino from "../../../../public/images/heropage/interactive-bg/arduino.png";

import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

const images = [Python, Gamepad, Keyboard, Arduino];

const rotationVariants = [
    "rotate-[-45deg]",
    "rotate-[50deg]",
    "rotate-[-30deg]",
    "rotate-[-25deg]",
];

const InteractiveBackground = () => {
    const imageData = useMemo(
        () =>
            images.map((image) => ({
                id: uuidv4(),
                src: image,
            })),
        []
    );

    const positions = useMemo(
        () =>
            imageData.map(() => ({
                x: Math.random() * 40 + 10,
                y: Math.random() * 40 + 10,
            })),
        []
    );

    const [mousePosition, setMousePosition] = useState({ x: 30, y: 30 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const x = (clientX / window.innerWidth) * 100;
            const y = (clientY / window.innerHeight) * 100;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full grid grid-cols-2 grid-rows-2 pointer-events-none -z-10 overflow-x-hidden">
            {imageData.map((image, i) => {
                const depth = (i + 1) * 0.3;
                const newX = positions[i].x + (mousePosition.x - 30) * depth;
                const newY = positions[i].y + (mousePosition.y - 30) * depth;

                return (
                    <div key={image.id} className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src={image.src}
                            alt={`Image ${i}`}
                            width={0}
                            height={0}
                            className={cn(
                                "w-auto h-16 opacity-30 absolute transform transition-all duration-300 ease-out",
                                rotationVariants[i] ?? ""
                            )}
                            style={{
                                left: `${newX}%`,
                                top: `${newY}%`,
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default InteractiveBackground;
