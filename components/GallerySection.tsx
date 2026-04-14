"use client";

import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      dir="rtl"
      className="relative py-28 bg-second-background overflow-hidden">
      {/* Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-10 left-[5%] w-16 opacity-15 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-20 right-[4%] w-20 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute top-1/3 right-[7%] w-14 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
              معرض الأعمال
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight mb-3">
              من ذكريات مناسباتنا
            </h2>
            <div className="w-16 h-1.5 bg-accent-gold rounded-full mb-4" />
            <p className="text-low-color max-w-lg text-base leading-relaxed">
              لقطات حية من فعاليات قمنا بخدمتها في الرياض.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-3 font-black uppercase text-sm
              bg-main-color text-white px-7 py-4 rounded-full
              shadow-[0_6px_0_rgba(0,0,0,0.15)]
              hover:bg-main-color-dark hover:-translate-y-0.5
              active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.15)]
              transition-all duration-200">
            عرض الكل
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Empty state */}
        {gallery.length === 0 ? (
          <div className="bg-card-background rounded-3xl p-20 text-center shadow-[0_15px_35px_rgba(0,166,133,0.1)] border border-main-color/10">
            <p className="uppercase text-sm font-bold text-low-color tracking-widest">
              المعرض قيد التحديث
            </p>
            <div className="mt-8 h-1.5 w-24 bg-accent-gold rounded-full mx-auto" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
            {gallery.slice(0, 8).map((image, index) => {
              const isLarge = index === 0;

              return (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer
                    shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                    hover:shadow-[0_16px_40px_rgba(0,166,133,0.25)]
                    hover:-translate-y-1
                    transition-all duration-300
                    ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  `}>
                  <Image
                    src={image.url}
                    alt={image.alt ?? `صورة-${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay — darkens on hover */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300
                    bg-linear-to-t from-main-color-dark/80 via-transparent to-transparent
                    ${hovered === index ? "opacity-100" : "opacity-0"}`}
                  />

                  {/* Caption — slides up on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 px-5 py-4 transition-all duration-300
                    ${hovered === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-white">
                      {image.alt ?? `صورة-${index + 1}`}
                    </p>
                    <div className="mt-1.5 h-1 w-8 rounded-full bg-accent-gold" />
                  </div>

                  {/* Badge on large image */}
                  {isLarge && (
                    <div className="absolute top-4 right-4 bg-accent-gold text-main-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full -rotate-2">
                      مميز ✨
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
