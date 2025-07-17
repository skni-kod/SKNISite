import React from "react";
import { Text } from "@/components/ui/text";

interface DetailsHeaderProps {
  name: string;
  shortDescription: string;
}

const DetailsHeader = ({ name, shortDescription }: DetailsHeaderProps) => {
  return (
    <header className="mt-10 text-center">
      <Text variant="h1">{name}</Text>
      <Text variant="p" className="text-muted-foreground text-justify">
        {shortDescription}
      </Text>
    </header>
  );
};

export { DetailsHeader };
