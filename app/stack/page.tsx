import StackGrid from "@/components/stack/StackGrid";

export const metadata = {
  title: "Tech Stack",
  description:
    "MERN, PERN, React Native, PostgreSQL, MongoDB and the full creative toolkit.",
};

export default function StackPage() {
  return (
    <div className="pt-20 md:pt-28 pb-16 md:pb-[120px] px-6 md:px-16 lg:px-[64px] max-w-[1280px] mx-auto">
      <div className="mb-12 md:mb-[80px]">
        <span
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          ARSENAL
        </span>
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 7vw, 72px)",
            fontWeight: 700,
            lineHeight: "1.05",
            letterSpacing: "-0.04em",
            background:
              "linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-tertiary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Tech Stack
        </h1>
        <p
          className="leading-[1.8] max-w-2xl"
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--color-on-surface-variant)",
          }}
        >
          Every tool, framework, and creative application in my daily workflow —
          from MERN to Premiere Pro.
        </p>
      </div>
      <StackGrid />
    </div>
  );
}
