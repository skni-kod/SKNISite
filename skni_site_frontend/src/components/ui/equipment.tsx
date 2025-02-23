import * as React from "react";
import { useTranslations } from "next-intl";
import {Text} from "./text"
import {Button} from "./button";
import Link  from "next/link";

const Equipment: React.FC = () => {
    const t = useTranslations('HomePage.Equipment');

    return(
    <div className="flex min-h-[600px] w-full bg-cover bg-center justify-center" style = {{backgroundImage: "url('equipment.jpg')" }}>
        <div className="max-w-[600px] w-4/5 space-y-8 mt-16 mb-16">
            <Text variant="h1" className="text-white">
                {t("title")}
            </Text>
            <Text variant="h4" className="text-white">
                {t("paragraph1")}
            </Text>
            <Text variant="h4" className="text-white">
                {t("paragraph2")}
            </Text>
            <Link href="/about" className="block">
                <Button asChild variant="default" size="lg" className="bg-white rounded-3xl border-[2px] text-[#55ACEE]
                hover:bg-transparent hover:text-white hover:border-white duration-300">
                    <span>{t("button")}</span>
                </Button>
            </Link>

        </div>
    </div>
)};

export {Equipment};