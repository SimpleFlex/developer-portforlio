const stats = [
  {
    icon: "rocket_launch",
    value: "20+",
    label: "Projects Shipped",
    color: "var(--color-secondary)",
  },
  {
    icon: "group",
    value: "10+",
    label: "Happy Clients",
    color: "var(--color-primary)",
  },
  {
    icon: "schedule",
    value: "4+",
    label: "Years Experience",
    color: "var(--color-tertiary)",
  },
  {
    icon: "videocam",
    value: "50+",
    label: "Videos Produced",
    color: "var(--color-secondary)",
  },
];

export default function StatsGrid() {
  return (
    <section className="pb-12 md:pb-20 max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[32px]">
        {stats.map(({ icon, value, label, color }) => (
          <div
            key={label}
            className="bento-card p-5 md:p-8 rounded-2xl flex flex-col gap-3 md:gap-4"
          >
            <span
              className="material-symbols-outlined text-2xl md:text-4xl"
              style={{ color }}
            >
              {icon}
            </span>
            <p
              className="font-bold"
              style={{
                fontFamily: "var(--font-headline)",
                color,
                fontSize: "clamp(28px, 4vw, 44px)",
              }}
            >
              {value}
            </p>
            <p
              className="text-xs font-semibold tracking-widest uppercase leading-5"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
