"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;
    setSelectedRating(value);
    setIsLoading(true);
    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(value);
        localStorage.setItem(STORAGE_KEY(projectId), String(value));
        Toast({ icon: "success", message: "شكراً لتقييمك" });
      } else {
        setSelectedRating(0);
        Toast({ icon: "error", message: data.message || "حدث خطأ في التقييم" });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-3 rtl">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= value;
        return interactive ? (
          <motion.button
            key={star}
            type="button"
            aria-label="زر التقييم"
            disabled={isLoading || !mounted}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            whileHover={{ scale: 1.3, rotate: -5 }}
            whileTap={{ scale: 0.85 }}
            className="transition disabled:opacity-40">
            <Star
              className="w-12 h-12 drop-shadow-lg"
              style={{
                fill: active ? "var(--accent-gold)" : "transparent",
                color: active ? "var(--accent-gold)" : "var(--low-color)",
                transition: "fill 0.2s, color 0.2s",
              }}
              strokeWidth={2}
            />
          </motion.button>
        ) : (
          <Star
            key={star}
            className="w-12 h-12"
            style={{
              fill: active ? "var(--accent-gold)" : "transparent",
              color: active ? "var(--accent-gold)" : "var(--low-color)",
            }}
            strokeWidth={2}
          />
        );
      })}
    </div>
  );

  return (
    <section
      id="rating"
      className="relative py-24 bg-second-background text-main-black overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-main-color-dark text-white border border-main-color/10 text-xs font-bold uppercase tracking-wide px-5 py-2 rounded-full mb-5">
            التقييمات
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight -rotate-1 mb-4">
            قيّم تجربتك
          </h2>
          <div className="w-20 h-2 bg-accent-gold rounded-full mx-auto mb-4 shadow-glow" />
          <p className="text-low-color max-w-xl mx-auto text-lg">
            رأيك يساعدنا على تقديم تجربة ضيافة أفضل دائماً.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-luxury overflow-hidden border border-main-color/10">
          {/* Stats row */}
          {(averageRating > 0 || totalRatings > 0) && (
            <div className="grid grid-cols-2 divide-x divide-x-reverse divide-main-color/20 border-b border-main-color/20">
              {averageRating > 0 && (
                <div className="py-10 px-6 text-center">
                  <div className="text-5xl md:text-6xl font-black text-main-color mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="w-10 h-1 bg-accent-gold rounded-full mx-auto mb-2" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-low-color">
                    متوسط التقييم
                  </p>
                </div>
              )}
              {totalRatings > 0 && (
                <div className="py-10 px-6 text-center">
                  <div className="text-5xl md:text-6xl font-black text-main-color mb-2">
                    {totalRatings}
                  </div>
                  <div className="w-10 h-1 bg-accent-gold rounded-full mx-auto mb-2" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-low-color">
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Interaction area */}
          <div className="flex flex-col items-center gap-6 py-14 px-8">
            {submitted !== null && mounted ? (
              <>
                {renderStars(submitted, false)}
                <div className="mt-3 bg-main-color/10 border border-main-color/20 text-main-color text-sm font-bold uppercase tracking-wide px-10 py-3 rounded-full shadow-inner">
                  ✅ تم إرسال تقييمك
                </div>
              </>
            ) : (
              <>
                {renderStars(displayRating, true)}
                <p className="text-sm font-semibold uppercase tracking-wide text-low-color min-h-5">
                  {isLoading ? (
                    <span className="text-main-color animate-pulse">
                      جاري الإرسال...
                    </span>
                  ) : mounted ? (
                    "اضغط على النجوم لتقييمنا"
                  ) : (
                    ""
                  )}
                </p>
              </>
            )}
          </div>

          {/* Bottom accent bar */}
          <div className="h-1.5 bg-accent-gold rounded-t-full" />
        </motion.div>
      </div>
    </section>
  );
}
