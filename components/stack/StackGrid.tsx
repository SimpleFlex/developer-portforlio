export default function StackGrid() {
  return (
    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-12 md:gap-[32px]">
      {/* Frontend — 8 cols */}
      <div className="md:col-span-8 bento-card p-6 md:p-8 rounded-2xl">
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-5 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          FRONTEND
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {[
            { name: "React.js", desc: "UI component architecture" },
            { name: "React Native", desc: "Cross-platform mobile" },
            { name: "Next.js", desc: "Full-stack framework" },
            { name: "TypeScript", desc: "Type-safe JavaScript" },
            { name: "Tailwind CSS", desc: "Utility-first styling" },
            { name: "HTML & CSS", desc: "The foundation" },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className="p-4 md:p-5 rounded-xl transition-all hover:bg-white/5"
              style={{ background: "var(--color-surface-container-high)" }}
            >
              <h4 className="text-on-surface font-semibold text-sm mb-1">
                {name}
              </h4>
              <p
                className="text-xs leading-5"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Database — 4 cols */}
      <div className="md:col-span-4 bento-card p-6 md:p-8 rounded-2xl">
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-5 block"
          style={{
            color: "var(--color-tertiary)",
            fontFamily: "var(--font-body)",
          }}
        >
          DATABASE
        </span>
        <div className="space-y-3">
          {[
            {
              name: "PostgreSQL",
              icon: "storage",
              color: "var(--color-primary)",
            },
            {
              name: "MongoDB",
              icon: "database",
              color: "var(--color-secondary)",
            },
            { name: "MySQL", icon: "table", color: "var(--color-tertiary)" },
            { name: "Redis", icon: "speed", color: "var(--color-primary)" },
          ].map(({ name, icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-3 p-3 md:p-4 rounded-xl"
              style={{ background: "var(--color-surface-container-high)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${color}15` }}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ color }}
                >
                  {icon}
                </span>
              </div>
              <span className="text-on-surface font-medium text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend — 4 cols */}
      <div className="md:col-span-4 bento-card p-6 md:p-8 rounded-2xl">
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-5 block"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          BACKEND
        </span>
        <div className="space-y-3">
          {[
            "Node.js",
            "Express.js",
            "REST APIs",
            "GraphQL",
            "JWT / OAuth2",
            "Socket.io",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-3 md:p-4 rounded-xl"
              style={{ background: "var(--color-surface-container-high)" }}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: "var(--color-primary)" }}
              >
                check_circle
              </span>
              <span className="text-on-surface text-sm font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full Stack Combos — 4 cols */}
      <div className="md:col-span-4 bento-card p-6 md:p-8 rounded-2xl">
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-5 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          FULL STACK COMBOS
        </span>
        <div className="space-y-3">
          {[
            {
              label: "MERN",
              desc: "MongoDB · Express · React · Node",
              color: "var(--color-secondary)",
            },
            {
              label: "PERN",
              desc: "PostgreSQL · Express · React · Node",
              color: "var(--color-primary)",
            },
            {
              label: "MEVN",
              desc: "MongoDB · Express · Vue · Node",
              color: "var(--color-tertiary)",
            },
            {
              label: "T3",
              desc: "Next.js · tRPC · Prisma · TypeScript",
              color: "var(--color-secondary)",
            },
          ].map(({ label, desc, color }) => (
            <div
              key={label}
              className="p-3 md:p-4 rounded-xl border"
              style={{ background: `${color}08`, borderColor: `${color}20` }}
            >
              <p className="font-bold text-sm mb-0.5" style={{ color }}>
                {label}
              </p>
              <p
                className="text-xs leading-5"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools — 4 cols */}
      <div className="md:col-span-4 bento-card p-6 md:p-8 rounded-2xl">
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-5 block"
          style={{
            color: "var(--color-tertiary)",
            fontFamily: "var(--font-body)",
          }}
        >
          TOOLS & DEVOPS
        </span>
        <div className="flex flex-wrap gap-2">
          {[
            "Git",
            "GitHub",
            "Docker",
            "Vercel",
            "Netlify",
            "Postman",
            "Figma",
            "VS Code",
            "Linux",
            "Firebase",
            "Expo",
            "Prisma",
            "Mongoose",
            "Zod",
          ].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 transition-all hover:border-secondary/40 hover:text-secondary cursor-default"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Creative tools — full width */}
      <div className="md:col-span-12 bento-card p-6 md:p-8 rounded-2xl">
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-5 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          CREATIVE TOOLS — VIDEO & PHOTO
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {[
            {
              name: "Adobe Premiere Pro",
              icon: "movie",
              color: "var(--color-primary)",
            },
            {
              name: "Adobe Lightroom",
              icon: "wb_sunny",
              color: "var(--color-secondary)",
            },
            {
              name: "Adobe Photoshop",
              icon: "brush",
              color: "var(--color-tertiary)",
            },
            {
              name: "DaVinci Resolve",
              icon: "tune",
              color: "var(--color-primary)",
            },
            {
              name: "After Effects",
              icon: "auto_awesome",
              color: "var(--color-secondary)",
            },
            { name: "CapCut", icon: "cut", color: "var(--color-tertiary)" },
            {
              name: "Camera Operation",
              icon: "videocam",
              color: "var(--color-primary)",
            },
            {
              name: "Colour Grading",
              icon: "palette",
              color: "var(--color-secondary)",
            },
          ].map(({ name, icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "var(--color-surface-container-high)" }}
            >
              <span
                className="material-symbols-outlined text-sm shrink-0"
                style={{ color }}
              >
                {icon}
              </span>
              <span className="text-on-surface text-sm font-medium leading-5">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
