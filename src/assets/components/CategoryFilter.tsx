import { useState } from "react";
import React from "react";
import DropDown from "/drop_down.svg";

export default function CategoryFilter({
  setCategory,
}: {
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [active, setActive] = useState<boolean>(false);
  const options = ["Electronics", "Furniture", "Clothing"];

  return (
    <div>
      <div className="flex gap-1" onClick={() => setActive(!active)}>
        <p>Category</p>
        <img
          src={DropDown}
          alt="drop down arrow"
          style={{ transform: active ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {active && (
        <div className="w-max gap-1 grid grid-cols-3 absolute bg-white border border-gray-300 mt-1 rounded shadow-lg">
          {options.map((option) => (
            <label
              key={option}
              className="p-2 cursor-pointer flex items-center"
            >
              <input
                type="checkbox"
                onChange={() => {
                  setCategory(option);
                  setActive(false);
                }}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
