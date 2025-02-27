import React from 'react';
import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import { Text } from "@/components/ui/text";
import MissingImage from "@/../public/images/missing_photo.jpg";

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
} : NewsItemProps) => {
    const truncatedDescription = description.length > 200 ? description.substring(0, 200) + '...' : description;

    return (
        <div className="flex flex-col space-y-3">
            <Image
                src={imageSource || MissingImage}
                height={0} width={0}
                className="h-full w-full object-cover rounded-sm"
                alt="Article cover"
            />
            <div className="flex flex-row gap-x-2 items-center">
                <CircleUserRound />
                <Text variant="smallText" className="font-light">
                    <span className="font-medium"> {author.firstName.at(0)}. {author.lastName} </span> • <span className="italic"> {date} </span>
                </Text>
            </div>
            <Text variant="smallText" className="font-bold">
                {title}
            </Text>
            <Text variant="smallText" className="font-light text-justify text-foreground">
                {truncatedDescription}
            </Text>
            <div className="flex flex-row gap-x-2 items-center">
                {mainTag && (<Text variant="smallText" className="text-primary/75"> {mainTag} </Text>)}
                {mainTag && (<Text variant="smallText"> • </Text>)}
                <Text variant="smallText" className="font-extralight"> {readtime} </Text>
            </div>
        </div>
    );
};

export { NewsItem };