export default function WideNumbersStatics() {
  const stats = [
    { value: `+500`, label: "عميل راضٍ" },
    { value: "+1000", label: "فنجان قهوة" },
    { value: "5/5", label: "متوسط التقييم" },
    {
      value: `+15`,
      label: "سنوات خبرة",
    },
  ];
  return (
    <section id="rating" className="bg-main-background py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-white border border-main-color/10 shadow-[0_12px_30px_rgba(82,97,185,0.12)] py-6">
            <p className="text-2xl md:text-3xl font-black text-main-color">{item.value}</p>
            <p className="text-xs md:text-sm text-low-color mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
