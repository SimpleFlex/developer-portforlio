const smallCards = [
  {
    icon: "lock",
    color: "var(--color-primary)",
    label: "AUTH",
    title: "SecureAuth API",
  },
  {
    icon: "storefront",
    color: "var(--color-secondary)",
    label: "E-COMM",
    title: "ShopSphere",
  },
  {
    icon: "photo",
    color: "var(--color-tertiary)",
    label: "CREATIVE",
    title: "LensLog App",
  },
];

export default function BentoGrid() {
  return (
    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-12 md:gap-[32px] mb-[60px] md:mb-[80px]">
      {/* Featured — 8 cols desktop, full mobile */}
      <div
        className="md:col-span-8 glass-panel rounded-2xl overflow-hidden transition-all duration-500 hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(76,215,246,0.1)] relative group cursor-pointer"
        style={{ minHeight: "clamp(300px, 40vw, 480px)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-surface-container-high)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-surface) 0%, rgba(19,19,23,0.3) 60%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <span
            className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-secondary/40 inline-block mb-3 md:mb-4"
            style={{
              color: "var(--color-secondary)",
              background: "rgba(76,215,246,0.08)",
            }}
          >
            FULL STACK · MERN
          </span>
          <h2
            className="text-on-surface mb-2 md:mb-3 group-hover:text-secondary transition-colors"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 600,
            }}
          >
            ShopSphere E-Commerce
          </h2>
          <p
            className="text-sm md:text-base mb-4 md:mb-6 max-w-lg leading-7"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Full-featured e-commerce platform — product listings, cart, Stripe
            payments, order tracking, and admin dashboard.
          </p>
          <div className="flex gap-2 flex-wrap">
            {["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-white/10"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Side card — 4 cols desktop */}
      <div
        className="md:col-span-4 glass-panel rounded-2xl overflow-hidden transition-all duration-500 hover:border-tertiary/40 hover:shadow-[0_0_30px_rgba(131,67,244,0.1)] relative group cursor-pointer"
        style={{ minHeight: "clamp(240px, 30vw, 480px)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-surface-container)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-surface) 0%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-0 left-0 p-5 md:p-6">
          <span
            className="text-[10px] font-semibold tracking-widest uppercase mb-2 block"
            style={{ color: "var(--color-tertiary)" }}
          >
            MOBILE · REACT NATIVE
          </span>
          <h3
            className="text-on-surface mb-2 group-hover:text-tertiary transition-colors"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(18px, 2vw, 22px)",
              fontWeight: 600,
            }}
          >
            LensLog
          </h3>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Mobile app for photographers to log shoots, manage galleries, and
            track editing progress.
          </p>
        </div>
      </div>

      {/* Compact — 5 cols desktop */}
      <div className="md:col-span-5 bento-card p-6 md:p-8 rounded-2xl group cursor-pointer">
        <div className="flex gap-2 mb-5">
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
        </div>
        <span
          className="text-[10px] font-semibold tracking-widest uppercase mb-3 block"
          style={{ color: "var(--color-primary)" }}
        >
          FULL STACK · PERN
        </span>
        <h3
          className="text-on-surface mb-3 group-hover:text-primary transition-colors"
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 600,
          }}
        >
          TaskFlow Pro
        </h3>
        <p
          className="text-sm leading-6 mb-5"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          Project management app with drag-and-drop boards, team roles, and
          real-time Socket.io collaboration. PostgreSQL backed with a clean REST
          API.
        </p>
        <span
          className="text-sm font-semibold tracking-widest"
          style={{ color: "var(--color-secondary)" }}
        >
          View Project →
        </span>
      </div>

      {/* Split — 7 cols desktop */}
      <div
        className="md:col-span-7 glass-panel rounded-2xl overflow-hidden transition-all duration-500 hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(76,215,246,0.1)] grid grid-cols-2 group cursor-pointer"
        style={{ minHeight: "200px" }}
      >
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <span
            className="text-[10px] font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-secondary)" }}
          >
            CREATIVE TECH
          </span>
          <div>
            <h3
              className="text-on-surface mb-2 group-hover:text-secondary transition-colors"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(16px, 2vw, 22px)",
                fontWeight: 600,
              }}
            >
              CinePortal
            </h3>
            <p
              className="text-sm leading-6"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Client video delivery portal — upload, review, and approve edits
              online.
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ background: "var(--color-surface-container-high)" }}
        >
          <span
            className="material-symbols-outlined text-5xl md:text-6xl"
            style={{ color: "rgba(195,198,215,0.15)" }}
          >
            play_circle
          </span>
        </div>
      </div>

      {/* 3 small cards */}
      {smallCards.map(({ icon, color, label, title }) => (
        <div
          key={title}
          className="md:col-span-4 bento-card p-6 md:p-8 rounded-2xl group cursor-pointer"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
            style={{ background: `${color}12`, border: `1px solid ${color}20` }}
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ color }}
            >
              {icon}
            </span>
          </div>
          <span
            className="text-[10px] font-semibold tracking-widest uppercase mb-2 block"
            style={{ color }}
          >
            {label}
          </span>
          <h3
            className="text-on-surface group-hover:text-secondary transition-colors"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {title}
          </h3>
        </div>
      ))}
    </div>
  );
}
