import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Services",
  description:
    "Full stack development, React Native apps, REST APIs, video production, and photo editing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 md:pt-28 pb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px] mb-12 md:mb-[80px]">
        <span
          className="text-xs font-semibold tracking-[0.3em] mb-4 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          WHAT I OFFER
        </span>
        <h1
          className="mb-4 max-w-3xl"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 7vw, 72px)",
            fontWeight: 700,
            lineHeight: "1.05",
            letterSpacing: "-0.04em",
            color: "var(--color-on-surface)",
          }}
        >
          Code. Film.{" "}
          <em
            className="not-italic"
            style={{ color: "var(--color-secondary)" }}
          >
            Delivered.
          </em>
        </h1>
        <p
          className="leading-[1.8] max-w-xl"
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--color-on-surface-variant)",
          }}
        >
          Full stack engineering and visual production services — from backend
          to browser, from lens to timeline.
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-[64px]">
        <ServicesGrid />
      </div>
      <ServicesCTA />
    </div>
  );
}
