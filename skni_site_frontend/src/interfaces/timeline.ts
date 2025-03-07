import { IconName } from "lucide-react/dynamic";

export type EventDirection = "left" | "right";

export interface TimelineItemProps {
  title: string;
  description: string;
  date: {
    day?: number;
    month?: number;
    year: number;
  };
  iconName: IconName;
  direction: EventDirection;
}

export interface TimelineDividerProps {
  iconName: IconName;
  className?: string;
}

export interface TimelineEventDetailsProps {
  title: string;
  description: string;
  direction: EventDirection;
  className?: string;
}
