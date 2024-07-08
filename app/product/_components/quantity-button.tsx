"use client";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { Product } from "@/app/lib/products-data";

type QuantityButtonProp = {
  productType: Product | string;
};

export default function QuantityButton({ productType }: QuantityButtonProp) {
  const { decreaseCartQuantity, increaseCartQuantity, getItemQuantity } =
    useShoppingCart();

  const product = productType as Product;
  const quantity = getItemQuantity(product.id);

  return (
    <div className="bg-[#AEAEAE] flex items-center justify-around rounded-md w-[6rem] px-1 py-1">
      <button
        onClick={() => decreaseCartQuantity(product.id)}
        className="text-2xl"
      >
        -
      </button>
      <span className="text-reddish font-bold text-xl">{quantity}</span>
      <button
        onClick={() => increaseCartQuantity(product.id)}
        className="text-2xl"
      >
        +
      </button>
    </div>
  );
}
