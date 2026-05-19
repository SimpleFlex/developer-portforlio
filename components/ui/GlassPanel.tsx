import { cn } from "@/lib/cn";

export default function GlassPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass-panel rounded-xl", className)}>{children}</div>
  );
}
