import FeaturedBento from "@/components/blog/FeaturedBento";
import CategoryFilter from "@/components/blog/CategoryFilter";
import ArticleGrid from "@/components/blog/ArticleGrid";
import NewsletterSection from "@/components/blog/NewsletterSection";

export const metadata = {
  title: "Blog",
  description:
    "Insights on full stack development, React Native, creative production, and the builder lifestyle.",
};

export default function BlogPage() {
  return (
    <div className="pt-20 md:pt-28 pb-16 md:pb-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
        {/* Header */}
        <div className="mb-10 md:mb-[80px]">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-[32px]">
            <div className="flex-1">
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
                style={{
                  color: "var(--color-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                THOUGHTS & INSIGHTS
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 7vw, 72px)",
                  fontWeight: 700,
                  lineHeight: "1.05",
                  letterSpacing: "-0.04em",
                  color: "var(--color-on-surface)",
                }}
              >
                Code &amp; <br />
                <span style={{ color: "var(--color-secondary)" }}>
                  Creativity.
                </span>
              </h1>
            </div>
            <div className="w-full md:w-72 relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-transparent py-3 md:py-4 text-sm md:text-base outline-none"
                style={{
                  borderBottom: "1px solid var(--color-outline-variant)",
                  color: "var(--color-on-surface)",
                  fontFamily: "var(--font-body)",
                }}
              />
              <span
                className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-sm"
                style={{ color: "var(--color-outline-variant)" }}
              >
                search
              </span>
            </div>
          </div>
        </div>

        <FeaturedBento />
        <CategoryFilter />
        <ArticleGrid />
        <NewsletterSection />
      </div>
    </div>
  );
}
