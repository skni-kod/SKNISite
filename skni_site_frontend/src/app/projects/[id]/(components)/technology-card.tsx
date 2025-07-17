import React from "react";
import { Technology } from "@/interfaces/technology";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import Image from "next/image";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-3">
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology.icon}/${technology.icon}-original.svg`}
                alt={technology.name}
                width={60}
                height={60}
              />
              <h3 className="font-medium">{technology.name}</h3>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <Text variant="p" className="text-white">
            {technology.name} {technology.version && `v${technology.version}`}
          </Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { TechnologyCard };
