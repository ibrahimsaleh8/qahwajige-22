import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./_components/ShareButtons";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticleResponse = {
  success: boolean;
  data: {
    article: Article;
  };
};

type Props = {
  params: Promise<{ title: string }>;
};

export async function generateStaticParams() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
    { cache: "force-cache" },
  );
  if (!res.ok) return [];
  const data = await res.json();
  const articles = data.data.articles as { title: string }[];
  return articles.map((article) => ({
    title: article.title.split(" ").join("-"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedTitle = (await params).title.split("-").join(" ");
  const res = await fetch(`${APP_URL}/api/article/title/${decodedTitle}`);
  if (!res.ok) {
    return {
      title: "مقال غير موجود",
      description: "هذا المقال غير متوفر حالياً",
    };
  }
  const data = await res.json();
  const article = data.data.article;
  const url = `${APP_URL}/articles/${(await params).title}`;
  return {
    title: article.title,
    openGraph: {
      title: article.title,
      url,
      type: "article",
      locale: "ar_SA",
      images: article.coverImage
        ? [
            {
              url: article.coverImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const res = await fetch(
    `${APP_URL}/api/article/title/${title.split("-").join(" ")}`,
  );
  if (!res.ok) notFound();

  const data: GetArticleResponse = await res.json();
  const article = data.data.article;

  return (
    <main className="relative min-h-screen bg-main-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-main-color mb-12
            bg-main-color/10 px-4 py-2 rounded-full
            hover:bg-main-color hover:text-white
            transition-all duration-200">
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          الرجوع إلى المقالات
        </Link>

        {/* Article card */}
        <article className="overflow-hidden ">
          {/* Cover image */}
          {article.coverImage && (
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-main-color-dark/40 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-14">
            {/* Meta row */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-main-color text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                مقال
              </span>
              <span className="text-sm text-low-color font-semibold">
                {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-main-black rotate-0 tracking-tight mb-5">
              {article.title}
            </h1>

            {/* Gold divider */}
            <div className="w-16 h-1.5 bg-accent-gold rounded-full mb-10" />

            {/* Body */}
            {article.content && (
              <div
                className="
                  article-content prose max-w-none
                  prose-headings:text-main-black prose-headings:font-extrabold
                  prose-p:text-low-color prose-p:leading-relaxed
                  prose-a:text-main-color prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-main-black
                  prose-li:text-low-color
                  prose-blockquote:border-r-4 prose-blockquote:border-main-color prose-blockquote:bg-main-color/5 prose-blockquote:rounded-l-xl prose-blockquote:text-low-color
                  prose-hr:border-main-color/15
                  prose-img:rounded-2xl prose-img:shadow-[0_10px_30px_rgba(0,166,133,0.12)]
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}

            {/* Share */}
            <div className="mt-14 pt-8 border-t border-main-color/10">
              <ShareButtons title={article.title} />
            </div>
          </div>
        </article>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wide
              bg-main-color-dark text-white px-7 py-3.5 rounded-full
              hover:bg-main-color-dark hover:-translate-y-0.5
              active:translate-y-0.5 active:shadow-[0_1px_0_rgba(0,0,0,0.15)]
              transition-all duration-200">
            <ArrowLeft className="w-4 h-4" />
            عرض جميع المقالات
          </Link>
        </div>
      </div>
    </main>
  );
}
