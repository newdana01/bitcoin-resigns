import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

const LIMIT = 100;

export default function PriceChart() {
  const [labels, setLabels] = useState<string[]>();
  const [prices, setPrices] = useState<number[]>();
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [hoursAgoPrice, setHoursAgoPrice] = useState<number>(0);
  const [priceGap, setPriceGap] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api3.binance.com/api/v3/klines?symbol=BTCUSDT&interval=2h&limit=${LIMIT}`,
      );

      const data = await res.json();
      const closes = data.map((candle: any) => parseFloat(candle[4]));
      const times = data.map((candle: any) =>
        new Date(candle[0]).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );

      setPrices(closes);
      setLabels(times);
      if (closes.length > 1) {
        let price1 = closes[closes.length - 1];
        let price2 = closes[closes.length - 2];
        price1 = Number(price1.toFixed(2));
        price2 = Number(price2.toFixed(2));
        const gap = Number((price2 - price1).toFixed(2));

        console.log(`현재가: ${price1}, 2시간 전 가격: ${price2}`);
        console.log(`가격 차이: ${gap}`);

        setCurrentPrice(price1);
        setHoursAgoPrice(price2);
        setPriceGap(gap);
      }
    }

    fetchData();
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: "BTC/USDT",
        data: prices,
        borderColor: "#facc15",
        backgroundColor: (ctx: any) => {
          const chart = ctx.chart;
          const { ctx: canvas } = chart;
          const gradient = canvas.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, "rgba(250, 204, 21, 0.4)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.3, // 곡선 부드럽게
        pointRadius: 0, // 점 숨기기
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // 상단 라벨 숨기기
    },
    scales: {
      x: {
        ticks: { color: "#9ca3af" },
        grid: { display: false },
        time: {
          unit: "minute",
        },
        adapters: {
          date: {
            locale: "en-US",
          },
        },
      },
      y: {
        ticks: { color: "#9ca3af" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold mb-8">Bitcoin Price</h2>
      <div className="font-bold text-lg mb-4">
        <span className="text-xl mr-2 md:text-2xl">
          ${currentPrice.toLocaleString("en-US")}{" "}
          <span className="text-gray-400">USD</span>
        </span>
        <span className={`${priceGap > 0 ? "text-green-500" : "text-red-500"}`}>
          {priceGap > 0 ? "+" : ""}
          {priceGap.toLocaleString("en-US")} ({priceGap > 0 ? "+" : ""}{" "}
          {((priceGap / hoursAgoPrice) * 100).toFixed(2)}%)
        </span>
      </div>
      <div className="w-80 lx:w-[600px] lg:w-[500px] sm:w-[400px]">
        <Line data={chartData} options={options}></Line>
      </div>
    </div>
  );
}
