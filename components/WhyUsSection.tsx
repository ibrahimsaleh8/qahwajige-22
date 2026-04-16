import { WhyUsSectionData } from "@/lib/responseType";
import { Award, Clock, MapPin, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  clock: Clock,
  shield: MapPin,
  sparkles: Sparkles,
};

export function WhyUsSection({
  description,
  features,
  label,
  title,
}: WhyUsSectionData) {
  const safeFeatures =
    features && features.length > 0
      ? features
      : [
          {
            icon: "Award",
            title: "جودة عالية",
            description: "نحرص على أدق التفاصيل لتقديم تجربة ضيافة راقية.",
          },
          {
            icon: "Clock",
            title: "التزام بالمواعيد",
            description: "نصل في الوقت المحدد ونجهز الخدمة بسرعة واحترافية.",
          },
          {
            icon: "Shield",
            title: "موثوقية",
            description: "وضوح كامل في الأسعار والتنفيذ كما تم الاتفاق.",
          },
          {
            icon: "Sparkles",
            title: "أسلوب مميز",
            description: "فريق أنيق وتقديم يعكس أصالة الضيافة السعودية.",
          },
        ];

  return (
    <section id="why-us" className="py-20 md:py-24 bg-main-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="inline-block bg-main-color-dark text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-main-color/10 shadow-sm mb-5">
            {label || "لماذا نحن"}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-main-black leading-tight">
            {title || "لماذا يختارنا عملاؤنا؟"}
          </h2>
          <p className="mt-4 text-low-color max-w-2xl mx-auto">
            {description ||
              "نقدم خدمة ضيافة متكاملة تجمع بين الجودة والالتزام والأناقة لتناسب جميع المناسبات."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {safeFeatures.map((feature, index) => {
            const iconKey = (feature.icon || "").toLowerCase();
            const Icon = iconMap[iconKey] || Award;

            return (
              <div
                key={`${feature.title}-${index}`}
                className="rounded-2xl bg-white border border-main-color/10 p-6 shadow-[0_14px_36px_rgba(82,97,185,0.12)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-main-color/10 text-main-color flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-main-black mb-2">
                  {feature.title || "ميزة احترافية"}
                </h3>
                <p className="text-low-color leading-7">
                  {feature.description ||
                    "نعتني بكل التفاصيل لضمان أفضل تجربة لضيوفكم."}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-main-color/10 bg-white/90 p-6 md:p-8 shadow-[0_18px_40px_rgba(82,97,185,0.14)]">
          <p className="text-main-black text-lg md:text-xl font-bold leading-relaxed text-center">
          {'"'}كانت التجربة أكثر من رائعة، دقة في المواعيد وتقديم أنيق نال إعجاب
            كل الضيوف.{'"'}
          </p>
          <p className="text-low-color text-center mt-3 text-sm">
            رأي عميل من الرياض
          </p>
        </div>
      </div>
    </section>
  );
}
