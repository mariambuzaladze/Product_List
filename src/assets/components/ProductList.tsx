import Data from "../../data.json";
import { useState } from "react";
import Item from "./Item";

export default function ProductList() {
  const [data, setData] = useState<IData[]>(Data);

  return (
    <div className="flex flex-col gap-4">
      <header className="w-full bg-red-600 p-3">
        <h1 className="text-white text-3xl">Product List</h1>
      </header>
      <main>
        <div></div>

        <div className="grid grid-cols-2 gap-3">
          {data.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
