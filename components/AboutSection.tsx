import Image from "next/image";
import { AboutSectionData } from "@/lib/responseType";

export default function AboutSection({
  description1,
  label,
  title,
  image,
}: AboutSectionData) {
  return (
    <section id="about" className="bg-main-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="inline-block bg-main-color-dark text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-main-color/10 shadow-sm">
              {label }
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-main-black leading-tight">
              {title || "خدمة فوق التوقعات بطابع أصيل للضيافة"}
            </h2>
            <div className="w-20 h-1 bg-main-color/40 rounded-full" />

            {description1 && (
              <p className="mt-4 text-base text-low-color leading-relaxed">
                {description1}
              </p>
            )}

            <div className="flex gap-8 mt-8 text-main-color rounded-2xl bg-white border border-main-color/10 shadow-[0_12px_30px_rgba(82,97,185,0.12)] p-5 justify-between">
              <div>
                <p className="text-3xl font-black">٥٠٠+</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-1">
                  مناسبة ناجحة
                </p>
              </div>
              <div className="w-px bg-main-color/20" />
              <div>
                <p className="text-3xl font-black">١٠+</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-1">
                  سنوات خبرة
                </p>
              </div>
              <div className="w-px bg-main-color/20" />
              <div>
                <p className="text-3xl font-black">١٠٠٪</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-1">
                  رضا العملاء
                </p>
              </div>
            </div>
          </div>

          {image && (
            <div className="relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(82,97,185,0.18)] border border-main-color/10">
              <Image
                src={image}
                alt={title ?? "About Us Image"}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
