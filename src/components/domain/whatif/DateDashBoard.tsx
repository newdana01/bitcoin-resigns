import { ArrowRight } from "lucide-react";
import CalendarPicker from "./CalendarPicker";
import PriceInput from "./PriceInput";
import { useState } from "react";
import Label from "../../../common/components/Label";

export default function DateDashBoard() {
  const [date, setDate] = useState<Date>();
  return (
    <div className="hidden peer-checked/calculateDate:block">
      <div className="my-2">
        <Label label="Buy Date" />
        <div className="flex">
          <CalendarPicker />
          <span className="mx-2 leading-[2.5rem]">→</span>
          <PriceInput name="buyDate" disabled={true} />
        </div>
      </div>
      <div className="my-2">
        <Label label="Sell Date" />
        <div className="flex">
          <CalendarPicker />
          <span className="mx-2 leading-[2.5rem]">→</span>
          <PriceInput name="sellDate" disabled={true} />
        </div>
      </div>
      <div>
        <PriceInput name="totalInvestment" label="Total Invsetment Amount" />
      </div>
    </div>
  );
}
