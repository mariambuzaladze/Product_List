import Data from "../../data.json";
import { useState } from "react";
import Item from "./Item";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import RatingFilter from "./RatingFilter";

export default function ProductList() {
  const [data, setData] = useState<IData[]>(Data);

  const [category, setCategory] = useState<string | null>(null);
  const [price, setPrice] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const [availability, setAvailability] = useState<boolean | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  console.log("cc", category);
  console.log("pp", price);
  console.log("aa", availability);
  console.log("rr", rating);
  console.log(setData);

  return (
    <div className="flex flex-col gap-4 bg-[#2C3E50]">
      <header className="w-full bg-[#4A5568] p-3">
        <h1 className="text-white text-3xl">Product List</h1>
      </header>
      <main className="flex flex-col items-center">
        <div className="flex gap-2 rounded-[10px] border border-gray-300 w-fit p-1 bg-white">
          <CategoryFilter setCategory={setCategory} />
          <PriceFilter setPrice={setPrice} />
          <AvailabilityFilter setAvailability={setAvailability} />
          <RatingFilter setRating={setRating} />
        </div>

        <div className="grid grid-cols-2 gap-3 p-1">
          {data.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
