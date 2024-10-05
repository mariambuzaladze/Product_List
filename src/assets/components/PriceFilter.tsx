import { useState } from "react";
import React from "react";
import DropDown from "/drop_down.svg";

export default function PriceFilter({
  setPrice,
}: {
  setPrice: React.Dispatch<
    React.SetStateAction<{ min: number; max: number } | null>
  >;
}) {
  const [active, setActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [minValue, setMinValue] = useState<number | "">("");
  const [maxValue, setMaxValue] = useState<number | "">("");

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const min = value !== "" ? parseFloat(value) : "";

    setMinValue(min);

    if (maxValue !== "" && min !== "" && min > maxValue) {
      setError("min can't be higher than max");
      return;
    } else {
      setError(null);
    }

    setPrice(
      min !== "" ? { min, max: maxValue !== "" ? maxValue : Infinity } : null
    );
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const max = value !== "" ? parseFloat(value) : "";

    setMaxValue(max);

    if (minValue !== "" && max !== "" && max < minValue) {
      setError("max can't be lower than min");
      return;
    } else {
      setError(null);
    }

    setPrice(max !== "" ? { min: minValue !== "" ? minValue : 0, max } : null);
  };

  return (
    <div>
      <div className="flex gap-1" onClick={() => setActive(!active)}>
        <p>Price</p>
        <img
          src={DropDown}
          alt="drop down arrow"
          style={{ transform: active ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {active && (
        <div className="w-max gap-1 absolute bg-white border border-gray-300 mt-1 rounded shadow-lg bg-[#607D99] p-1 flex flex-col">
          <div className="flex justify-between gap-12">
            <input
              type="number"
              placeholder="from"
              value={minValue}
              onChange={handleMinChange}
              className="border border-gray-300 p-1 rounded w-[67px]"
            />

            <input
              type="number"
              placeholder="to"
              value={maxValue}
              onChange={handleMaxChange}
              className="border border-gray-300 p-1 rounded w-[70px]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      )}
    </div>
  );
}
