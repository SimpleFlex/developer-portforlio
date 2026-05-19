import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(37,99,235,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-20 w-72 md:w-96 h-72 md:h-96 rounded-full blur-[100px] opacity-20"
          style={{ background: "var(--color-primary-container)" }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 rounded-full blur-[100px] opacity-15"
          style={{ background: "var(--color-secondary-container)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[32px] items-center">
          {/* ── Left: Copy ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--color-secondary)" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{
                  color: "var(--color-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Available for work
              </span>
            </div>

            {/* Heading — responsive sizes */}
            <h1
              className="mb-4 text-on-surface w-full"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                fontSize: "clamp(44px, 8vw, 68px)",
                lineHeight: "1.05",
              }}
            >
              Hi, I'm <br />
              <span
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-tertiary))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Elijah.
              </span>
            </h1>

            {/* Role pills */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
              {[
                {
                  role: "Full Stack Developer",
                  border: "rgba(76,215,246,0.4)",
                  color: "var(--color-secondary)",
                  bg: "rgba(76,215,246,0.08)",
                },
                {
                  role: "Videographer",
                  border: "rgba(180,197,255,0.4)",
                  color: "var(--color-primary)",
                  bg: "rgba(180,197,255,0.08)",
                },
                {
                  role: "Photo Editor",
                  border: "rgba(210,187,255,0.4)",
                  color: "var(--color-tertiary)",
                  bg: "rgba(210,187,255,0.08)",
                },
              ].map(({ role, border, color, bg }) => (
                <span
                  key={role}
                  className="px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider border"
                  style={{
                    borderColor: border,
                    color,
                    background: bg,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Body */}
            <p
              className="mb-8 md:mb-10 max-w-xl"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: "1.8",
                color: "var(--color-on-surface-variant)",
              }}
            >
              I craft high-performance web &amp; mobile applications, and tell
              visual stories through the lens. 4 years of turning ideas into
              shipped products — from database to deployment, from shutter to
              screen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/projects" className="w-full sm:w-auto">
                <MagneticButton
                  className="w-full sm:w-auto justify-center px-8 md:px-10 py-4 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)]"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary-container), var(--color-tertiary-container))",
                    color: "var(--color-on-primary)",
                    fontFamily: "var(--font-body)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  View My Work
                </MagneticButton>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <MagneticButton
                  className="w-full sm:w-auto justify-center glass-panel px-8 md:px-10 py-4 rounded-xl text-xs font-semibold tracking-widest uppercase hover:bg-white/5 transition-all duration-300"
                  style={{
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Let's Talk
                </MagneticButton>
              </Link>
            </div>

            {/* Mobile mini-stats */}
            <div className="flex gap-6 mt-10 lg:hidden">
              {[
                { val: "4+", label: "Years", color: "var(--color-secondary)" },
                {
                  val: "20+",
                  label: "Projects",
                  color: "var(--color-primary)",
                },
                {
                  val: "10+",
                  label: "Clients",
                  color: "var(--color-tertiary)",
                },
              ].map(({ val, label, color }) => (
                <div key={label} className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ color, fontFamily: "var(--font-headline)" }}
                  >
                    {val}
                  </p>
                  <p
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Floating mockup (desktop only) ── */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Code card */}
              <div
                className="absolute w-[78%] glass-panel rounded-xl overflow-hidden shadow-2xl z-20"
                style={{
                  transform: "rotate(-5deg) translateX(-8%) translateY(-12%)",
                  aspectRatio: "4/3",
                }}
              >
                <div
                  className="flex gap-2 px-4 py-2 border-b border-white/5"
                  style={{ background: "var(--color-surface-container-high)" }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "var(--color-error)" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "var(--color-secondary)" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "var(--color-tertiary)" }}
                  />
                  <span
                    className="ml-2 text-[11px]"
                    style={{
                      color: "rgba(195,198,215,0.35)",
                      fontFamily: "var(--font-code)",
                    }}
                  >
                    elijah.config.ts
                  </span>
                </div>
                <div
                  className="p-5 text-[13px] leading-6"
                  style={{
                    fontFamily: "var(--font-code)",
                    color: "var(--color-secondary)",
                  }}
                >
                  <p className="mb-1">
                    <span style={{ color: "var(--color-tertiary)" }}>
                      const
                    </span>{" "}
                    elijah = {"{"}
                  </p>
                  <p className="ml-4">
                    name:{" "}
                    <span style={{ color: "var(--color-primary)" }}>
                      'Makuochukwu Elijah'
                    </span>
                    ,
                  </p>
                  <p className="ml-4">
                    role:{" "}
                    <span style={{ color: "var(--color-primary)" }}>
                      ['Dev', 'Filmmaker']
                    </span>
                    ,
                  </p>
                  <p className="ml-4">
                    exp:{" "}
                    <span style={{ color: "var(--color-secondary)" }}>4</span>,
                  </p>
                  <p className="ml-4">
                    stack:{" "}
                    <span style={{ color: "var(--color-primary)" }}>
                      'MERN | PERN'
                    </span>
                    ,
                  </p>
                  <p className="ml-4">
                    lens:{" "}
                    <span style={{ color: "var(--color-tertiary)" }}>true</span>
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Stats card */}
              <div
                className="absolute bottom-0 right-0 w-[55%] glass-panel p-5 rounded-xl shadow-2xl z-30"
                style={{ transform: "rotate(3deg) translateX(12px)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      val: "4+",
                      label: "Years",
                      color: "var(--color-secondary)",
                    },
                    {
                      val: "20+",
                      label: "Projects",
                      color: "var(--color-primary)",
                    },
                    {
                      val: "10+",
                      label: "Clients",
                      color: "var(--color-tertiary)",
                    },
                    {
                      val: "100%",
                      label: "Passion",
                      color: "var(--color-secondary)",
                    },
                  ].map(({ val, label, color }) => (
                    <div key={label}>
                      <p
                        className="text-xl font-bold"
                        style={{ color, fontFamily: "var(--font-headline)" }}
                      >
                        {val}
                      </p>
                      <p
                        className="text-[10px] tracking-widest uppercase"
                        style={{ color: "var(--color-on-surface-variant)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow orb */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full z-10"
                style={{
                  background: "rgba(76,215,246,0.07)",
                  filter: "blur(80px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hidden md:flex">
        <span
          className="text-[10px] font-semibold tracking-[0.3em] uppercase"
          style={{
            color: "var(--color-on-surface)",
            fontFamily: "var(--font-body)",
          }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-8"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-secondary), transparent)",
          }}
        />
      </div>
    </section>
  );
}
