const services = [
  {
    cols: 8,
    icon: "code",
    color: "var(--color-secondary)",
    label: "FLAGSHIP SERVICE",
    title: "Full Stack Web Development",
    desc: "End-to-end web applications built on the MERN or PERN stack. I handle everything — database design, backend APIs, authentication, and pixel-perfect React frontends. You bring the idea; I ship the product.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "MONGODB"],
  },
  {
    cols: 4,
    icon: "phone_iphone",
    color: "var(--color-primary)",
    label: "MOBILE",
    title: "React Native Apps",
    desc: "Cross-platform iOS & Android apps using React Native and Expo. One codebase, both platforms, native feel.",
    tags: [],
  },
  {
    cols: 4,
    icon: "hub",
    color: "var(--color-tertiary)",
    label: "BACKEND",
    title: "REST & GraphQL APIs",
    desc: "Scalable, documented, and secured APIs built with Node.js, Express, and your database of choice.",
    tags: [],
  },
  {
    cols: 4,
    icon: "database",
    color: "var(--color-primary)",
    label: "DATA",
    title: "Database Architecture",
    desc: "Schema design, query optimisation, and migrations — PostgreSQL, MongoDB, or MySQL.",
    tags: [],
  },
  {
    cols: 4,
    icon: "videocam",
    color: "var(--color-secondary)",
    label: "CREATIVE",
    title: "Video Production & Editing",
    desc: "Full-cycle video production — shoot, edit, colour grade, and deliver cinematic content for brands, events, and social media.",
    tags: [],
  },
  {
    cols: 6,
    icon: "photo_camera",
    color: "var(--color-tertiary)",
    label: "PHOTO",
    title: "Photo Editing & Retouching",
    desc: "Professional Lightroom and Photoshop editing — colour grading, skin retouching, composite work, and batch processing.",
    tags: [],
  },
  {
    cols: 6,
    icon: "brush",
    color: "var(--color-primary)",
    label: "UI/UX",
    title: "UI Design & Prototyping",
    desc: "Figma-based wireframes and high-fidelity prototypes that bridge design vision and development reality.",
    tags: [],
  },
];

export default function ServicesGrid() {
  return (
    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-12 md:gap-[32px]">
      {services.map(({ cols, icon, color, label, title, desc, tags }) => (
        <div
          key={title}
          className={`md:col-span-${cols} bento-card p-6 md:p-8 rounded-2xl flex flex-col gap-4`}
        >
          <div
            className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${color}12`, border: `1px solid ${color}22` }}
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ color }}
            >
              {icon}
            </span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{ color, fontFamily: "var(--font-body)" }}
            >
              {label}
            </span>
            <h3
              className="text-on-surface"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(18px, 2vw, 22px)",
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
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-1">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-white/10"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
