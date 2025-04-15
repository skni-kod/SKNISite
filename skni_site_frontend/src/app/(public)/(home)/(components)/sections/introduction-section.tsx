"use client";

import { Text } from "@/components/ui/text";
import Image from "next/image";
import { useTranslations } from "next-intl";

import dynamic from "next/dynamic";

const InteractiveBackground = dynamic(
  () =>
    import(
      "@/app/(public)/(home)/(components)/interactive-background/interactive-background"
    ).then((module) => module.InteractiveBackground),
  { ssr: false },
);

const IntroductionSection = () => {
  const t = useTranslations();

  return (
    <section className="flex flex-col lg:h-full items-center justify-center w-full">
      <div className="absolute w-[90%] h-full -z-10 overflow-hidden">
        <InteractiveBackground />
      </div>
      <div className="lg:h-[75vh] flex flex-col lg:flex-row lg:gap-x-16 space-y-8">
        <div className="lg:w-3/4 h-full flex flex-col justify-center">
          <Text variant="h1">
            {t("landing-page.introduction.name")}{" "}
            <span className="text-primary">KOD</span>
          </Text>
          <Text variant="p" className="text-justify">
            {t("landing-page.introduction.description")}
          </Text>
        </div>
        <div className="lg:w-1/4 sm:h-1/3 lg:h-full flex items-center justify-center relative">
          <div className="h-full w-full flex justify-center items-center z-10">
            <Image
              src="/images/heropage/introduction.jpg"
              alt={"Grupa osób"}
              height={700}
              width={300}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-full w-full bg-primary absolute z-0 mt-7 ml-7 lg:mt-10 lg:ml-10 rounded-lg shadow-primary/45 shadow-xl"></div>
        </div>
      </div>
    </section>
  );
};

export { IntroductionSection };
