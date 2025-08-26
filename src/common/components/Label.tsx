interface LabelProps {
  label: string;
  displayType?: "inline-block" | "block";
  marginType?: string;
}

export default function Label({
  label,
  displayType = "block",
  marginType = "mb-2",
}: LabelProps) {
  return (
    <span
      className={`${marginType} ${displayType} text-sm font-medium text-slate-500`}
    >
      {label}
    </span>
  );
}
