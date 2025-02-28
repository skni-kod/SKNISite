import { IntroductionSection } from "@/app/(home)/(components)/sections/introduction-section";
import { JoinUsSection } from "@/app/(home)/(components)/sections/join-us-section";
import { LatestNewsSection } from "@/app/(home)/(components)/sections/latest-news-section";
import { PartnersSection } from "@/app/(home)/(components)/sections/partners-section";
import { OurProjectsSection } from "@/app/(home)/(components)/sections/our-projects-section";
import { EquipmentSection } from "@/app/(home)/(components)/sections/equipment-section";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full space-y-10 md:space-y-16">
      <IntroductionSection />
      <JoinUsSection />
      <EquipmentSection />
      <LatestNewsSection />
      <OurProjectsSection />
      <PartnersSection />
    </div>
  );
}
