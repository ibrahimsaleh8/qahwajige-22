"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
    { name: "اتصل بنا", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#181818] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="inline-block text-main-color font-black text-xl mb-4">
            {brandName}
          </div>
          {description && (
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {description}
            </p>
          )}
          <div className="flex gap-2 mt-6 flex-wrap">
            {/* Social links HTML */}
            <a
              href="https://www.instagram.com/qahwajeyn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="انستقرام"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white
              hover:bg-main-color hover:text-white hover:border-main-color hover:scale-110
              transition-all duration-200">
              <FaInstagram size={14} />
            </a>
            <a
              href="https://www.tiktok.com/@user61719922769991"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تيك توك"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white
              hover:bg-main-color hover:text-main-background hover:border-main-color hover:scale-110
              transition-all duration-200">
              <FaTiktok size={14} />
            </a>
            <a
              href="https://www.facebook.com/SbabinAlkahwaa/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white
              hover:bg-main-color hover:text-main-background hover:border-main-color hover:scale-110
              transition-all duration-200">
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://x.com/NghmAbw11703"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تويتر"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white
              hover:bg-main-color hover:text-main-background hover:border-main-color hover:scale-110
              transition-all duration-200">
              <FaTwitter size={14} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="يوتيوب"
              className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-white
              hover:bg-main-color hover:text-main-background hover:border-main-color hover:scale-110
              transition-all duration-200">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-white font-black uppercase tracking-widest text-[10px] mb-5">
            روابط سريعة
          </p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-main-color transition-colors duration-200 text-sm font-semibold flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-main-color/30 group-hover:bg-main-color transition-colors duration-200 shrink-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-black uppercase tracking-widest text-[10px] mb-5">
            معلومات التواصل
          </p>
          <div className="space-y-4">
            {address && (
              <div className="flex items-start gap-3 text-white/75 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/[0.07] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-main-color" />
                </div>
                <span className="leading-relaxed">{address}</span>
              </div>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-white/75 hover:text-main-color transition-colors duration-200 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/[0.07] flex items-center justify-center shrink-0 group-hover:bg-main-color/15 transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-main-color" />
                </div>
                {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-white/75 hover:text-main-color transition-colors duration-200 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/[0.07] flex items-center justify-center shrink-0 group-hover:bg-main-color/15 transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-main-color" />
                </div>
                {phone}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>
            © {currentYear} {brandName}. جميع الحقوق محفوظة.
          </p>
          <p>خدمة ضيافة عربية أصيلة في الرياض</p>
        </div>
      </div>
    </footer>
  );
}
