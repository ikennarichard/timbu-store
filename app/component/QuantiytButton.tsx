"use client";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { Product } from "@/app/lib/definitions";

export default function QuantityButton({ product }: { product: Product }) {
  const { decreaseCartQuantity, increaseCartQuantity, getItemQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(product.id);

  return (
    <div className="bg-[#AEAEAE] flex items-center justify-center gap-[0.2rem] w-[5rem] md:py-[0.12rem] rounded-md py-2">
      <button
        onClick={() => decreaseCartQuantity(product.id)}
        className="text-lg font-semibold w-4"
      >
        -
      </button>
      <span className="text-reddish w-7 text-center font-semibold text-xl">{quantity}</span>
      <button
        onClick={() => increaseCartQuantity(product.id)}
        className="text-lg font-semibold w-4"
      >
        +
      </button>
    </div>
  );
}
