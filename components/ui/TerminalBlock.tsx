export default function TerminalBlock({
  filename,
  children,
}: {
  filename?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="terminal-glass shadow-2xl">
      <div className="terminal-header">
        <div className="w-3 h-3 rounded-full bg-error" />
        <div className="w-3 h-3 rounded-full bg-secondary" />
        <div className="w-3 h-3 rounded-full bg-tertiary" />
        {filename && (
          <span
            className="ml-4 text-[14px] text-on-surface-variant/50"
            style={{ fontFamily: "var(--font-code)" }}
          >
            {filename}
          </span>
        )}
      </div>
      <div
        className="p-8 text-[14px] leading-6 overflow-x-auto text-secondary"
        style={{ fontFamily: "var(--font-code)" }}
      >
        {children}
      </div>
    </div>
  );
}
