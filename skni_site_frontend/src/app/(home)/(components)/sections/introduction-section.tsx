"use client"

import { Text } from "@/components/ui/text";
import Image from "next/image";
import IntroductionGroup from "@/../public/images/heropage/introduction.jpg";
import { useTranslations } from "next-intl";

import dynamic from 'next/dynamic';

const InteractiveBackground = dynamic(() => import('@/app/(home)/(components)/interactive-background'), { ssr: false });

const IntroductionSection = () => {
    const t = useTranslations();

    return (
        <section className="flex flex-col lg:min-h-[50rem] items-center justify-center">
            <div className="absolute w-full h-full -z-10">
                <InteractiveBackground />
            </div>
            <div className="lg:h-3/5 flex flex-col lg:flex-row lg:gap-x-16 space-y-8">
                <div className="lg:w-3/4 h-full flex flex-col justify-center">
                    <Text variant="h1">
                        {t("landing-page.introduction.name")}{" "}
                        <span className="text-primary">KOD</span>
                    </Text>
                    <Text variant="p" className="text-justify">
                        {t("landing-page.introduction.description")}
                    </Text>
                </div>
                <div className="lg:w-1/4 sm:h-1/2 lg:h-full flex items-center justify-center relative">
                    <div className="h-full w-full flex justify-center items-center z-10">
                        <Image
                            src={IntroductionGroup}
                            alt={"Grupa osób"}
                            height={0} width={0}
                            className="h-full object-cover rounded-sm"
                        />
                    </div>
                    <div className="h-full w-full bg-primary absolute z-0 mt-7 ml-7 lg:mt-10 lg:ml-10 rounded-sm shadow-primary/45 shadow-lg">
                    </div>
                </div>
            </div>
        </section>
    );
};

export { IntroductionSection };
