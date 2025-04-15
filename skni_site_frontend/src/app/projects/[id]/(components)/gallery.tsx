import React from "react";
import Image from "next/image";
import { Text } from "@/components/ui/text";

type GalleryImage = {
  src: string;
  alt: string;
};

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <section className="space-y-4">
      <Text variant="h2">Galeria</Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-0">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg border">
            <Image
              src={image.src || "/images/missing_photo.jpg"}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Gallery };
