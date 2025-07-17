import React from "react";
import { Technology } from "@/interfaces/technology";

import { Text } from "@/components/ui/text";
import { TechnologyCard } from "@/app/projects/[id]/(components)/technology-card";
import { useTranslations } from "next-intl";

interface TechnologyGridProps {
  technologies: Technology[];
}

const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
  const t = useTranslations("project-details");

  return (
    <section className="space-y-4">
      <Text variant="h2">{t("usedTechnologies")}</Text>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <TechnologyCard technology={tech} key={index} />
        ))}
      </div>
    </section>
  );
};

export { TechnologyGrid };
