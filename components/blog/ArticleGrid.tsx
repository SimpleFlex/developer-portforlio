const articles = [
  {
    color: "var(--color-secondary)",
    label: "FULL STACK",
    date: "Dec 4, 2024",
    title: "PostgreSQL vs MongoDB — When to Use Which",
    excerpt:
      "I've used both in production. Here's a straight-talking breakdown of when each database actually makes sense.",
    mins: "7 min",
  },
  {
    color: "var(--color-primary)",
    label: "REACT",
    date: "Nov 20, 2024",
    title: "State Management in 2024: Zustand, Redux, or Context?",
    excerpt:
      "After building 20+ React apps, here's my honest take on which state management solution to reach for and when.",
    mins: "9 min",
  },
  {
    color: "var(--color-tertiary)",
    label: "CREATIVE",
    date: "Nov 8, 2024",
    title: "My Colour Grading Workflow — From Flat Log to Cinematic",
    excerpt:
      "A behind-the-scenes look at how I take flat log footage and transform it into a polished, cinematic final cut in DaVinci Resolve.",
    mins: "6 min",
  },
];

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[32px] mb-12 md:mb-[80px]">
      {articles.map(({ color, label, date, title, excerpt, mins }) => (
        <div
          key={title}
          className="bento-card rounded-2xl overflow-hidden group cursor-pointer"
        >
          {/* Thumbnail */}
          <div
            className="aspect-video relative overflow-hidden flex items-center justify-center"
            style={{ background: "var(--color-surface-container-high)" }}
          >
            <span
              className="material-symbols-outlined text-5xl"
              style={{ color: "rgba(195,198,215,0.15)" }}
            >
              article
            </span>
            <div className="absolute top-3 left-3 md:top-4 md:left-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  color,
                  background: `${color}15`,
                  border: `1px solid ${color}25`,
                }}
              >
                {label}
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {date}
              </span>
              <span style={{ color: "rgba(195,198,215,0.25)" }}>·</span>
              <span
                className="text-xs"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {mins}
              </span>
            </div>
            <h3
              className="text-on-surface mb-2 group-hover:text-secondary transition-colors duration-300"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: 600,
                lineHeight: "1.4",
              }}
            >
              {title}
            </h3>
            <p
              className="text-sm leading-6"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
