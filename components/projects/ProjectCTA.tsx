import Link from "next/link";

export default function ProjectCTA() {
  return (
    <div className="glass-panel rounded-2xl p-8 md:p-12 text-center">
      <h3
        className="text-on-surface mb-3"
        style={{
          fontFamily: "var(--font-headline)",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 600,
        }}
      >
        Have a project in mind?
      </h3>
      <p
        className="mb-8 max-w-lg mx-auto leading-7"
        style={{ color: "var(--color-on-surface-variant)", fontSize: "16px" }}
      >
        Whether it's a web app, mobile app, or a video production — I'd love to
        hear about it.
      </p>
      <Link href="/contact">
        <button className="btn-gradient w-full sm:w-auto justify-center">
          Start a Conversation
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </Link>
    </div>
  );
}
