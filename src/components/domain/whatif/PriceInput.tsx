import React, { useRef, useState } from "react";
import Label from "../../../common/components/Label";

interface PriceInputProps {
  name: string;
  label?: string;
  disabled?: boolean;
  displayType?: "inline-block" | "block";
  propValue?: number | null;
}

export default function PriceInput({
  name,
  label,
  disabled,
  displayType,
  propValue,
}: PriceInputProps) {
  const [value, setValue] = useState("");
  const borderRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (borderRef.current) {
      borderRef.current.classList.toggle("border-slate-700", false);
      borderRef.current.classList.toggle("border-primary-orange", true);
    }
  };

  const handelBlur = () => {
    if (borderRef.current) {
      borderRef.current.classList.toggle("border-primary-orange", false);
      borderRef.current.classList.toggle("border-slate-700", true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    input = input.replace(/[^0-9.]/g, "");
    if (input.startsWith(".")) {
      input = "";
    }

    const parts = input.split(".");
    if (parts.length > 2) {
      input = parts[0] + "." + parts[1];
    }
    setValue(input);
  };
  return (
    <div>
      {label && <Label label={label} />}
      <div
        className="flex border border-slate-700 focus:ring-primary-orange rounded-md"
        ref={borderRef}
      >
        <span className="mx-3 text-base/[45px] text-primary-orange text-align-center">
          $
        </span>
        <input
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handelBlur}
          inputMode="numeric"
          pattern="[0-9]*"
          name={name}
          value={propValue ? propValue : value}
          disabled={disabled}
          className="w-full px-3 bg-transparent text-sm shadow-sm placeholder-slate-400
      focus:outline-none"
        />
      </div>
    </div>
  );
}
