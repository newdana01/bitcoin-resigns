import BubbleChart from "./BubbleChart";
import PriceChart from "./PriceChart";

export default function ChartSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PriceChart />
      <BubbleChart />
    </div>
  );
}
