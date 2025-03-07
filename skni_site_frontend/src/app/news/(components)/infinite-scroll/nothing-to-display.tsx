import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

const NothingToDisplay = () => {
  const t = useTranslations("news-page");
  return (
    <div className="w-full flex items-center justify-center min-h-48">
      <Text variant="largeText">{t("nothing")}</Text>
    </div>
  );
};

export { NothingToDisplay };
