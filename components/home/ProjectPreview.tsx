import Link from "next/link";

const previews = [
  {
    tag: "FULL STACK · MERN",
    title: "ShopSphere",
    desc: "Full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "var(--color-secondary)",
  },
  {
    tag: "FULL STACK · PERN",
    title: "TaskFlow Pro",
    desc: "Project management app with drag-and-drop boards, team collaboration, and PostgreSQL-backed state.",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    color: "var(--color-primary)",
  },
  {
    tag: "MOBILE · REACT NATIVE",
    title: "LensLog",
    desc: "Mobile app for photographers to log shoots, manage client galleries, and track editing progress.",
    tech: ["React Native", "Expo", "MongoDB", "Node.js"],
    color: "var(--color-tertiary)",
  },
];

export default function ProjectPreview() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 md:mb-16">
        <div>
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 block"
            style={{
              color: "var(--color-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Selected Work
          </span>
          <h2
            className="text-on-surface"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 600,
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}
          >
            Recent Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-sm font-semibold tracking-widest shrink-0 transition-colors duration-200 hover:opacity-70"
          style={{ color: "var(--color-secondary)" }}
        >
          View All Work →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[32px]">
        {previews.map(({ tag, title, desc, tech, color }) => (
          <div
            key={title}
            className="bento-card p-6 md:p-8 rounded-2xl flex flex-col justify-between gap-5"
          >
            <div>
              <span
                className="text-[10px] font-semibold tracking-widest uppercase mb-3 block"
                style={{ color, fontFamily: "var(--font-body)" }}
              >
                {tag}
              </span>
              <h3
                className="mb-2 text-on-surface"
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "clamp(20px, 2.5vw, 24px)",
                  fontWeight: 600,
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-6"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {desc}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-white/10"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
