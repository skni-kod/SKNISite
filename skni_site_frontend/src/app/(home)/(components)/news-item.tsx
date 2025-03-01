import React from "react";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import { Text } from "@/components/ui/text";

interface NewsItemProps {
  author: {
    firstName: string;
    lastName: string;
  };
  imageSource?: string;
  date: string;
  title: string;
  description: string;
  mainTag?: string;
  readtime: string;
}

const NewsItem = ({
  author,
  date,
  title,
  description,
  mainTag,
  readtime,
  imageSource,
}: NewsItemProps) => {
  return (
    <div className="flex flex-col h-full place-content-between space-y-3">
      <div className="">
        <Image
          src={imageSource || "/images/missing_photo.jpg"}
          width={300}
          height={300}
          className="object-cover rounded-sm w-full h-[300px]"
          alt="Article cover"
        />
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        <CircleUserRound />
        <Text variant="smallText" className="font-light">
          <span className="font-medium">
            {author.firstName.at(0)}. {author.lastName}
          </span>
          • <span className="italic"> {date} </span>
        </Text>
      </div>
      <Text variant="smallText" className="font-bold">
        {title}
      </Text>
      <div className="text-justify">
        <p className="font-light line-clamp-5">{description}</p>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        {mainTag && (
          <Text variant="smallText" className="text-primary/75">
            {mainTag}
          </Text>
        )}
        {mainTag && <Text variant="smallText"> • </Text>}
        <Text variant="smallText" className="font-extralight">
          {readtime}
        </Text>
      </div>
    </div>
  );
};

export { NewsItem };
