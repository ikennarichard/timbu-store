import { products } from "@/app/lib/products-data";
import CartItem from "./cart-item";

export default function ShoppingCart() {
  return (
    <div className="w-2/5 bg-white px-4 py-6 rounded-sm">
      <h2 className="font-semibold text-[1rem] text-center">Your Order</h2>
      <div>
        <div className="flex justify-between mb-3 mt-3 font-bold text-gray-500 text-[1.2rem]">
          <h3 className="uppercase">products</h3>
          <h3 className="uppercase">subtotal</h3>
        </div>
        <ul className="list-none">
          {products.slice(2, 4).map((product) => (
            <li key={product.id} className="mb-3">
              <CartItem product={product} />
            </li>
          ))}
        </ul>
        <div className="flex justify-between mb-3">
          <p className="text-xl tracking-wide">SUBTOTAL</p>{" "}
          <p className="font-semibold">$499.0</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl tracking-wide">TOTAL</p>{" "}
          <p className="font-semibold">$499.0</p>
        </div>
      </div>
    </div>
  );
}
