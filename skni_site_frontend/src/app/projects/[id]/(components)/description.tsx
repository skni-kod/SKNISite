import React from "react";
import { Text } from "@/components/ui/text";

interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  return (
    <section className="space-y-4">
      <Text variant="h2">Opis</Text>
      <Text variant="p" className="leading-relaxed text-justify">
        {description}
      </Text>
    </section>
  );
};

export { Description };
