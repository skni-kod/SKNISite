import { SectionBoilerplate } from "@/components/section-boilerplate";
import { useTranslations } from "next-intl";
import { InfiniteScroll } from "./(components)/infinite-scroll/infinite-scroll";

export default function NewsPage() {
  const t = useTranslations("news-page");
  return (
    <SectionBoilerplate title={t("title")} subtitle={t("subtitle")}>
      <InfiniteScroll />
    </SectionBoilerplate>
  );
}
