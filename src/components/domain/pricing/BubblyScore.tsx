import { useEffect, useState } from "react";
import SectionName from "../../../common/components/SectionName";
import BubbleGauge from "./BubbleGauge";

export default function BubblyScore() {
  const [score, setScore] = useState<number>(0);

  const fetchBubbleScore = async () => {
    try {
      const res = await fetch("/api/bubble");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setScore(Number(data.score));
    } catch (error) {
      console.error("Failed to fetch bubble score:", error);
    }
  };

  useEffect(() => {
    fetchBubbleScore();
  }, []);

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
