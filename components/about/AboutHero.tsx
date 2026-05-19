export default function AboutHero() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[32px] items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
            style={{
              color: "var(--color-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            THE STORY
          </span>
          <h1
            className="mb-6 text-on-surface"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 7vw, 64px)",
              fontWeight: 700,
              lineHeight: "1.05",
              letterSpacing: "-0.04em",
            }}
          >
            Developer.
            <br />
            Filmmaker.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--color-secondary), var(--color-primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Vision.
            </span>
          </h1>

          <p
            className="leading-[1.8] mb-4 max-w-xl"
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "var(--color-on-surface-variant)",
            }}
          >
            I'm{" "}
            <strong
              className="font-semibold"
              style={{ color: "var(--color-on-surface)" }}
            >
              Okonkwo Makuochukwu Elijah
            </strong>{" "}
            — a Full Stack Web Developer and Visual Creative based in Nigeria
            with 4 years of hands-on experience shipping real products.
          </p>
          <p
            className="text-base leading-7 mb-10 max-w-xl"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            By day I architect scalable web and mobile applications using the
            MERN and PERN stacks. By night I'm behind a camera — shooting,
            grading, and editing content that tells stories worth remembering.
            The two disciplines feed each other: my code is visual, my visuals
            are structured.
          </p>

          {/* Stats bar */}
          <div className="flex gap-8 md:gap-12 flex-wrap">
            {[
              {
                val: "4+",
                label: "Years Experience",
                color: "var(--color-secondary)",
              },
              {
                val: "20+",
                label: "Projects Shipped",
                color: "var(--color-primary)",
              },
              {
                val: "10+",
                label: "Happy Clients",
                color: "var(--color-tertiary)",
              },
            ].map(({ val, label, color }) => (
              <div
                key={label}
                className="pl-4 border-l-2"
                style={{ borderColor: color }}
              >
                <p
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color,
                    fontSize: "clamp(28px, 4vw, 40px)",
                  }}
                >
                  {val}
                </p>
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative max-w-sm mx-auto lg:max-w-none">
            {/* Glow orbs */}
            <div
              className="absolute -top-6 -right-6 w-48 h-48 rounded-full -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(76,215,246,0.15) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(131,67,244,0.15) 0%, transparent 70%)",
              }}
            />
            {/* Portrait — replace with <Image src="/images/portrait.jpg" alt="Elijah" fill className="object-cover" /> */}
            <div
              className="glass-panel rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{ aspectRatio: "4/5" }}
            >
              <span
                className="material-symbols-outlined text-7xl"
                style={{ color: "rgba(195,198,215,0.15)" }}
              >
                person
              </span>
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(195,198,215,0.3)" }}
              >
                Add portrait.jpg to /public/images/
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
