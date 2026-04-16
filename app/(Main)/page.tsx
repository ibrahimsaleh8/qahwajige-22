// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { FetchProjectData } from "@/lib/FetchProjectData";
import WideNumbersStatics from "@/components/WideNumbersStatics";
import RatingSection from "@/components/RatingSection";
import { CurrentProjectId } from "@/lib/ProjectId";
import { WhyUsSection } from "@/components/WhyUsSection";

export default async function HomePage() {
  const { data } = await FetchProjectData();
  return (
    <>
      <HeroSection {...data.hero} images={data.gallery} />
      <WideNumbersStatics />
      <AboutSection {...data.about} />
      <ServicesSection {...data.services} />
      <WhyUsSection {...data.whyUs} />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />
      <TestimonialsSection />

      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </>
  );
}
