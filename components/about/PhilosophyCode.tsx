import TerminalBlock from "@/components/ui/TerminalBlock";

export default function PhilosophyCode() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[64px] items-center">
        {/* Left */}
        <div>
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
            style={{
              color: "var(--color-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            MY PHILOSOPHY
          </span>
          <blockquote
            className="mb-6 text-on-surface"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 600,
              lineHeight: "1.4",
              letterSpacing: "-0.01em",
            }}
          >
            "Whether it's a line of code or a frame of film — everything I
            create is built with purpose and finished with pride."
          </blockquote>
          <p
            className="text-base leading-7 mb-8 md:mb-10"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            I don't believe in half-built products or rushed edits. Every
            project gets the same energy — clean architecture, thoughtful UX,
            and a delivery that makes clients come back.
          </p>
          <button className="btn-gradient w-full sm:w-auto justify-center">
            See My Work
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Right */}
        <TerminalBlock filename="elijah.philosophy.ts">
          <p>
            <span style={{ color: "var(--color-primary)" }}>interface</span>{" "}
            <span style={{ color: "var(--color-tertiary)" }}>MyApproach</span>{" "}
            {"{"}
          </p>
          <p className="ml-4">
            code:{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              'clean | tested | scalable'
            </span>
            ;
          </p>
          <p className="ml-4">
            design:{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              'functional + beautiful'
            </span>
            ;
          </p>
          <p className="ml-4">
            film:{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              'intentional | cinematic'
            </span>
            ;
          </p>
          <p className="ml-4">
            delivery:{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              'on-time | no-excuse'
            </span>
            ;
          </p>
          <p className="ml-4">
            attitude:{" "}
            <span style={{ color: "var(--color-tertiary)" }}>true</span>;
          </p>
          <p>{"}"}</p>
          <br />
          <p>
            <span style={{ color: "var(--color-primary)" }}>const</span> output
            = build(passion + precision);
          </p>
          <p style={{ color: "var(--color-on-surface-variant)" }}>
            {"// → Work that speaks for itself"}
          </p>
        </TerminalBlock>
      </div>
    </section>
  );
}
