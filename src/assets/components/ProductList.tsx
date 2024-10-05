import Data from "../../data.json";
import { useState } from "react";
import Item from "./Item";
import CategoryFilter from "./CategoryFilter";

export default function ProductList() {
  const [data, setData] = useState<IData[]>(Data);

  const [category, setCategory] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <header className="w-full bg-red-600 p-3">
        <h1 className="text-white text-3xl">Product List</h1>
      </header>
      <main>
        <div className="flex gap-2 rounded-[10px] border border-gray-300 w-fit p-1">
          <CategoryFilter setCategory={setCategory} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {data.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
