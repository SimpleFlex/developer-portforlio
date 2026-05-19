"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "Stack", href: "/stack" },
  { label: "Lens", href: "/blog" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 border-b transition-all duration-300"
        style={{
          background: scrolled ? "rgba(19,19,23,0.92)" : "rgba(19,19,23,0.6)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.07)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="flex justify-between items-center px-6 md:px-16 lg:px-[64px] py-4 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity duration-200"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-surface)",
            }}
          >
            MKE<span style={{ color: "var(--color-secondary)" }}>.</span>dev
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map(({ label, href }) => {
              const isActive =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={isActive ? "nav-link-active" : "nav-link"}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex px-5 py-2 rounded-full text-xs font-semibold tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              style={{
                background: "var(--color-primary-container)",
                color: "var(--color-on-primary-container)",
                fontFamily: "var(--font-body)",
              }}
            >
              Hire Me
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg transition-colors duration-200"
              style={{
                background: menuOpen ? "rgba(76,215,246,0.1)" : "transparent",
              }}
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  background: "var(--color-on-surface)",
                  transform: menuOpen
                    ? "translateY(6.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block w-5 h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  background: "var(--color-on-surface)",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block w-5 h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  background: "var(--color-on-surface)",
                  transform: menuOpen
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center transition-all duration-400"
        style={{
          background: "rgba(13,13,18,0.98)",
          backdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        <div className="flex flex-col items-center gap-6 px-8 w-full max-w-sm">
          {navLinks.map(({ label, href }, i) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="w-full text-center py-4 text-[28px] font-bold tracking-tight rounded-2xl transition-all duration-200"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: isActive
                    ? "var(--color-secondary)"
                    : "var(--color-on-surface)",
                  background: isActive
                    ? "rgba(76,215,246,0.06)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(76,215,246,0.15)"
                    : "1px solid transparent",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.3s ease ${i * 50 + 100}ms, transform 0.3s ease ${i * 50 + 100}ms, color 0.2s, background 0.2s`,
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="w-full text-center mt-2 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              background: "var(--color-primary-container)",
              color: "var(--color-on-primary-container)",
              fontFamily: "var(--font-body)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.3s ease 300ms, transform 0.3s ease 300ms",
            }}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
}
