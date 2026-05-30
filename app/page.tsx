import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import CoursePreview from "@/components/home/CoursePreview";
import TopperPreview from "@/components/home/TopperPreview";
import MomentsPreview from "@/components/home/MomentsPreview";
import NewsPreview from "@/components/home/NewsPreview";
import FaqSection from "@/components/home/FaqSection";
import WhyAspire from "@/components/home/WhyAspire";
import Testimonials from "@/components/home/Testimonials";
import AdmissionCTA from "@/components/home/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyAspire />
      <CoursePreview />
      <TopperPreview />
      <MomentsPreview />
      <NewsPreview />
      <Testimonials />
      <FaqSection />
      <AdmissionCTA />
    </>
  );
}