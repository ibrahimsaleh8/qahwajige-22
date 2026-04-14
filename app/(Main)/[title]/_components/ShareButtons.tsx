"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { Link2, Check } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

export default function ShareButtons({ title }: Props) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUrl(window.location.href);
    }
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const shareLinks = [
    {
      icon: FaWhatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      label: "واتساب",
      bg: "bg-[#25D366] hover:bg-[#1da851]",
    },
    {
      icon: FaFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: "فيسبوك",
      bg: "bg-[#1877f2] hover:bg-[#1464d8]",
    },
    {
      icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      label: "تويتر",
      bg: "bg-main-black hover:bg-main-black/80",
    },
    {
      icon: BsTelegram,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      label: "تليجرام",
      bg: "bg-[#0088cc] hover:bg-[#0077b5]",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center" dir="rtl">
      {/* Label */}
      <span className="text-xs font-bold uppercase tracking-widest text-low-color whitespace-nowrap">
        شارك المقالة:
      </span>

      {/* Social icons */}
      {shareLinks.map((link, i) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.06,
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white
              shadow-[0_4px_0_rgba(0,0,0,0.15)]
              transition-colors duration-200 ${link.bg}`}>
            <Icon className="w-4 h-4" />
          </motion.a>
        );
      })}

      {/* Copy link button */}
      <motion.button
        onClick={handleCopy}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-black
          shadow-[0_4px_0_rgba(0,0,0,0.1)]
          transition-all duration-200
          ${
            copied
              ? "bg-main-color text-white shadow-[0_2px_0_rgba(0,0,0,0.1)]"
              : "bg-main-color/10 border border-main-color/20 text-main-color hover:bg-main-color hover:text-white"
          }`}>
        {copied ? (
          <>
            <Check className="w-4 h-4" strokeWidth={2.5} />
            تم النسخ
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" strokeWidth={2} />
            نسخ الرابط
          </>
        )}
      </motion.button>
    </div>
  );
}
