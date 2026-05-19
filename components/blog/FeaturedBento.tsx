export default function FeaturedBento() {
  return (
    <div
      className="space-y-5 md:space-y-0 md:grid md:grid-cols-12 md:gap-[32px] mb-12 md:mb-[80px]"
      style={{ minHeight: "clamp(400px, 50vw, 600px)" }}
    >
      {/* Main featured — 8 cols */}
      <div
        className="md:col-span-8 relative glass-panel rounded-2xl overflow-hidden group cursor-pointer"
        style={{ minHeight: "clamp(300px, 40vw, 500px)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-surface-container-high)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-surface) 0%, rgba(19,19,23,0.4) 60%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold border"
              style={{
                color: "var(--color-secondary)",
                borderColor: "rgba(76,215,246,0.4)",
                background: "rgba(76,215,246,0.08)",
              }}
            >
              FULL STACK
            </span>
            <span
              className="text-xs"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              8 min read
            </span>
          </div>
          <h2
            className="text-on-surface mb-3 group-hover:text-secondary transition-colors duration-300"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 600,
              lineHeight: "1.3",
              letterSpacing: "-0.02em",
            }}
          >
            Building a MERN Stack App from Scratch in 2024 — The Right Way
          </h2>
          <p
            className="text-sm md:text-base leading-7 max-w-xl mb-5"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            A real-world walkthrough of how I structure, build, and deploy
            production MERN applications — auth, file uploads, pagination, and
            all the gotchas nobody tells you about.
          </p>
          <span
            className="text-sm font-semibold tracking-widest"
            style={{ color: "var(--color-secondary)" }}
          >
            READ ARTICLE →
          </span>
        </div>
      </div>

      {/* Side — 4 cols, 2 stacked */}
      <div className="md:col-span-4 flex flex-col gap-5 md:gap-[32px]">
        {[
          {
            color: "var(--color-tertiary)",
            label: "REACT NATIVE",
            title: "React Native vs Flutter in 2024 — An Honest Comparison",
            mins: "6 min read",
          },
          {
            color: "var(--color-primary)",
            label: "CREATIVE",
            title: "How I Edit Videos and Ship Code in the Same Day",
            mins: "5 min read",
          },
        ].map(({ color, label, title, mins }) => (
          <div
            key={title}
            className="flex-1 glass-panel rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-secondary/30 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  color,
                  background: `${color}12`,
                  border: `1px solid ${color}25`,
                }}
              >
                {label}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {mins}
              </span>
            </div>
            <h3
              className="text-on-surface group-hover:text-secondary transition-colors duration-300"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 600,
                lineHeight: "1.4",
              }}
            >
              {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
