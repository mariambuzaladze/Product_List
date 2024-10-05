import { useState } from "react";
import React from "react";
import DropDown from "/drop_down.svg";

export default function RatingFilter({
  setRating,
}: {
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const [active, setActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setRating(null);
      setError(null);
      return;
    }

    const parsedValue = parseFloat(value);

    if (parsedValue >= 0 && parsedValue <= 5) {
      setRating(parsedValue);
      setError(null);
    } else {
      setError("between 0 and 5");
      setRating(null);
    }
  };

  return (
    <div>
      <div className="flex gap-1" onClick={() => setActive(!active)}>
        <p>Rating</p>
        <img
          src={DropDown}
          alt="drop down arrow"
          style={{ transform: active ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {active && (
        <div className="w-max gap-1 flex flex-col absolute bg-white border border-gray-300 mt-1 rounded shadow-lg bg-[#607D99] p-1">
          <input
            type="number"
            step="0.1"
            placeholder="rating"
            className="border border-gray-300 p-1 rounded w-[67px]"
            onChange={handleRatingChange}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      )}
    </div>
  );
}
