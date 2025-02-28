import React from "react";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { InformationCard } from "../information-card";
import { Cpu, Gamepad2, Monitor } from "lucide-react";
import { useTranslations } from "next-intl";

const JoinUsSection = () => {
  const t = useTranslations();

  return (
    <section className="w-full flex flex-col lg:grid lg:grid-cols-4 sm:gap-x-6 lg:space-y-0 space-y-6">
      <div className="lg:row-span-2 flex justify-center items-center order-2 lg:order-1 mt-8 lg:mt-0">
        <InformationCard
          icon={<Gamepad2 />}
          title={t("landing-page.join-us.sections.gamedev.title")}
          description={t("landing-page.join-us.sections.gamedev.description")}
        />
      </div>
      <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
        <InformationCard
          icon={<Monitor />}
          title={t("landing-page.join-us.sections.webdev.title")}
          description={t("landing-page.join-us.sections.webdev.description")}
        />
        <InformationCard
          icon={<Cpu />}
          title={t("landing-page.join-us.sections.electronics.title")}
          description={t(
            "landing-page.join-us.sections.electronics.description",
          )}
        />
      </div>

      <div className="col-span-2 flex flex-col space-y-6 row-span-2 justify-center order-1 lg:order-2">
        <div className="flex flex-col">
          <Text variant="smallText" className="uppercase text-primary">
            {t("landing-page.join-us.section-title")}
          </Text>
          <Text variant="h2">{t("landing-page.join-us.title")}</Text>
          <Text variant="p" className="text-justify">
            {t("landing-page.join-us.description1")}
          </Text>
          <Text variant="p" className="text-justify">
            {t("landing-page.join-us.description2")}
          </Text>
        </div>
        <Button variant="default">{t("landing-page.more")}</Button>
      </div>
    </section>
  );
};

export { JoinUsSection };
