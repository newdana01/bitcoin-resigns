import type { Holder } from "./HolderList";

export default function Rank({
  rank,
  holderName,
  amount,
  amountRate,
  publishedAt,
}: Holder) {
  return (
    <div className="my-5">
      <div className="flex gap-2 mb-1 pb-">
        <div className={rank <= 3 ? "text-primary-orange" : "text-slate-500"}>
          {rank}
        </div>
        <div>
          {holderName} {rank <= 3 ? "👑" : ""}
        </div>
      </div>
      <div className="font-normal text-slate-500 text-sm ms-4">
        {amount.toLocaleString("en-US")} BTC ({amountRate}% of Total)
      </div>
    </div>
  );
}
