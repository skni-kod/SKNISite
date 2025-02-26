import * as React from "react";
import { useTranslations } from "next-intl";
import {Text} from "@/components/ui/text"
import {Button} from "@/components/ui/button";
import Link  from "next/link";
import Image from "next/image";


const Equipment: React.FC = () => {
    const t = useTranslations('HomePage.Equipment');

    return(
    <div className="relative w-screen flex justify-center">
        <Image
            src="/equipment.jpg"
            alt="Equipment background"
            fill
            className="object-cover"
            priority
        />
        <div className="relative max-w-[600px] w-4/5 space-y-10 mt-12 mb-16">
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
                <Button asChild variant="default" size="lg" className="bg-white rounded-3xl border-2 text-[#55ACEE]
                hover:bg-transparent hover:text-white hover:border-white duration-300">
                    <span>{t("button")}</span>
                </Button>
            </Link>

        </div>
    </div>
)};

export {Equipment};