export default function Item({ product }: { product: IData }) {
  return (
    <div className="bg-white flex flex-col justify-between border rounded-[14px] hover:shadow-[5px_5px_12px_0px_rgba(2,21,38,0.08)] transition-[0.4s] cursor-pointer">
      <h2 className="font-bold text-lg">{product.title}</h2>

      <div className="flex gap-2">
        <p>${product.price.toFixed(2)}</p>
        <p>★{product.rating}</p>
      </div>

      <p className="truncate italic">{product.description}</p>
      <img src={product.image} alt={product.title} className="rounded-[14px]" />
    </div>
  );
}
