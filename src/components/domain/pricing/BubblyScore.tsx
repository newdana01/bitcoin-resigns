import { useEffect, useState } from "react";
import SectionName from "../../../common/components/SectionName";
import BubbleGauge from "./BubbleGauge";
import InfoTooltip from "../../../common/components/InfoTooltip";

export default function BubblyScore() {
  const score = 90;

  return (
    <div className="h-full">
      <SectionName name="How Bubbly?" />
      <p className="font-normal text-sm text-slate-500 mb-2">
        An AI-driven index that gauges market bubble sentiment. Low scores
        reflect muted interest, while high scores signal heightened speculation.
      </p>
      <BubbleGauge score={score} />
    </div>
  );
}
