import BentoGrid from "@/components/projects/BentoGrid";
import ProjectCTA from "@/components/projects/ProjectCTA";

export const metadata = {
  title: "Projects",
  description:
    "Full stack web apps, mobile apps, and creative production work.",
};

export default function ProjectsPage() {
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
          PORTFOLIO
        </span>
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 7vw, 72px)",
            fontWeight: 700,
            lineHeight: "1.05",
            letterSpacing: "-0.04em",
            color: "var(--color-on-surface)",
          }}
        >
          Selected Work
        </h1>
        <p
          className="leading-[1.8] max-w-2xl"
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--color-on-surface-variant)",
          }}
        >
          Web apps, mobile apps, APIs, and creative productions — built with
          precision over 4 years.
        </p>
      </div>

      <BentoGrid />
      <ProjectCTA />
    </div>
  );
}
