import { IntroductionSection } from "./(components)/sections/introduction-section";
import { JoinUsSection } from "./(components)/sections/join-us-section";
import { EquipmentSection } from "./(components)/sections/equipment-section";
import { LatestNewsSection } from "./(components)/sections/latest-news-section";
import { OurProjectsSection } from "./(components)/sections/our-projects-section";
import { PartnersSection } from "./(components)/sections/partners-section";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full space-y-10 md:space-y-28">
      <IntroductionSection />
      <JoinUsSection />
      <EquipmentSection />
      <LatestNewsSection />
      <OurProjectsSection />
      <PartnersSection />
    </div>
  );
}
