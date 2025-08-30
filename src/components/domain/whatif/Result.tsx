import { useEffect, useState } from "react";

interface ResultProps {
  profitLoss: number | null;
  totalInvestment: number | null;
  profitRate: number | null;
}

const BG_PLUS = "dark:bg-green-950 bg-green-100";
const BG_MINUS = "dark:bg-red-950 bg-red-100";
export default function Result({
  profitLoss,
  totalInvestment,
  profitRate,
}: ResultProps) {
  const [isProfitLossPlus, setIsProfitLossPlus] = useState(true);
  const [isTotalInvestmentPlus, setIsTotalInvestmentPlus] = useState(true);

  useEffect(() => {
    if (profitLoss !== null && profitLoss < 0) {
      setIsProfitLossPlus(false);
    } else setIsProfitLossPlus(true);

    if (totalInvestment !== null && totalInvestment < 0) {
      setIsTotalInvestmentPlus(false);
    } else setIsTotalInvestmentPlus(true);
  }, [profitLoss, totalInvestment]);

  return (
    <div
      className="border border-slate-200 bg-slate-100 rounded-md p-4 max-h-[17rem] h-full flex flex-col justify-between
    dark:border-slate-700 dark:bg-transparent
    "
    >
      <h2 className="text-lg font-bold mb-2 md:text-2xl">
        If you bought at this price, now...
      </h2>
      <div className="">
        <div className="my-2">
          <span className="text-sm text-slate-700">Profit/Loss </span>
          <span
            className={`block w-fit text-lg md:text-2xl rounded-md px-1 
              ${isProfitLossPlus ? BG_PLUS : BG_MINUS} 
              ${isProfitLossPlus ? "text-green-500" : "text-red-500"}`}
          >
            ${profitLoss !== null ? profitLoss.toLocaleString("en-US") : 0} (
            {profitRate}%)
          </span>
        </div>
        <div className="mt-2">
          <span className="text-sm text-slate-700">
            Total investment amount{" "}
          </span>
          <span
            className={`block w-fit text-lg md:text-2xl rounded-md px-1 
              ${isTotalInvestmentPlus ? BG_PLUS : BG_MINUS} 
              ${isTotalInvestmentPlus ? "text-green-500" : "text-red-500"}`}
          >
            $
            {totalInvestment !== null
              ? totalInvestment.toLocaleString("en-US")
              : 0}
          </span>
        </div>
      </div>
      <div
        className={`text-center md:text-2xl mt-5 ${profitLoss !== null ? "opacity-100 animate-growShrink" : "opacity-0"}`}
      >
        {isProfitLossPlus ? "Profit Master! 🥳" : "Every loss is a lession! 😅"}
      </div>
    </div>
  );
}
