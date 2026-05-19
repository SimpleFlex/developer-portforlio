import Link from "next/link";

export default function ServicesCTA() {
  return (
    <div className="mt-16 md:mt-[80px] relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(76,215,246,0.04), rgba(131,67,244,0.04))",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px] py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        <div>
          <h2
            className="text-on-surface mb-2"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 600,
            }}
          >
            Got a project in mind?
          </h2>
          <p
            className="text-base"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Web app, mobile app, or creative production — let's build it
            together.
          </p>
        </div>
        <Link href="/contact" className="shrink-0 w-full md:w-auto">
          <button className="btn-gradient w-full md:w-auto justify-center">
            Start a Project
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
