import { useEffect, useState } from "react";
import SectionName from "../../../common/components/SectionName";
import BubbleGauge from "./BubbleGauge";

export default function BubblyScore() {
  const score = 90;

  return (
    <div>
      <SectionName name="How Bubbly?" />
      <BubbleGauge score={score} />
    </div>
  );
}
