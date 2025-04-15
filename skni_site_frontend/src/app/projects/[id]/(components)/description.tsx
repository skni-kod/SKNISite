import React from "react";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  const t = useTranslations("project-details");

  return (
    <section className="space-y-4">
      <Text variant="h2">{t("description")}</Text>
      <Text variant="p" className="leading-relaxed text-justify">
        {description}
      </Text>
    </section>
  );
};

export { Description };
