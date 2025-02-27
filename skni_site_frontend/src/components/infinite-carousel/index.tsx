import React from 'react';
import {Container} from "@/components/infinite-carousel/container";
import {Track} from "@/components/infinite-carousel/track";
import {CarouselItem} from "@/components/infinite-carousel/item";

const cardDetails = [
    {
        partnerName: "OPTeam",
        imageUrl: "https://kod.prz.edu.pl/media/sponsor_logo/logo.png",
        href: "https://opteam.pl/"
    },
    {
        partnerName: "Sii",
        imageUrl: "https://kod.prz.edu.pl/media/sponsor_logo/Logo_Sii_-01.jpg",
        href: "https://sii.pl/"
    },
    {
        partnerName: "Sklep Elektronika",
        imageUrl: "https://kod.prz.edu.pl/media/sponsor_logo/sklep-elektronika_bRSUDCb.png",
        href: "https://sklep-elektronika.com/",
    },
    {
        partnerName: "Deloitte",
        imageUrl: "https://kod.prz.edu.pl/media/sponsor_logo/1280px-Deloitte.svg.png",
        href: "https://www.deloitte.com/pl/pl.html",
    },
    {
        partnerName: "Hobbistycznie",
        imageUrl: "https://kod.prz.edu.pl/media/sponsor_logo/hobbistycznie.png",
        href: "https://www.hobbistycznie.pl/",
    },
]

const InfiniteCarousel = () => {
    return (
        <Container>
            <Track>
                {cardDetails.map((card, index) => (
                    <CarouselItem
                        partnerName={card.partnerName}
                        imageUrl={card.imageUrl}
                        href={card.href}
                        key={index}
                    />
                ))}
                {cardDetails.map((card, index) => (
                    <CarouselItem
                        partnerName={card.partnerName}
                        imageUrl={card.imageUrl}
                        href={card.href}
                        isDuplicate
                        key={index}
                    />
                ))}
            </Track>
        </Container>
    );
};

export { InfiniteCarousel };