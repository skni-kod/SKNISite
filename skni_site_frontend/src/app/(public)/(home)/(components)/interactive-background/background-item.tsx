import Image from "next/image";
import { cn } from "@/lib/utils";

interface BackgroundItemProps {
  id: string;
  source: string;
  className?: string;
  positionX: number;
  positionY: number;
}

const BackgroundItem = ({
  id,
  source,
  className,
  positionX,
  positionY,
}: BackgroundItemProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={source}
        alt={`Image ${id}`}
        priority
        width={96}
        height={96}
        className={cn(
          "opacity-45 absolute transform transition-all duration-300 ease-out",
          className,
        )}
        style={{
          left: `${positionX}%`,
          top: `${positionY}%`,
        }}
      />
    </div>
  );
};

export { BackgroundItem };
