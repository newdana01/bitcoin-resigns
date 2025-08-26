import { useState } from "react";
import SectionName from "../../../common/components/SectionName";
import PriceDashBoard from "./PriceDashBoard";
import Result from "./Result";
import DateDashBoard from "./DateDashBoard";
import InfoTooltip from "../../../common/components/InfoTooltip";

type CalculateOption = "date" | "price";
export default function WhatIf() {
  const [option, setOption] = useState<CalculateOption>("date");
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [investmentFee, setInvestmentFee] = useState(0);
  const [exitFee, setExitFee] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [profitLoss, setProfitLoss] = useState<number | null>(0);
  const [resultTotalAmount, setResultTotalAmount] = useState<number | null>(0);
  const [profitRate, setProfitRate] = useState(0);

  const getSimulResult = (
    buyPrice: number,
    sellPrice: number,
    totalInvestment: number,
    investmentFee: number,
    exitFee: number,
  ) => {
    const effectiveAmount = totalInvestment * (1 - investmentFee);
    const amount = effectiveAmount / buyPrice;
    const finalAmount = amount * sellPrice * (1 - exitFee);
    const profitLoss = finalAmount - totalInvestment;

    return {
      finalAmount,
      profitLoss,
      profitRate: (profitLoss / totalInvestment) * 100,
    };
  };

  const handleClickReset = () => {
    setBuyPrice(0);
    setSellPrice(0);
    setInvestmentFee(0);
    setExitFee(0);
    setTotalInvestment(0);
    setProfitLoss(null);
    setResultTotalAmount(null);
    setProfitRate(null);
  };

  const handleClickCalculate = () => {
    if (!buyPrice && !sellPrice && !totalInvestment) return;
    const { finalAmount, profitLoss, profitRate } = getSimulResult(
      buyPrice,
      sellPrice,
      totalInvestment,
      investmentFee,
      exitFee,
    );

    setResultTotalAmount(finalAmount);
    setProfitLoss(profitLoss);
    setProfitRate(profitRate);
  };

  return (
    <div>
      <SectionName name="What If?" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="">
          <input
            id="calculateDate"
            className="peer/calculateDate accent-primary-yellow"
            type="radio"
            name="calculateOption"
            value="date"
            onChange={() => setOption("date")}
            checked={option === "date"}
          />
          <label htmlFor="calculateDate" className="mx-1">
            By Date
          </label>
          <InfoTooltip
            content={`Select a date to calculate your profit at the price at that time.\n
Transaction fees do not apply and calculations are based on the closing price. Use the calculation results for reference only. \n
You can select any date from August 17, 2017 to before today.`}
          />
          <div className="mx-3 inline-block"></div>
          <input
            id="calculatePrice"
            className="peer/calculatePrice accent-primary-yellow"
            type="radio"
            name="calculateOption"
            value="price"
            onChange={() => setOption("price")}
          />
          <label htmlFor="calculatePrice" className="mx-1">
            By Price
          </label>
          <DateDashBoard />
          <PriceDashBoard />
          <div className="mt-3 flex gap-4">
            <button
              className="bg-primary-orange text-black flex-1 md:flex-none"
              onClick={handleClickReset}
            >
              Reset
            </button>
            <button
              className="bg-primary-orange text-black flex-1 md:flex-none"
              onClick={handleClickCalculate}
            >
              Calculate
            </button>
          </div>
        </div>
        <Result
          profitLoss={profitLoss}
          totalInvestment={resultTotalAmount}
          profitRate={profitRate}
        />
      </div>
    </div>
  );
}
