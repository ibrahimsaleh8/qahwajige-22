"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { GalleryImageData } from "@/lib/responseType";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function HeroBackgroundCarousel({
  images,
}: {
  images: GalleryImageData[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" }, [
    Autoplay({
      delay: 3500,
    }),
  ]);

  if (!images?.length) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden w-full rounded-2xl border border-main-color/10 bg-white/70" ref={emblaRef}>
        <div className="flex p-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-0 shrink-0 grow-0 basis-[78%] sm:basis-[60%] md:basis-[40%] lg:basis-[33.333%] pl-3">
            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-xl">
            <Image
              src={img.url}
              alt={img.alt ?? "hero image"}
              fill
              priority={i === 0}
              className="object-cover"
            />
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="الصورة السابقة"
          onClick={() => emblaApi?.scrollPrev()}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-main-color to-secondary-accent text-white px-5 py-2 text-sm font-bold hover:brightness-105 transition-colors shadow-[0_10px_20px_rgba(82,97,185,0.22)]">
          <ArrowRight className="h-4 w-4" />
          السابق
        </button>
        <button
          type="button"
          aria-label="الصورة التالية"
          onClick={() => emblaApi?.scrollNext()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-main-color/20 bg-white text-main-color px-5 py-2 text-sm font-bold hover:bg-main-color/10 transition-colors">
          التالي
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
