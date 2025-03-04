import { Text } from "@/components/ui/text";
import { EventDirection } from "@/interfaces/timeline";
import { cn } from "@/lib/utils";

interface EventDateProps {
  day?: number;
  month?: number;
  year: number;
  direction: EventDirection;
}

const EventDate = ({ day, month, year, direction }: EventDateProps) => {
  let date = "";

  if (day && month) {
    date = `${day}.${month}.${year}`;
  } else if (month) {
    date = `${month}.${year}`;
  } else {
    date = `${year}`;
  }
  return (
    <div
      className={cn(
        "h-full w-full flex items-center",
        direction === "left" ? "justify-end" : "justify-start",
      )}
    >
      <Text variant="largeText">{date}</Text>
    </div>
  );
};

export { EventDate };
