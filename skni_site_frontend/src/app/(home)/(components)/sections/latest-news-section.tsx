import React from 'react';
import { SectionBoilerplate } from "@/components/section-boilerplate";
import { NewsItem } from "@/app/(home)/(components)/news-item";
import {useTranslations} from "next-intl";

interface Author {
    firstName: string;
    lastName: string;
}

interface NewsItemType {
    author: Author;
    title: string;
    readtime: string;
    imageSource?: string;
    description: string;
    date: string;
    mainTag?: string;
}

const newsItems: NewsItemType[] = [
    {
        author: { firstName: "Wiktor", lastName: "Mazur" },
        title: "Życzenia świąteczne",
        // imageSource: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
        readtime: "3 minuty",
        description:
            "🎄 Świąteczna magia kodowania! 🎄 Nadszedł ten wyjątkowy czas, gdy zapach pierniczków unosi się w powietrzu, a świat zalewają świąteczne życzenia. Nasze koło postanowiło ułatwić Wam ten proces – prezentujemy ALGORYTM ŚWIĄTECZNY, który pomoże Wam w składaniu życzeń jak prawdziwi programiści!",
        date: "20 grudnia 2024",
        mainTag: "Programowanie",
    },
    {
        author: { firstName: "Anna", lastName: "Kowalska" },
        title: "Noworoczne postanowienia programisty",
        readtime: "5 minut",
        description:
            "🎉 Nowy rok to czas nowych wyzwań! Jakie są Twoje noworoczne postanowienia jako programista? My przygotowaliśmy zestaw najlepszych praktyk, które warto wprowadzić w nadchodzącym roku. Zrób krok ku lepszemu kodowi!",
        date: "1 stycznia 2025",
        mainTag: "Rozwój osobisty",
    },
    {
        author: { firstName: "Piotr", lastName: "Nowak" },
        title: "Najnowsze technologie w 2025 roku",
        readtime: "7 minut",
        description:
            "🚀 W 2025 roku technologia nie przestaje zaskakiwać! Sprawdź, jakie nowinki w świecie IT będą miały największy wpływ na naszą codzienną pracę. Od AI po blockchain – dowiedz się, czego spodziewać się w nadchodzących miesiącach.",
        date: "15 lutego 2025",
        mainTag: "Technologie",
    },
    {
        author: { firstName: "Katarzyna", lastName: "Wójcik" },
        title: "Programowanie w chmurze – nowa era",
        readtime: "4 minuty",
        description:
            "☁️ Chmura staje się standardem w programowaniu. Dlaczego warto przenieść swoje projekty do chmury? Poznaj zalety i wyzwania związane z tym podejściem oraz jak zacząć z AWS, Google Cloud czy Azure.",
        date: "20 lutego 2025",
        mainTag: "Chmura",
    },
];

const LatestNewsSection = () => {
    const t = useTranslations()

    return (
        <SectionBoilerplate title={t("landing-page.latest-articles.title")} subtitle={t("landing-page.latest-articles.subtitle")}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsItems.map((item, index) => (
                    <NewsItem
                        key={index}
                        author={item.author}
                        imageSource={item.imageSource}
                        title={item.title}
                        readtime={item.readtime}
                        description={item.description}
                        date={item.date}
                        mainTag={item.mainTag}
                    />
                ))}
            </div>
        </SectionBoilerplate>
    );
};

export { LatestNewsSection };
