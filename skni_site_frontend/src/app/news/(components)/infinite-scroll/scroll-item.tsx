import Link from "next/link";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ScrollItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ScrollItem = ({ id, title, description, imageUrl }: ScrollItemProps) => {
  const t = useTranslations("news-page");

  return (
    <Link href={`/news/article/${id}`}>
      <div className="flex flex-col md:flex-row bg-accent border rounded-2xl h-[500px] p-5 gap-x-10 items-center justify-center shadow-lg shadow-secondary">
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full order-2 md:order-1">
          <Text variant="h3">{title}</Text>
          <Text
            variant="p"
            className="text-justify line-clamp-3 md:line-clamp-[7]"
          >
            {description}
          </Text>
        </div>
        <div className="w-full md:w-1/2 h-full overflow-hidden rounded-lg order-1 md:order-2">
          <Image
            src={imageUrl}
            alt={`${t("article-nr")} ${id}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export { ScrollItem };
