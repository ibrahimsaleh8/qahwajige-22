"use client";

import { FooterData } from "@/lib/responseType";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  phone,
  email,
  address,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const formattedWhatsapp = whatsapp?.replace("+", "");
  const contactItems = [
    whatsapp && {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "واتساب",
      value: whatsapp,
      href: `https://wa.me/${formattedWhatsapp}`,
      external: true,
      ltr: true,
    },
    email && {
      icon: <Mail className="w-5 h-5" />,
      label: "البريد الإلكتروني",
      value: email,
      href: `mailto:${email}`,
      ltr: true,
    },
    phone && {
      icon: <Phone className="w-5 h-5" />,
      label: "رقم الجوال",
      value: phone,
      href: `tel:${phone}`,
      ltr: true,
    },
    address && {
      icon: <MapPin className="w-5 h-5" />,
      label: "الموقع",
      value: address,
      href: null,
      ltr: false,
    },
  ].filter(Boolean) as {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string | null;
    external?: boolean;
    ltr: boolean;
  }[];

  return (
    <section id="contact" className="bg-second-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-main-color-dark text-white text-xs font-bold uppercase tracking-wide px-5 py-2 rounded-full mb-4 border border-main-color/10 shadow-sm">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-main-black leading-tight mb-4">
            بيانات التواصل
          </h2>
          <p className="text-low-color max-w-xl mx-auto text-base">
            يمكنك التواصل معنا مباشرة عبر واتساب أو الهاتف أو البريد، ومعرفة
            موقعنا على الخريطة.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white border border-main-color/10 p-4 shadow-[0_14px_30px_rgba(82,97,185,0.12)]">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-main-color/10 text-main-color flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-low-color mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        dir={item.ltr ? "ltr" : "rtl"}
                        className="font-semibold text-main-black hover:text-main-color transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-main-black">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-main-color/10 shadow-[0_20px_40px_rgba(82,97,185,0.16)] min-h-80 relative">
            <iframe
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="موقعنا على الخريطة"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
