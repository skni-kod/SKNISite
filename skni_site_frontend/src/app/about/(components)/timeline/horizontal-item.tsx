import { VerticalDivider } from "./vertical-divider";
import { TimelineEventDetails } from "./timeline-event-details";
import { EventDate } from "./event-date";
import { TimelineItemProps } from "@/interfaces/timeline";

const RightSidedTimelineItem = ({
  title,
  description,
  date,
  iconName,
  direction,
}: TimelineItemProps) => {
  return (
    <>
      <EventDate
        date={date}
        direction={direction}
        className="md:col-start-4 md:row-start-1"
      />
      <VerticalDivider iconName={iconName} />
      <TimelineEventDetails
        title={title}
        description={description}
        direction={direction}
        className="md:col-span-2 md:col-start-1"
      />
    </>
  );
};

const LeftSidedTimelineItem = ({
  title,
  description,
  date,
  iconName,
  direction,
}: TimelineItemProps) => {
  return (
    <>
      <EventDate
        date={date}
        direction={direction}
        className="md:col-start-1 md:row-start-1"
      />
      <VerticalDivider iconName={iconName} />
      <TimelineEventDetails
        title={title}
        description={description}
        direction={direction}
        className="md:col-span-2 md:col-start-4"
      />
    </>
  );
};

const HorizontalItem = ({
  title,
  description,
  date,
  iconName,
  direction,
}: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-[20%_80%] md:grid-cols-5 w-full gap-x-3 md:gap-x-0">
      {direction === "left" && (
        <LeftSidedTimelineItem
          title={title}
          description={description}
          direction={direction}
          date={date}
          iconName={iconName}
        />
      )}
      {direction === "right" && (
        <RightSidedTimelineItem
          title={title}
          description={description}
          direction={direction}
          date={date}
          iconName={iconName}
        />
      )}
    </div>
  );
};

export { HorizontalItem };
