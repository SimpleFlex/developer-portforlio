import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Email", href: "mailto:elijah@mke.dev" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 w-full"
      style={{ background: "var(--color-surface-container-lowest)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px] py-16 md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[32px]">
          {/* Left */}
          <div className="space-y-5">
            <div
              className="text-xl font-bold tracking-tighter"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
              }}
            >
              MKE<span style={{ color: "var(--color-secondary)" }}>.</span>dev
            </div>
            <p
              className="text-base leading-7 max-w-sm"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Okonkwo Makuochukwu Elijah — Full Stack Developer & Visual
              Storyteller. Building digital experiences that are as functional
              as they are beautiful.
            </p>
            <div className="flex flex-wrap gap-5">
              {socials.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm transition-all duration-200 hover:-translate-y-1 hover:text-secondary inline-block"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end justify-between gap-6">
            <div className="md:text-right">
              <h4
                className="text-2xl md:text-[28px] font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-on-surface)",
                }}
              >
                Open to opportunities.
              </h4>
              <p
                className="text-sm"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                Available Now · Remote / Nigeria
              </p>
              <div className="flex items-center gap-2 md:justify-end mt-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--color-secondary)" }}
                />
                <span
                  className="text-xs font-semibold tracking-widest"
                  style={{
                    color: "var(--color-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  AVAILABLE
                </span>
              </div>
            </div>
            <div
              className="text-[10px] font-semibold tracking-widest"
              style={{
                color: "rgba(195,198,215,0.25)",
                fontFamily: "var(--font-body)",
              }}
            >
              © 2024 OKONKWO MAKUOCHUKWU ELIJAH. CRAFTED WITH PRECISION.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
