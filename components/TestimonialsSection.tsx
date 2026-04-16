"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "الخدمة ممتازة جدًا والتنظيم كان احترافي من البداية للنهاية.",
    author: "أحمد العتيبي",
    occasion: "مناسبة عائلية",
  },
  {
    quote: "الفريق ملتزم بالمواعيد وتقديم القهوة كان راقٍ جدًا.",
    author: "سارة القحطاني",
    occasion: "حفل خاص",
  },
  {
    quote: "أفضل تجربة ضيافة تعاملت معها، أنصح بهم بكل ثقة.",
    author: "شركة النخبة",
    occasion: "فعالية شركات",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-second-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-main-color-dark text-white text-xs font-bold uppercase tracking-wide px-5 py-2 rounded-full mb-5 border border-main-color/10 shadow-sm">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-main-black leading-tight mb-4">
            شهادات نعتز بها
          </h2>
          <p className="text-low-color max-w-xl mx-auto text-base">
            تجارب حقيقية من عملائنا في مختلف المناسبات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-main-color/10 p-6 shadow-[0_14px_30px_rgba(82,97,185,0.12)]">
              <div className="flex items-center gap-1 mb-4 text-accent-gold">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="h-4 w-4 fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>
              <p className="text-low-color leading-7 mb-5">{item.quote}</p>
              <div className="border-t border-main-color/10 pt-4">
                <p className="font-bold text-main-black">{item.author}</p>
                <p className="text-xs text-low-color mt-1">{item.occasion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
