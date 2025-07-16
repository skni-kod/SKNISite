import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { ProjectAuthor } from "@/interfaces/project-author";
import { useTranslations } from "next-intl";

interface AuthorsProps {
  authors: ProjectAuthor[];
}

const Authors = ({ authors }: AuthorsProps) => {
  const t = useTranslations("project-details");

  return (
    <section className="space-y-4">
      <Text variant="h2">{t("authors")}</Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((author, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6 flex items-center gap-4">
              <Image
                src={"/images/default_avatar.svg"}
                alt={author.firstName + " " + author.lastName}
                width={64}
                height={64}
                className="rounded-full border"
              />
              <div className="space-y-3">
                <Text variant="h4">
                  {author.firstName} {author.lastName}
                </Text>
                <Text variant="smallText" className="text-muted-foreground">
                  {author.role}
                </Text>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export { Authors };
