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
    <section id="rating" className="bg-main-color text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-2xl md:text-3xl font-black">{item.value}</p>
            <p className="text-xs md:text-sm text-white/90 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
