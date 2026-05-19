"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const set =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="glass-panel p-8 md:p-12 rounded-2xl">
      <h2
        className="text-on-surface mb-8"
        style={{
          fontFamily: "var(--font-headline)",
          fontSize: "32px",
          fontWeight: 600,
        }}
      >
        Send a Message
      </h2>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { id: "name", type: "text", label: "FULL NAME", val: fields.name },
            {
              id: "email",
              type: "email",
              label: "EMAIL ADDRESS",
              val: fields.email,
            },
          ].map(({ id, type, label, val }) => (
            <div key={id} className="relative">
              <input
                id={id}
                type={type}
                value={val}
                onChange={set(id)}
                placeholder=" "
                className="input-line peer"
              />
              <label
                htmlFor={id}
                className="absolute left-0 pointer-events-none transition-all duration-200 font-semibold tracking-widest"
                style={{
                  top: val ? "-8px" : "16px",
                  fontSize: val ? "10px" : "16px",
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {label}
              </label>
              <div className="input-focus-line" />
            </div>
          ))}
        </div>

        {/* Project type */}
        <div className="relative">
          <select
            value={fields.type}
            onChange={set("type")}
            className="w-full bg-transparent py-4 px-0 text-base outline-none cursor-pointer appearance-none"
            style={{
              borderBottom: "1px solid var(--color-outline-variant)",
              color: fields.type
                ? "var(--color-on-surface)"
                : "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            <option
              value=""
              style={{ background: "var(--color-surface-container)" }}
            >
              SELECT PROJECT TYPE
            </option>
            <option
              value="architecture"
              style={{ background: "var(--color-surface-container)" }}
            >
              System Architecture
            </option>
            <option
              value="development"
              style={{ background: "var(--color-surface-container)" }}
            >
              Full-Stack Development
            </option>
            <option
              value="consulting"
              style={{ background: "var(--color-surface-container)" }}
            >
              Technical Consulting
            </option>
            <option
              value="other"
              style={{ background: "var(--color-surface-container)" }}
            >
              Other Inquiry
            </option>
          </select>
          <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
            expand_more
          </span>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            value={fields.message}
            onChange={set("message")}
            placeholder=" "
            rows={4}
            className="input-line peer resize-none"
          />
          <label
            htmlFor="message"
            className="absolute left-0 pointer-events-none transition-all duration-200 font-semibold tracking-widest"
            style={{
              top: fields.message ? "-8px" : "16px",
              fontSize: fields.message ? "10px" : "16px",
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            MESSAGE
          </label>
          <div className="input-focus-line" />
        </div>

        <div className="pt-4">
          <button type="submit" className="btn-gradient group">
            SEND MESSAGE
            <span
              className="material-symbols-outlined"
              style={{ transition: "transform 0.2s" }}
            >
              send
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
