import React from "react";
import { SectionBoilerplate } from "@/components/section-boilerplate";
import { NewsItem } from "../news-item";
import { useTranslations } from "next-intl";

interface Author {
  firstName: string;
  lastName: string;
}

interface NewsItemType {
  id: number;
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
    id: 1,
    author: { firstName: "Wiktor", lastName: "Mazur" },
    title: "Życzenia świąteczne",
    imageSource:
      "https://kod.prz.edu.pl/media/gallery/470211437_979721650858497_4482898699496216047_n_wKYpNs4.jpg",
    readtime: "3 minuty",
    description:
      "🎄 Świąteczna magia kodowania! 🎄 Nadszedł ten wyjątkowy czas, gdy zapach pierniczków unosi się w powietrzu, a świat zalewają świąteczne życzenia. Nasze koło postanowiło ułatwić Wam ten proces – prezentujemy ALGORYTM ŚWIĄTECZNY, który pomoże Wam w składaniu życzeń jak prawdziwi programiści!",
    date: "20 grudnia 2024",
    mainTag: "Programowanie",
  },
  {
    id: 2,
    author: { firstName: "Anna", lastName: "Kowalska" },
    title: "Noworoczne postanowienia programisty",
    readtime: "5 minut",
    description:
      "🎉 Nowy rok to czas nowych wyzwań! Jakie są Twoje noworoczne postanowienia jako programista? My przygotowaliśmy zestaw najlepszych praktyk, które warto wprowadzić w nadchodzącym roku. Zrób krok ku lepszemu kodowi!",
    date: "1 stycznia 2025",
    mainTag: "Rozwój osobisty",
  },
  {
    id: 3,
    author: { firstName: "Katarzyna", lastName: "Wójcik" },
    title: "Programowanie w chmurze – nowa era",
    readtime: "4 minuty",
    description:
      "☁️ Chmura staje się standardem w programowaniu. Dlaczego warto przenieść swoje projekty do chmury? Poznaj zalety i wyzwania związane z tym podejściem oraz jak zacząć z AWS, Google Cloud czy Azure.",
    date: "20 lutego 2025",
    mainTag: "Chmura",
  },
  {
    id: 4,
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
  const t = useTranslations();

  return (
    <SectionBoilerplate
      title={t("landing-page.latest-articles.title")}
      subtitle={t("landing-page.latest-articles.subtitle")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-6">
        {newsItems.map((item) => (
          <NewsItem
            key={item.id}
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
