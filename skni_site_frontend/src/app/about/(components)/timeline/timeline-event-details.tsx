import { DirectionArrow } from "./direction-arrow";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { TimelineEventDetailsProps } from "@/interfaces/timeline";

const TimelineEventDetails = ({
  title,
  description,
  direction,
  className,
}: TimelineEventDetailsProps) => {
  return (
    <div className={cn("col-start-2 row-start-1", className)}>
      <div className="flex flex-row w-full items-center my-6 md:my-0">
        <DirectionArrow direction={direction} />
        <div
          className={cn(
            "flex flex-col",
            direction === "left" ? "order-2" : "order-1",
          )}
        >
          <div className="max-w-full">
            <div className="w-full px-4 py-2 bg-primary  rounded-tl-lg rounded-tr-lg">
              <Text variant={"largeText"} className="text-white">
                {title}
              </Text>
            </div>
          </div>
          <div className="bg-accent rounded-br-lg rounded-bl-lg w-full px-4 py-2 text-justify">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TimelineEventDetails };
