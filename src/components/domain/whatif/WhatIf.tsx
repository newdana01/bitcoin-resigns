import { useState } from "react";
import SectionName from "../../../common/components/SectionName";
import PriceDashBoard from "./PriceDashBoard";
import Result from "./Result";
import DateDashBoard from "./DateDashBoard";
import InfoTooltip from "../../../common/components/InfoTooltip";

type CalculateOption = "date" | "price";
export default function WhatIf() {
  const [option, setOption] = useState<CalculateOption>("date");
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
        </div>
        <Result profitLoss={-1301130} totalInvestment={1130000} />
      </div>
    </div>
  );
}
