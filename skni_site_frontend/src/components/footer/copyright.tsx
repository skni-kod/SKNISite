"use client";

import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Copyright = () => {
  const t = useTranslations("footer");
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Text variant="smallText">
      {t("copyright")} &copy; {year} SKNI KOD
    </Text>
  );
};

export { Copyright };
