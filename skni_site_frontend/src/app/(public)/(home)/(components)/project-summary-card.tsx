import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Cpu, Gamepad2, Monitor } from "lucide-react";
import Link from "next/link";

enum ProjectCategory {
  Apps = "Sekcja Aplikacji Desktopowych Mobilnych i Webowych",
  Electronics = "Sekcja Elektroniki i Retro",
  GameDev = "Sekcja Game-Dev",
}

interface ProjectSummaryCardProps {
  category: ProjectCategory | string;
  title: string;
  description: string;
  id: number;
}

const ProjectSummaryCard = ({
  category,
  title,
  description,
  id,
}: ProjectSummaryCardProps) => {
  return (
    <Link href={`/project/${id}`}>
      <Card className="hover:scale-105 transition-all duration-200 col-span-1 min-h-96">
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-x-3">
            <Text variant="h2">{title}</Text>
          </CardTitle>
          <CardContent>
            <div className="flex flex-row items-center gap-x-4">
              <div className="flex flex-row items-center justify-center flex-shrink-0 w-10 h-10">
                {category == ProjectCategory.Electronics && <Cpu />}
                {category == ProjectCategory.GameDev && <Gamepad2 />}
                {category == ProjectCategory.Apps && <Monitor />}
              </div>
              <Text variant="h4">{category}</Text>
            </div>
            <Text variant="p" className="text-justify">
              {description}
            </Text>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};

export { ProjectSummaryCard };
