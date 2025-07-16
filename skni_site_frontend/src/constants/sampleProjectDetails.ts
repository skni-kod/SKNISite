import { ProjectAuthor } from "@/interfaces/project-author";
import { Technology } from "@/interfaces/technology";

type GalleryImage = {
  src: string;
  alt: string;
};

interface ProjectDetailsProps {
  name: string;
  shortDescription: string;
  authors: ProjectAuthor[];
  description: string;
  technologies: Technology[];
  gallery?: GalleryImage[];
}

export const sampleProjectDetails: ProjectDetailsProps = {
  name: "Kodemy",
  shortDescription:
    "Kodemy to aplikacja webowa umożliwiająca członkom koła dzielenie się z innymi godnymi uwagi materiałami do nauki różnych technologii związanych z IT.",
  description:
    "Celem projektu jest stworzenie aplikacji webowej w ramach koła naukowego SKNI KOD, która będzie przechowywać polecane przez członków Koła materiały do nauki różnych technologii. Kodemy będzie dostępne jedynie dla członków SKNI KOD, dlatego do korzystania z materiałów będzie wymagane zalogowanie się przy użyciu Githuba. W aplikacji będzie można wyszukiwać dodane przez innych materiały, które będą przypisane do danej sekcji i kategorii. Dostępna będzie także możliwość oceny materiałów, co dodatkowo umożliwi wybranie do nauki tych najwyżej ocenianych przez członków SKNI KOD. Użytkownicy Kodemy oprócz korzystania z dostępnych materiałów będą mogli także dodawać swoje propozycje, które zostaną umieszczone w aplikacji po zatwierdzeniu przez administratora. Ideą projektu jest ułatwienie członkom koła naukę technologii, z którymi nie mieli wcześniej styczności. Umożliwi ona naukę jedynie ze sprawdzonych i polecanych źródeł. Aplikacja ta pozwoli także zaoszczędzić czas, który trzeba by było spędzić na samodzielnym szukaniu wartych uwagi tutoriali i artykułów. Umożliwi także zaoszczędzenie pieniędzy, które moglibyśmy wydać na płatne kursy, nie mając wiedzy o innych dostępnych, darmowych rozwiązaniach.",
  technologies: [
    {
      icon: "spring",
      name: "Spring Boot",
      version: "2.7.9",
    },
    {
      icon: "java",
      name: "Java JDK",
      version: "17.0.6",
    },
    {
      icon: "nextjs",
      name: "Next.js",
      version: "13.0.5",
    },
    {
      icon: "typescript",
      name: "TypeScript",
      version: "4.9.3",
    },
    {
      icon: "tailwindcss",
      name: "Tailwind CSS",
      version: "3.2.4",
    },
  ],
  authors: [
    {
      firstName: "Anna",
      lastName: "Pitera",
      role: "Project Leader / Backend",
    },
    {
      firstName: "Oskar",
      lastName: "Niedziałek",
      role: "Backend",
    },
    {
      firstName: "Krystian",
      lastName: "Kiełbasa",
      role: "Backend",
    },
    {
      firstName: "Tomasz",
      lastName: "Popek",
      role: "Backend",
    },
    {
      firstName: "Maksymilian",
      lastName: "Dendura",
      role: "Frontend",
    },
    {
      firstName: "Kamil",
      lastName: "Uchwat",
      role: "Frontend",
    },
    {
      firstName: "Dawid",
      lastName: "Pindara",
      role: "Frontend",
    },
    {
      firstName: "Mariusz",
      lastName: "Dąbrowski",
      role: "Autor pomysłu",
    },
  ],
};
