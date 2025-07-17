import React from "react";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

const ReachedEnd = () => {
  const t = useTranslations("news-page");
  return (
    <div className="w-full flex items-center justify-center min-h-24">
      <Text variant="largeText">{t("end")}</Text>
    </div>
  );
};

export { ReachedEnd };
