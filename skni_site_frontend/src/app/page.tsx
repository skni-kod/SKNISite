import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="flex h-full justify-center items-center">
      <span>{t("HomePage.title")}</span>
    </div>
  );
}
