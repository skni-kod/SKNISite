import { Text } from "@/components/ui/text";
import { EventDirection } from "@/interfaces/timeline";
import { cn } from "@/lib/utils";

interface EventDateProps {
  date: {
    day?: number;
    month?: number;
    year: number;
  };
  direction: EventDirection;
  className?: string;
}

const EventDate = ({ date, direction, className }: EventDateProps) => {
  let eventDate = "";

  if (date.day && date.month) {
    eventDate = `${date.day}.${date.month}.${date.year}`;
  } else if (date.month) {
    eventDate = `${date.month}.${date.year}`;
  } else {
    eventDate = `${date.year}`;
  }
  return (
    <div className={cn("hidden md:flex md:col-span-2", className)}>
      <div
        className={cn(
          "h-full w-full flex items-center",
          direction === "left" ? "justify-end" : "justify-start",
        )}
      >
        <Text variant="largeText">{eventDate}</Text>
      </div>
    </div>
  );
};

export { EventDate };
