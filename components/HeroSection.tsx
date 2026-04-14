import HeroLinks from "./AnimatedComponents/HeroLinks";
import { GalleryImageData, HeroSectionData } from "@/lib/responseType";
import HeroBackgroundCarousel from "./HeroCarousel";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  images,
}: HeroSectionData & {
  images: GalleryImageData[];
}) {
  return (
    <section id="home" className="relative bg-main-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs md:text-sm font-bold tracking-widest text-main-color mb-4">
          ضيافة عربية
        </p>
        <h1 className="font-black leading-tight mb-5 text-4xl sm:text-5xl md:text-6xl text-main-black">
          {headline || "ضيافة راقية تعكس أصالة القهوة العربية"}
        </h1>
        <p className="text-sm md:text-base text-low-color max-w-2xl mx-auto mb-8">
          {subheadline ||
            "نقدّم تجربة فاخرة للمناسبات الخاصة والعامة عبر فريق محترف وخدمة دقيقة."}
        </p>
        <HeroLinks whatsApp={whatsApp} />
        <div className="mt-10">
          <HeroBackgroundCarousel images={images} />
        </div>
      </div>
    </section>
  );
}
