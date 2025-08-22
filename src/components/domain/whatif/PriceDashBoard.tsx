import PriceInput from "./PriceInput";

export default function PriceDashBoard() {
  return (
    <div className="peer-checked/calculatePrice">
      <fieldset className="group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <PriceInput name="buyPrice" label="Buy Price" />
          <PriceInput name="sellPrice" label="Sell Price" />
        </div>
        <div className="mb-3">
          <PriceInput name="investment" label="Investment" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PriceInput name="investmentFee" label="Invetstment Fee" />
          <PriceInput name="exitFee" label="Exit Fee" />
        </div>
      </fieldset>
    </div>
  );
}
