"use client";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { Product } from "@/app/lib/definitions";

export default function QuantityButton({ product }: { product: Product }) {
  const { decreaseCartQuantity, increaseCartQuantity, getItemQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(product.id);

  return (
    <div className="bg-[#AEAEAE] flex items-center justify-between gap-4 rounded-3xl w-[5.9rem] px-3 py-1">
      <button
        onClick={() => decreaseCartQuantity(product.id)}
        className="text-lg font-semibold"
      >
        -
      </button>
      <span className="text-reddish font-bold text-xl">{quantity}</span>
      <button
        onClick={() => increaseCartQuantity(product.id)}
        className="text-lg font-semibold"
      >
        +
      </button>
    </div>
  );
}
