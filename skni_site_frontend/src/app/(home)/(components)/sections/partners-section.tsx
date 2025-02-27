import React from 'react';
import {SectionBoilerplate} from "@/components/section-boilerplate";
import {InfiniteCarousel} from "@/components/infinite-carousel";
import {useTranslations} from "next-intl";

const PartnersSection = () => {
    const t = useTranslations()

    return (
        <SectionBoilerplate title={t("landing-page.partners.title")} subtitle={t("landing-page.partners.subtitle")}>
            <InfiniteCarousel />
        </SectionBoilerplate>
    );
};

export { PartnersSection };