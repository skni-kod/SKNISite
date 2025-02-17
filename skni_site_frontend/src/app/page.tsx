import { useTranslations } from "next-intl";
import { Text } from "@/components/ui/text";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="flex h-full justify-center items-center">
      <Text variant="h1">{t("HomePage.title")}</Text>
    </div>
  );
}
