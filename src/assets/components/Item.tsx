export default function Item({ product }: { product: IData }) {
  return (
    <div className="flex flex-col justify-between border rounded-[14px] hover:shadow-[5px_5px_12px_0px_rgba(2,21,38,0.08)] transition-[0.4s] cursor-pointer">
      <h2>{product.title}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <img src={product.image} alt={product.title} className="rounded-[14px]" />
    </div>
  );
}
