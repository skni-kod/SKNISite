import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CarouselItemProps {
  imageUrl: string;
  partnerName: string;
  href: string;
  isDuplicate?: boolean;
}

const CarouselItem = ({
  imageUrl,
  partnerName,
  href,
  isDuplicate = false,
}: CarouselItemProps) => {
  return (
    <Link href={href}>
      <div
        className="flex flex-row justify-center items-center w-full h-full"
        aria-hidden={isDuplicate}
      >
        <Image
          src={imageUrl}
          alt={partnerName}
          title={partnerName}
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </Link>
  );
};

export { CarouselItem };
