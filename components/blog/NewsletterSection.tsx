export default function NewsletterSection() {
  return (
    <div className="relative glass-panel rounded-2xl p-8 md:p-12 overflow-hidden text-center">
      {/* Ambient orbs */}
      <div
        className="absolute top-0 left-0 w-56 h-56 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(76,215,246,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-56 h-56 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(131,67,244,0.07) 0%, transparent 70%)",
        }}
      />

      <span
        className="text-xs font-semibold tracking-[0.3em] uppercase block mb-4"
        style={{
          color: "var(--color-secondary)",
          fontFamily: "var(--font-body)",
        }}
      >
        NEWSLETTER
      </span>
      <h2
        className="text-on-surface mb-4"
        style={{
          fontFamily: "var(--font-headline)",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 600,
        }}
      >
        Dev tips & creative insights, weekly.
      </h2>
      <p
        className="text-base mb-8 max-w-lg mx-auto leading-7"
        style={{ color: "var(--color-on-surface-variant)" }}
      >
        Real talk on building full stack apps, shooting great video, and growing
        as a developer-creator. No fluff.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 bg-transparent py-4 px-5 rounded-full text-on-surface outline-none text-sm"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            fontFamily: "var(--font-body)",
          }}
        />
        <button className="btn-gradient shrink-0 justify-center">
          Subscribe
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <p className="text-xs mt-4" style={{ color: "rgba(195,198,215,0.35)" }}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
