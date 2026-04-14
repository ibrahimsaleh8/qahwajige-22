import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};
export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section id="services" className="relative bg-second-background py-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="inline-block bg-main-color/10 text-main-color text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
              {label}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-main-black leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-low-color text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4">
        {items &&
          items.map((card) => {
            const IconComponent =
              iconMap[card.icon as keyof typeof iconMap] || Coffee;
            return (
              <div
                key={card.title}
                className="flex flex-col text-center items-center bg-card-background border border-main-color/15 rounded-2xl p-7 shadow-[0_8px_24px_rgba(84,56,37,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-main-color/10 rounded-xl flex items-center justify-center mb-6 text-main-color">
                  <IconComponent className="w-7 h-7 text-main-color" />
                </div>
                <h3 className="text-xl font-bold text-main-black mb-3">
                  {card.title}
                </h3>
                <p className="text-low-color text-sm md:text-base leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
