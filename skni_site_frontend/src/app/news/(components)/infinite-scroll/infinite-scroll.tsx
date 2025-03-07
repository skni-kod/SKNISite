"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { NothingToDisplay } from "./nothing-to-display";
import { ReachedEnd } from "./reached-end";
import { ScrollItem } from "./scroll-item";
import { BackToTopButton } from "./back-to-top-button";

type News = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

// Te przykłady generował mi chat jak coś
const sampleNews: News[] = [
  {
    id: 1,
    title: "Nowa technologia AI rewolucjonizuje przemysł",
    description:
      "Naukowcy opracowali nowy algorytm sztucznej inteligencji, który zwiększa efektywność produkcji.Naukowcy opracowali nowy algorytm sztucznej inteligencji, który zwiększa efektywność produkcji.Naukowcy opracowali nowy algorytm sztucznej inteligencji, który zwiększa efektywność produkcji.Naukowcy opracowali nowy algorytm sztucznej inteligencji, który zwiększa efektywność produkcji.Naukowcy opracowali nowy algorytm sztucznej inteligencji, który zwiększa efektywność produkcji.",
    imageUrl:
      "https://kod.prz.edu.pl/media/gallery/470211437_979721650858497_4482898699496216047_n_wKYpNs4.jpg",
  },
  {
    id: 2,
    title: "Polska reprezentacja awansuje do finału",
    description:
      "Drużyna narodowa zapewniła sobie miejsce w finale mistrzostw po emocjonującym meczu.",
    imageUrl: "https://kod.prz.edu.pl/img/placeholder.a8751ab8.png",
  },
  {
    id: 3,
    title: "Eksploracja kosmosu nabiera tempa",
    description:
      "Nowa misja kosmiczna ma na celu badanie odległej galaktyki i poszukiwanie oznak życia.",
    imageUrl: "https://kod.prz.edu.pl/img/placeholder.a8751ab8.png",
  },
  {
    id: 4,
    title: "Giełda w górę po pozytywnych danych ekonomicznych",
    description:
      "Rynki finansowe reagują optymizmem na najnowsze dane dotyczące wzrostu gospodarczego.",
    imageUrl: "https://kod.prz.edu.pl/img/placeholder.a8751ab8.png",
  },
  {
    id: 5,
    title: "Nowa aplikacja podbija rynek",
    description:
      "Startup technologiczny zaprezentował aplikację, która ułatwia organizację codziennych obowiązków.",
    imageUrl: "https://kod.prz.edu.pl/img/placeholder.a8751ab8.png",
  },
];

const InfiniteScroll = () => {
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState<number>(1);
  const [existMore, setExistMore] = useState<boolean>(true);
  const limitPerPage = 2;
  const t = useTranslations("news-page");

  useEffect(() => {
    const start = (page - 1) * limitPerPage;
    const end = start + limitPerPage;
    const newNews = sampleNews.slice(start, end);

    if (newNews.length === 0) {
      setExistMore(false);
    } else {
      setNews((prev) => [...prev, ...newNews]);
    }
  }, [page]);

  useEffect(() => {
    if (news.length >= sampleNews.length) {
      setExistMore(false);
    }
  }, [news]);

  if (news.length === 0) return <NothingToDisplay />;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col space-y-6">
        {news.map((item) => (
          <ScrollItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      {existMore && (
        <Button className="mt-4" onClick={() => setPage((prev) => prev + 1)}>
          {t("load-more")}
        </Button>
      )}
      {!existMore && <ReachedEnd />}
      <BackToTopButton />
    </div>
  );
};

export { InfiniteScroll };
