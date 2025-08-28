import CalendarPicker from "./CalendarPicker";
import PriceInput from "./PriceInput";
import Label from "../../../common/components/Label";

interface DateDashBoardProps {
  buyPrice: number;
  sellPrice: number;
  setTotalInvestment: (val: number) => void;
  totalInvestment: number;
  buyDate: Date | null;
  sellDate: Date | null;
  setBuyDate: (val: Date) => void;
  setSellDate: (val: Date) => void;
}

export default function DateDashBoard({
  buyPrice,
  sellPrice,
  setTotalInvestment,
  totalInvestment,
  buyDate,
  sellDate,
  setBuyDate,
  setSellDate,
}: DateDashBoardProps) {
  return (
    <div className="hidden peer-checked/calculateDate:block md:max-w-[31rem]">
      <div className="my-2">
        <Label label="Buy Date" />
        <div className="flex flex-1">
          <CalendarPicker selectedDate={buyDate} onSelectDate={setBuyDate} />
          <span className="mx-2 leading-[2.5rem]">→</span>
          <div className="flex-1">
            <PriceInput name="buyDate" disabled={true} propValue={buyPrice} />
          </div>
        </div>
      </div>
      <div className="my-2">
        <Label label="Sell Date" />
        <div className="flex">
          <CalendarPicker selectedDate={sellDate} onSelectDate={setSellDate} />
          <span className="mx-2 leading-[2.5rem]">→</span>
          <div className="flex-1">
            <PriceInput name="sellDate" disabled={true} propValue={sellPrice} />
          </div>
        </div>
      </div>
      <div>
        <PriceInput
          name="totalInvestment"
          label="Invsetment Amount"
          onChangeFunc={setTotalInvestment}
          propValue={totalInvestment}
        />
      </div>
    </div>
  );
}
