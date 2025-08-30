import BubblyScore from "./BubblyScore";
import PriceChart from "./PriceChart";

export default function ChartSection() {
  return (
    <div className="grid-container">
      <PriceChart />
      <BubblyScore />
    </div>
  );
}
