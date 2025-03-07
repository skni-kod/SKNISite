import { EventDirection } from "@/interfaces/timeline";
import { cn } from "@/lib/utils";

interface DirectionArrowProps {
  direction: EventDirection;
  className?: string;
}

const DirectionArrow = ({ direction, className }: DirectionArrowProps) => {
    return (
        <div
            className={cn(
                "h-0 w-0 border-y-8 border-y-transparent hidden md:flex",
                {
                    "border-r-[16px] border-r-accent order-1": direction === "left",
                    "border-l-[16px] border-l-accent order-2": direction === "right",
                },
                className,
            )}
        />
    );
};

export { DirectionArrow };
