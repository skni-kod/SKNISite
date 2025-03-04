import { TimelineDividerProps } from "@/interfaces/timeline";
import { DynamicIcon } from "lucide-react/dynamic";

const VerticalDivider = ({ iconName }: TimelineDividerProps) => {
  return (
    <div className="relative flex items-center justify-center h-full">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-accent -translate-x-1/2 z-0"></div>
      <div className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full">
        <DynamicIcon name={iconName} className="h-8 w-8 text-accent" />
      </div>
    </div>
  );
};

export { VerticalDivider };
