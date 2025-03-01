import { Text } from "@/components/ui/text";
import { ProjectSummaryCard } from "../project-summary-card";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import { useTranslations } from "next-intl";

const projects = [
  {
    title: "Kodemy",
    description:
      "Kodemy to aplikacja webowa umożliwiająca członkom koła dzielenie się z innymi godnymi uwagi materiałami do nauki różnych technologii związanych z IT.",
    category: "Sekcja Aplikacji Desktopowych Mobilnych i Webowych",
    id: 29,
  },
  {
    title: "LiveChat",
    description: "To aplikacja webowa typu LiveChat za pomocą websocket'ów.",
    category: "Sekcja Aplikacji Desktopowych Mobilnych i Webowych",
    id: 30,
  },
  {
    title: "PVAnalyzer",
    description:
      "To aplikacja webowa, która pozwala na analizę zużycia energii elektrycznej oraz oszczędności wynikających z instalacji paneli fotowoltaicznych.",
    category: "Sekcja Aplikacji Desktopowych Mobilnych i Webowych",
    id: 31,
  },
  {
    title: "SKNI Tool",
    description:
      'SKNITool to projekt opracowany w trakcie NASA Space Apps Challange 2022 przez zespół "SKNI KOD" który tworzyli członkowie naszego koła: Oskar Tyniec Mateusz Fesz Arkadiusz Albiniak Jakub Przystasz Zespół przygotował prototyp narzędzia wielofunkcyjnego dla astronautów wysłanych na podbój czerwonej planety. Jury z NASA doceniło nasz projekt przyznając wyróżnienie spośród ponad 5 tys. drużyn - więcej o tym możecie przeczytać na stronie konkursu: Global Finalists Honorable Mentions W podkarpackiej edycji, nasz pomysł zdobył I miejsce.',
    category: "Sekcja Elektroniki i Retro",
    id: 32,
  },
];

const OurProjectsSection = () => {
  const t = useTranslations();

  return (
    <section>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 w-full">
        <div className="grid grid-cols-1 w-full gap-y-4">
          <div className="row-span-1">
            <Text variant="smallText" className="uppercase text-primary">
              {t("landing-page.our-projects.title")}
            </Text>
            <Text variant="h2">{t("landing-page.our-projects.subtitle")}</Text>
          </div>
          {projects.map((project, index) => {
            if (index % 2 !== 0) {
              return (
                <ProjectSummaryCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="grid grid-cols-1 w-full">
          {projects.map((project, index) => {
            if (index % 2 === 0) {
              return (
                <ProjectSummaryCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                />
              );
            }
            return null;
          })}
          <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-x-8 w-full sm:mt-8 md:mt-0">
            <div className="flex flex-col w-full">
              <Text variant="largeText" className="uppercase">
                {t("landing-page.our-projects.projects-amount")}
              </Text>
              <AnimatedCounter number={30} textVariant={"h2"} />
            </div>
            <div className="flex justify-between">
              <Button
                variant="default"
                className="rounded-full py-6 px-6 w-full"
              >
                {t("landing-page.our-projects.see-all")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OurProjectsSection };
