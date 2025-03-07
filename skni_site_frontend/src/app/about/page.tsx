import { AboutSection } from "./(components)/sections/about-section";
import { TimelineSection } from "./(components)/sections/timeline-section";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <AboutSection />
      <TimelineSection />
    </div>
  );
}
