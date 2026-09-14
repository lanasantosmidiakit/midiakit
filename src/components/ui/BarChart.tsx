import type { BarDatum } from "@/types/media-kit";

type BarChartProps = {
  items: BarDatum[];
  className?: string;
};

export function BarChart({ items, className = "" }: BarChartProps) {
  if (items.length === 0) {
    return (
      <p className={`italic opacity-40 ${className}`}>Métricas a definir</p>
    );
  }

  return (
    <ul className={`flex flex-col gap-5 ${className}`}>
      {items.map((item) => (
        <li key={item.id}>
          <div className="mb-2 flex items-baseline justify-between gap-4 text-sm">
            <span>{item.label}</span>
            <span className="font-medium">
              {item.suffix ?? `${item.value}%`}
            </span>
          </div>
          <div className="h-1.5 w-full bg-current/15">
            <div
              className="h-full bg-rose-gold"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
