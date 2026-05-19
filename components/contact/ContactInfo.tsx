import Link from "next/link";

const socials = [
  {
    label: "GitHub",
    icon: "code",
    color: "var(--color-primary)",
    href: "https://github.com",
  },
  {
    label: "LinkedIn",
    icon: "business",
    color: "var(--color-secondary)",
    href: "https://linkedin.com",
  },
  {
    label: "Twitter",
    icon: "tag",
    color: "var(--color-tertiary)",
    href: "https://twitter.com",
  },
  {
    label: "Instagram",
    icon: "photo_camera",
    color: "var(--color-primary)",
    href: "https://instagram.com",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      <div className="mb-2">
        <span
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          CONTACT
        </span>
        <h2
          className="text-on-surface mb-3"
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 600,
            lineHeight: "1.3",
          }}
        >
          Let's create something great together.
        </h2>
        <p
          className="text-base leading-7"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          Open to freelance projects, contract roles, and creative
          collaborations. Whether you need a web app built from scratch or a
          video produced — reach out.
        </p>
      </div>

      {/* Email */}
      <div className="bento-card p-5 rounded-2xl">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: "rgba(76,215,246,0.1)",
              border: "1px solid rgba(76,215,246,0.2)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ color: "var(--color-secondary)", fontSize: "16px" }}
            >
              mail
            </span>
          </div>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            EMAIL
          </span>
        </div>
        <p className="text-on-surface font-medium text-sm">elijah@mke.dev</p>
        <p
          className="text-xs mt-0.5"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          Replies within 24 hours
        </p>
      </div>

      {/* Socials — CSS hover only, no JS handlers */}
      <div className="bento-card p-5 rounded-2xl">
        <span
          className="text-xs font-semibold tracking-widest uppercase block mb-4"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          CONNECT
        </span>
        <div className="grid grid-cols-2 gap-2">
          {socials.map(({ label, icon, color, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-3 rounded-xl transition-all duration-200 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span
                className="material-symbols-outlined text-sm shrink-0"
                style={{ color }}
              >
                {icon}
              </span>
              <span
                className="text-sm transition-colors duration-200 group-hover:text-white"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="bento-card p-5 rounded-2xl flex items-center gap-3">
        <div
          className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
          style={{ background: "var(--color-secondary)" }}
        />
        <div>
          <p className="text-on-surface font-semibold text-sm">
            Available for new projects
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Remote · Nigeria · Worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
