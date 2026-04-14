import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticlesResponse = {
  success: boolean;
  data: {
    articles: Article[];
    count: number;
  };
};

export default async function ArticlesPage() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
  );

  if (!res.ok) throw new Error("Failed to fetch articles");

  const data: GetArticlesResponse = await res.json();
  const articles = data.data.articles;

  return (
    <section
      id="articles"
      className="relative min-h-[60vh] bg-main-background overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-white mb-12
            bg-main-color-dark px-4 py-2 rounded-full
            hover:bg-main-color hover:text-white
            transition-all duration-200">
          <Home className="w-4 h-4" strokeWidth={2} />
          الصفحة الرئيسية
        </Link>

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight mb-4">
            أسرار وفنون الضيافة
          </h1>
          <div className="w-16 h-1.5 bg-accent-gold rounded-full mx-auto mb-5" />
          <p className="text-low-color text-lg leading-relaxed max-w-2xl mx-auto">
            اكتشف مقالات ونصائح متخصصة في فنون الضيافة العربية والقهوة، مقدمة
            بأسلوب يجمع بين الاحترافية واللمسة السعودية العصرية.
          </p>
        </div>

        {/* Empty state */}
        {articles.length === 0 ? (
          <div className="bg-second-bg rounded-3xl p-20 text-center border border-main-color/10">
            <p className="text-low-color font-semibold uppercase tracking-widest text-sm">
              لا توجد مقالات متاحة حالياً
            </p>
            <div className="mt-6 w-16 h-1.5 bg-accent-gold rounded-full mx-auto" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                href={`/${article.title.split(" ").join("-")}`}
                className="group flex flex-col bg-second-bg rounded-md overflow-hidden
                  border border-white/20
                  hover:-translate-y-2 
                  transition-all duration-300">
                {/* Image */}
                {article.coverImage ? (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-main-color-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  <div className="aspect-video bg-main-color/10 flex items-center justify-center">
                    <span className="text-6xl font-black text-main-color group-hover:text-main-color transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Number badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-7 h-7 rounded-full bg-main-color flex items-center justify-center text-white text-xs font-black
                      group-hover:bg-accent-gold group-hover:text-main-black transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-low-color">
                      {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold mb-3 text-main-black leading-snug line-clamp-2 group-hover:text-main-color transition-colors duration-200">
                    {article.title}
                  </h2>

                  {/* Divider */}
                  <div className="w-8 h-1 rounded-full bg-accent-gold mb-4 group-hover:w-14 transition-all duration-300" />

                  {article.content && (
                    <p className="text-sm text-low-color leading-relaxed line-clamp-3 flex-1">
                      {article.content.replace(/<[^>]+>/g, "")}
                    </p>
                  )}

                  {/* Read more */}
                  <div
                    className="mt-6 flex items-center gap-2 text-sm font-black text-main-color
                    group-hover:gap-3 transition-all duration-200">
                    اقرأ المقال
                    <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
