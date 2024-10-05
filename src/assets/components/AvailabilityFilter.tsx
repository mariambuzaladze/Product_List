import { useState } from "react";
import React from "react";
import DropDown from "/drop_down.svg";

export default function AvailabilityFilter({
  setAvailability,
}: {
  setAvailability: React.Dispatch<React.SetStateAction<boolean | null>>;
}) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <div className="flex gap-1" onClick={() => setActive(!active)}>
        <p>Availability</p>
        <img
          src={DropDown}
          alt="drop down arrow"
          style={{ transform: active ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {active && (
        <div className="w-max gap-1 flex flex-col absolute bg-white border border-gray-300 mt-1 rounded shadow-lg bg-[#607D99]">
          <label className="p-2 cursor-pointer flex items-center">
            <input
              type="checkbox"
              onChange={() => {
                setAvailability(true);
                setActive(false);
              }}
              className="mr-2"
            />
            in stock
          </label>

          <label className="p-2 cursor-pointer flex items-center">
            <input
              type="checkbox"
              onChange={() => {
                setAvailability(false);
                setActive(false);
              }}
              className="mr-2"
            />
            out of stock
          </label>
        </div>
      )}
    </div>
  );
}
