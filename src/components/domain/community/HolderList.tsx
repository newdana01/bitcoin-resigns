import { useEffect, useState } from "react";
import SectionName from "../../../common/components/SectionName";
import Rank from "./Rank";

export interface Holder {
  rank: number;
  holderName: string;
  amount: number;
  amountRate: number;
  publishedAt: string;
}

export default function HolderList() {
  const [year, setYear] = useState(2025);
  const [holders, setHolders] = useState<Holder[]>([
    {
      rank: 1,
      holderName: "Satoshi Nakamoto",
      amount: 1100000,
      amountRate: 5.24,
      publishedAt: "2025-08-27T08:30:00+00:00",
    },
    {
      rank: 2,
      holderName: "Coinbase",
      amount: 1000000,
      amountRate: 4.76,
      publishedAt: "2025-08-27T08:30:00+00:00",
    },
    {
      rank: 3,
      holderName: "Binance",
      amount: 617534,
      amountRate: 2.95,
      publishedAt: "2025-08-27T08:30:00+00:00",
    },
    {
      rank: 4,
      holderName: "Grayscale",
      amount: 292268,
      amountRate: 1.39,
      publishedAt: "2025-08-27T08:30:00+00:00",
    },
    {
      rank: 5,
      holderName: "BlackRock iShares",
      amount: 274322,
      amountRate: 1.3,
      publishedAt: "2025-08-27T08:30:00+00:00",
    },
  ]);

  useEffect(() => {
    if (holders.length > 0) {
      const getYear = new Date(holders[0].publishedAt).getFullYear();
      setYear(getYear);
    }
  }, [holders]);
  return (
    <div>
      <SectionName name="Top BTC Holders" />
      <p className="font-normal text-sm text-slate-500 mb-2">
        {year} Top 5 BTC holders revealed. Are you next?
      </p>
      <div className="">
        {holders.map((holder) => (
          <Rank
            key={holder.rank}
            rank={holder.rank}
            holderName={holder.holderName}
            amount={holder.amount}
            amountRate={holder.amountRate}
            publishedAt={holder.publishedAt}
          />
        ))}
      </div>
    </div>
  );
}
