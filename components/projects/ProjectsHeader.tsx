export default function ProjectsHeader() {
  return (
    <div className="mb-[80px]">
      <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block text-secondary">
        PORTFOLIO
      </span>
      <h1
        className="text-on-surface mb-6"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "72px",
          fontWeight: 700,
          lineHeight: "80px",
          letterSpacing: "-0.04em",
        }}
      >
        Selected Work
      </h1>
      <p className="text-[18px] leading-[32px] text-on-surface-variant max-w-2xl">
        A curated collection of systems, interfaces, and digital experiences
        built with precision.
      </p>
    </div>
  );
}
