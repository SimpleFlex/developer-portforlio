"use client";
import { useState } from "react";

const categories = [
  "All",
  "Full Stack",
  "React",
  "React Native",
  "Backend",
  "Database",
  "Creative",
  "Career",
];

export default function CategoryFilter() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 flex-wrap py-6 md:py-8 border-y border-white/5 mb-12 md:mb-[80px]">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className="px-4 md:px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95"
          style={
            active === cat
              ? {
                  background: "var(--color-secondary)",
                  color: "var(--color-on-secondary-fixed)",
                  fontFamily: "var(--font-body)",
                }
              : {
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--color-on-surface-variant)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "var(--font-body)",
                }
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
