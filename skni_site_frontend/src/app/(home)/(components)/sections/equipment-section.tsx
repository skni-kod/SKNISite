import * as React from "react";
import { useTranslations } from "next-intl";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EquipmentImage from "../../../../../public/images/heropage/equipment.jpg";
import Image from "next/image";

const EquipmentSection = () => {
    const t = useTranslations("landing-page.equipment");

    return(
        <section className="min-h-[600px] flex w-full justify-center items-center">
            <div className="absolute left-0 z-0 w-screen">
                <Image
                    src={EquipmentImage}
                    alt="Equipment background"
                    width={0} height={0}
                    className="object-cover object-center h-[600px]"
                    priority
                />
            </div>
            <div className="z-10 w-4/5 lg:w-1/2 flex flex-col gap-y-5">
                <div className="text-justify">
                    <Text variant="h2" className="text-white">
                        {t("title")}
                    </Text>
                    <Text variant="p" className="text-white">
                        {t("paragraph1")}
                    </Text>
                    <Text variant="p" className="text-white">
                        {t("paragraph2")}
                    </Text>
                </div>
                <Link href="/about" className="block">
                    <Button asChild variant="default" size="lg" className="bg-white rounded-3xl border-2 text-[#55ACEE]
                hover:bg-transparent hover:text-white hover:border-white duration-300">
                        <span>{t("button")}</span>
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export { EquipmentSection };
