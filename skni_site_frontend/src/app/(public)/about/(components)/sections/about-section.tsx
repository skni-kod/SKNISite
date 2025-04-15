import { Text } from "@/components/ui/text";
import { SectionBoilerplate } from "@/components/section-boilerplate";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection = () => {
  const t = useTranslations("about-us-page");

  return (
    <SectionBoilerplate
      title={t("introduction.title")}
      subtitle={t("introduction.subtitle")}
    >
      <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-8">
        <div className="flex flex-col w-full text-justify lg:w-1/2">
          <Text variant="p">{t("introduction.p1")}</Text>
          <Text variant="p">{t("introduction.p2")}</Text>
          <Text variant="p">{t("introduction.p3")}</Text>
          <Text variant="p">{t("introduction.p4")}</Text>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src="/images/about-us/us.jpg"
            width={500}
            height={500}
            className="w-full h-auto object-cover object-center rounded-lg"
            alt={"Nasi członkowie"}
          />
        </div>
      </div>
    </SectionBoilerplate>
  );
};

export { AboutSection };
