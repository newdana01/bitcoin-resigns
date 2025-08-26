import CalendarPicker from "./CalendarPicker";
import PriceInput from "./PriceInput";
import { useEffect, useState } from "react";
import Label from "../../../common/components/Label";
import getPrice from "../../../common/functions/getPrice";

export default function DateDashBoard() {
  const [buyDate, setBuyDate] = useState<Date | null>(null);
  const [sellDate, setSellDate] = useState<Date | null>(null);
  const [buyPrice, setBuyPrice] = useState<number | null>(null);
  const [sellPrice, setSellPrice] = useState<number | null>(null);

  const fetchData = async (
    date: Date | null,
    setPrice: (price: number) => void,
  ) => {
    try {
      const { closes } = await getPrice("BTCUSDT", "1d", 1, date?.getTime());
      if (closes.length > 0) {
        setPrice(Number(closes[0].toFixed(2)));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(buyDate, setBuyPrice);
  }, [buyDate]);

  useEffect(() => {
    fetchData(sellDate, setSellPrice);
  }, [sellDate]);

  return (
    <div className="hidden peer-checked/calculateDate:block">
      <div className="my-2">
        <Label label="Buy Date" />
        <div className="flex">
          <CalendarPicker selectedDate={buyDate} onSelectDate={setBuyDate} />
          <span className="mx-2 leading-[2.5rem]">→</span>
          <PriceInput name="buyDate" disabled={true} propValue={buyPrice} />
        </div>
      </div>
      <div className="my-2">
        <Label label="Sell Date" />
        <div className="flex">
          <CalendarPicker selectedDate={sellDate} onSelectDate={setSellDate} />
          <span className="mx-2 leading-[2.5rem]">→</span>
          <PriceInput name="sellDate" disabled={true} propValue={sellPrice} />
        </div>
      </div>
      <div>
        <PriceInput name="totalInvestment" label="Total Invsetment Amount" />
      </div>
    </div>
  );
}
