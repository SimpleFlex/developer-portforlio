import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact ",
  description:
    "Get in touch for web development, mobile apps, or creative production projects.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-20 md:pt-28 pb-16 md:pb-[120px] px-6 md:px-16 lg:px-[64px] max-w-[1280px] mx-auto overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(76,215,246,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] -z-10 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(131,67,244,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mb-10 md:mb-[80px]">
        <span
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          GET IN TOUCH
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 7vw, 72px)",
            fontWeight: 700,
            lineHeight: "1.05",
            letterSpacing: "-0.04em",
            color: "var(--color-on-surface)",
          }}
        >
          Let's Build the{" "}
          <em
            className="not-italic"
            style={{ color: "var(--color-secondary)" }}
          >
            Future.
          </em>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[32px] items-start">
        <div className="lg:col-span-5">
          <ContactInfo />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
