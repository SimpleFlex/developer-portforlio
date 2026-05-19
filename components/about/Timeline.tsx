const entries = [
  {
    period: "2023 — PRESENT",
    title: "Senior Full Stack Developer",
    company: "Freelance & Contract",
    desc: "Architecting and delivering full-stack web and mobile applications for clients across Nigeria and internationally. Specialising in MERN/PERN stack, REST APIs, and React Native mobile apps. Simultaneously producing video and photo content for creative clients.",
    color: "var(--color-secondary)",
  },
  {
    period: "2022 — 2023",
    title: "Full Stack Developer",
    company: "Startup Projects",
    desc: "Built and shipped multiple SaaS products from scratch — handling everything from database design with PostgreSQL and MongoDB, to building responsive React frontends and robust Node.js/Express backends.",
    color: "var(--color-primary)",
  },
  {
    period: "2021 — 2022",
    title: "Frontend Developer & Visual Editor",
    company: "Creative Agency",
    desc: "Developed responsive web interfaces using React and modern CSS. Handled photo retouching, colour grading, and video editing for agency clients — bridging the gap between design and development.",
    color: "var(--color-tertiary)",
  },
  {
    period: "2020 — 2021",
    title: "Junior Developer",
    company: "Self-Taught & Open Source",
    desc: "Started the journey — built first projects with HTML, CSS, JavaScript, then progressed to React and Node.js. Began shooting and editing video content as a creative outlet that grew into a professional skill.",
    color: "var(--color-secondary)",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
      <div className="mb-10 md:mb-16">
        <span
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          JOURNEY
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
          Experience
        </h2>
      </div>

      {/* Timeline — tighter left indent on mobile */}
      <div className="relative pl-6 md:pl-12 space-y-10 md:space-y-14 border-l border-white/10">
        {entries.map(({ period, title, company, desc, color }) => (
          <div key={title} className="relative">
            {/* Dot */}
            <div
              className="absolute -left-[25px] md:-left-[57px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full"
              style={{
                background: color,
                boxShadow: `0 0 14px 3px ${color}30`,
              }}
            />

            <span
              className="text-[10px] md:text-[11px] font-semibold tracking-widest block mb-1.5"
              style={{ color, fontFamily: "var(--font-body)" }}
            >
              {period}
            </span>
            <h3
              className="text-on-surface mb-1"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 600,
              }}
            >
              {title}
            </h3>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {company}
            </p>
            <p
              className="text-sm md:text-base leading-7 max-w-2xl"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
