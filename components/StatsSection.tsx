"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "٥٠٠+", label: "مناسبة نُفذت", icon: "🎉" },
  { value: "١٠+", label: "سنوات خبرة", icon: "⭐" },
  { value: "١٠٠٪", label: "رضا العملاء", icon: "🏆" },
];

export default function StatsSection() {
  return (
    <section dir="rtl" className="relative bg-main-background overflow-hidden">
      {/* Teal wave band */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 bg-main-background" />
        <div className="h-[55%] bg-main-color" />
      </div>

      {/* Top wave */}
      <div className="absolute top-[44%] left-0 w-full leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-16">
          <path
            className="fill-main-color"
            d="M0,40L60,35C120,30,240,20,360,25C480,30,600,50,720,53C840,56,960,43,1080,35C1200,27,1320,22,1380,20L1440,18L1440,80L0,80Z"
          />
        </svg>
      </div>

      {/* Doodles on teal band */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-8 right-[6%] w-20 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-12 left-[4%] w-16 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute bottom-6 left-[30%] w-24 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
        </svg>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-card-background rounded-3xl px-8 py-10 flex flex-col items-center text-center
                shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                border border-main-color/10
                group transition-shadow duration-300
                hover:shadow-[0_24px_48px_rgba(0,166,133,0.22)]">
              {/* Icon bubble */}
              <div
                className="w-16 h-16 rounded-full bg-main-color/10 flex items-center justify-center text-3xl mb-6
                group-hover:bg-main-color group-hover:scale-110 transition-all duration-300">
                <span className="group-hover:grayscale-0">{stat.icon}</span>
              </div>

              {/* Value */}
              <span
                className="text-6xl font-black text-main-color leading-none mb-3
                group-hover:text-main-color-dark transition-colors duration-300">
                {stat.value}
              </span>

              {/* Divider */}
              <div
                className="w-10 h-1.5 rounded-full bg-accent-gold mb-4
                group-hover:w-16 transition-all duration-300"
              />

              {/* Label */}
              <p className="text-sm font-semibold uppercase tracking-widest text-low-color">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
