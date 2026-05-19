const cards = [
  {
    icon: "code",
    color: "var(--color-secondary)",
    bg: "rgba(76,215,246,0.08)",
    border: "rgba(76,215,246,0.2)",
    title: "Full Stack Engineering",
    body: "From PostgreSQL schemas to pixel-perfect React UIs — I own the entire stack. MERN, PERN, REST, GraphQL. No half measures.",
  },
  {
    icon: "videocam",
    color: "var(--color-primary)",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(180,197,255,0.2)",
    title: "Visual Storytelling",
    body: "Behind the lens or behind the timeline — I shoot, edit, and deliver cinematic video content that commands attention.",
  },
  {
    icon: "photo_camera",
    color: "var(--color-tertiary)",
    bg: "rgba(131,67,244,0.08)",
    border: "rgba(210,187,255,0.2)",
    title: "Photo Editing",
    body: "Colour grading, retouching, and composite work. Every image treated like a frame from a film — intentional and precise.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
      <div className="flex flex-col items-center text-center mb-12 md:mb-20">
        <span
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          What I Do
        </span>
        <h2
          className="text-on-surface max-w-2xl"
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 600,
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
          }}
        >
          Code. Film. Edit. Repeat.
        </h2>
        <p
          className="text-base leading-7 max-w-xl mt-4"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          A rare combination of technical depth and creative vision. I build
          systems that scale and visuals that stick.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[32px]">
        {cards.map(({ icon, color, bg, border, title, body }) => (
          <div
            key={title}
            className="bento-card p-6 md:p-8 rounded-2xl flex flex-col gap-5"
          >
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <span
                className="material-symbols-outlined text-2xl md:text-3xl"
                style={{ color }}
              >
                {icon}
              </span>
            </div>
            <div>
              <h3
                className="mb-2 text-on-surface"
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 600,
                  lineHeight: "1.3",
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm md:text-base leading-7"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
