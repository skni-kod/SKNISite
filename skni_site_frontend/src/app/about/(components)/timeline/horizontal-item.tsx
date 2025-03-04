import { VerticalDivider } from "./vertical-divider";
import { TimelineEventDetails } from "./timeline-event-details";
import { EventDate } from "./event-date";
import { TimelineItemProps } from "@/interfaces/timeline";

const HorizontalItem = ({
  title,
  description,
  date,
  iconName,
  direction,
}: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 w-full">
      {direction === "left" && (
        <>
          <div className="hidden md:flex md:col-span-2 md:col-start-1 md:row-start-1">
            <EventDate
              day={date.day}
              month={date.month}
              year={date.year}
              direction={direction}
            />
          </div>
          <div className="col-span-1 md:col-start-3 row-start-1">
            <VerticalDivider iconName={iconName} />
          </div>
          <div className="col-start-2 md:col-span-2 md:col-start-4 row-start-1">
            <TimelineEventDetails
              title={title}
              description={description}
              direction={direction}
            />
          </div>
        </>
      )}
      {direction === "right" && (
        <>
          <div className="col-start-2 md:col-span-2 md:col-start-1 row-start-1">
            <TimelineEventDetails
              title={title}
              description={description}
              direction={direction}
            />
          </div>
          <div className="col-span-1 md:col-start-3 row-start-1 h-full">
            <VerticalDivider iconName={iconName} />
          </div>
          <div className="hidden md:flex md:col-span-2 md:col-start-4 md:row-start-1">
            <EventDate
              day={date.day}
              month={date.month}
              year={date.year}
              direction={direction}
            />
          </div>
        </>
      )}
    </div>
  );
};

export { HorizontalItem };
