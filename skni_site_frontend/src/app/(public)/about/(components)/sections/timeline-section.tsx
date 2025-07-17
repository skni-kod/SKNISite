import { SectionBoilerplate } from "@/components/section-boilerplate";
import { HorizontalItem } from "../timeline/horizontal-item";
import { IconName } from "lucide-react/dynamic";
import { useTranslations } from "next-intl";

import { defaultData } from "@/constants/timeline";

const TimelineSection = () => {
  const t = useTranslations("about-us-page");

  return (
    <SectionBoilerplate
      title={t("timeline.title")}
      subtitle={t("timeline.subtitle")}
    >
      {defaultData.map((item, index) => (
        <HorizontalItem
          key={item.index}
          title={item.title}
          description={item.description}
          date={item.date}
          iconName={item.iconName as IconName}
          direction={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </SectionBoilerplate>
  );
};

export { TimelineSection };
