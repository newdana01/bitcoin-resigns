import PriceInput from "./PriceInput";

interface PriceDashBoardProps {
  setBuyPrice: (val: number) => void;
  setSellPrice: (val: number) => void;
  setTotalInvestment: (val: number) => void;
  setInvestmentFee: (val: number) => void;
  setExitFee: (val: number) => void;
  buyPrice: number;
  sellPrice: number;
  totalInvestment: number;
  investmentFee: number;
  exitFee: number;
}

export default function PriceDashBoard({
  setBuyPrice,
  setSellPrice,
  setTotalInvestment,
  setInvestmentFee,
  setExitFee,
  buyPrice,
  sellPrice,
  totalInvestment,
  investmentFee,
  exitFee,
}: PriceDashBoardProps) {
  return (
    <div className="hidden peer-checked/calculatePrice:block my-2 md:max-w-[31rem]">
      <fieldset className="group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <PriceInput
            name="buyPrice"
            label="Buy Price"
            onChangeFunc={setBuyPrice}
            propValue={buyPrice}
          />
          <PriceInput
            name="sellPrice"
            label="Sell Price"
            onChangeFunc={setSellPrice}
            propValue={sellPrice}
          />
        </div>
        <div className="mb-2">
          <PriceInput
            name="investment"
            label="Investment Amount"
            onChangeFunc={setTotalInvestment}
            propValue={totalInvestment}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PriceInput
            name="investmentFee"
            label="Invetstment Fee"
            onChangeFunc={setInvestmentFee}
            propValue={investmentFee}
          />
          <PriceInput
            name="exitFee"
            label="Exit Fee"
            onChangeFunc={setExitFee}
            propValue={exitFee}
          />
        </div>
      </fieldset>
    </div>
  );
}
