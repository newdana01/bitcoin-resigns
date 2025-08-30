import { Info } from "lucide-react";
import { Tooltip } from "react-tooltip";

interface InfoTooltipProps {
  content: string;
}

export default function InfoTooltip({ content }: InfoTooltipProps) {
  return (
    <div className="inline-block relative h-4">
      <Info
        size={12}
        data-tooltip-id="info-tooltip"
        data-tooltip-content={content}
        className="hover:text-primary-orange text-slate-400 focus:outline-none"
      />
      <Tooltip
        id="info-tooltip"
        className="whitespace-pre-line max-w-xs !opacity-100 z-50 font-normal"
        style={{
          backgroundColor: "rgb(31, 41, 55)",
          color: "#fff",
          opacity: 1,
        }}
      ></Tooltip>
    </div>
  );
}
