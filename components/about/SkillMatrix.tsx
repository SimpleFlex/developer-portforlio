const columns = [
  {
    label: "Frontend",
    color: "var(--color-secondary)",
    skills: [
      { name: "React.js", pct: 95 },
      { name: "React Native", pct: 88 },
      { name: "Next.js", pct: 90 },
      { name: "TypeScript", pct: 82 },
      { name: "Tailwind CSS", pct: 93 },
      { name: "HTML / CSS", pct: 97 },
    ],
  },
  {
    label: "Backend & Database",
    color: "var(--color-primary)",
    skills: [
      { name: "Node.js", pct: 90 },
      { name: "Express.js", pct: 88 },
      { name: "PostgreSQL", pct: 83 },
      { name: "MongoDB", pct: 87 },
      { name: "REST APIs", pct: 92 },
      { name: "GraphQL", pct: 72 },
    ],
  },
  {
    label: "Creative & Tools",
    color: "var(--color-tertiary)",
    skills: [
      { name: "Video Editing", pct: 90 },
      { name: "Photo Retouching", pct: 88 },
      { name: "Colour Grading", pct: 85 },
      { name: "Git & GitHub", pct: 90 },
      { name: "Docker", pct: 65 },
      { name: "Figma", pct: 75 },
    ],
  },
];

export default function SkillMatrix() {
  return (
    <section className="py-16 md:py-20 max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
      <div className="mb-10 md:mb-16">
        <span
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          CAPABILITIES
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
          Skill Matrix
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[32px]">
        {columns.map(({ label, color, skills }) => (
          <div
            key={label}
            className="bento-card p-6 md:p-8 rounded-2xl space-y-5"
          >
            <h3
              className="text-xs font-semibold tracking-widest uppercase pb-4 border-b border-white/10"
              style={{ color, fontFamily: "var(--font-body)" }}
            >
              {label}
            </h3>
            {skills.map(({ name, pct }) => (
              <div key={name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span style={{ color: "var(--color-on-surface-variant)" }}>
                    {name}
                  </span>
                  <span className="font-semibold" style={{ color }}>
                    {pct}%
                  </span>
                </div>
                <div
                  className="w-full h-[3px] rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: color }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
