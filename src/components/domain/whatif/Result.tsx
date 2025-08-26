interface ResultProps {
  profitLoss: number | null;
  totalInvestment: number | null;
  profitRate: number | null;
}

export default function Result({
  profitLoss,
  totalInvestment,
  profitRate,
}: ResultProps) {
  return (
    <div className="border border-slate-700 rounded-md p-4 max-h-[17rem] h-full flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-2 md:text-2xl">
        If you bought at this price, now...
      </h2>
      <div className="">
        <div className="my-2">
          <span className="text-sm text-slate-700">Profit/Loss </span>
          <span
            className={`block w-fit text-lg md:text-2xl rounded-md px-1 ${profitLoss && profitLoss < 0 ? "bg-red-950" : "bg-green-950"} ${profitLoss && profitLoss < 0 ? "text-red-500" : "text-green-500"}`}
          >
            ${profitLoss ? profitLoss.toLocaleString("en-US") : 0}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-sm text-slate-700">
            Total investment amount{" "}
          </span>
          <span
            className={`block w-fit text-lg md:text-2xl rounded-md px-1 bg-green-950 ${totalInvestment && totalInvestment < 0 ? "text-red-500" : "text-green-500"}`}
          >
            ${totalInvestment ? totalInvestment.toLocaleString("en-US") : 0}
          </span>
        </div>
      </div>
      {profitLoss && (
        <div className="text-center md:text-2xl mt-5">
          {profitLoss > 0 ? "Profit Master! 🥳" : "Every loss is a lession! 😅"}
        </div>
      )}
    </div>
  );
}
