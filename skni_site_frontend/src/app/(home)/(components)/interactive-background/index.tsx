"use client";

import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BackgroundItem } from "./background-item";

const images = [
  "/images/heropage/interactive-bg/python.png",
  "/images/heropage/interactive-bg/gamepad.png",
  "/images/heropage/interactive-bg/keyboard.png",
  "/images/heropage/interactive-bg/arduino.png",
];

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
    [],
  );

  const positions = useMemo(
    () =>
      imageData.map(() => ({
        x: Math.random() * 40 + 10,
        y: Math.random() * 40 + 10,
      })),
    [],
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
    <div className="absolute inset-0 w-full h-full grid grid-cols-2 grid-rows-2 pointer-events-none -z-10 overflow-hidden">
      {imageData.map((image, i) => {
        const depth = (i + 1) * 0.3;
        const newX = positions[i].x + (mousePosition.x - 30) * depth;
        const newY = positions[i].y + (mousePosition.y - 30) * depth;

        return (
          <BackgroundItem
            key={image.id}
            id={image.id}
            source={image.src}
            positionX={newX}
            positionY={newY}
            className={rotationVariants[i]}
          />
        );
      })}
    </div>
  );
};

export default InteractiveBackground;
