import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قهوجى الرياض لخدمات الضيافة والقهوة العربية",
    short_name: "قهوجى الرياض",
    description:
      "أفضل خدمات قهوجى الرياض لتقديم القهوة العربية والضيافة في المناسبات والأفراح والفعاليات داخل جميع أحياء الرياض بأسلوب احترافي.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f9fdfb",
    theme_color: "#1f4d45",
    lang: "ar",
    dir: "rtl",
    categories: ["events", "lifestyle", "food", "business"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
