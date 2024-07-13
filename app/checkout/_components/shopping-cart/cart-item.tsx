"use client";
import { formatCurrency } from "@/app/lib/utils";
import Image from "next/image";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { Product } from "@/app/lib/definitions";
import QuantityButton from "@/app/component/QuantiytButton";

type CartItemProps = {
  id: string;
  quantity: number;
  products: Product[];
};

export default function CartItem({ id, quantity, products }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const product = products?.find((i: Product) => i.id === id);
  const price = product?.current_price[0].USD[0];

  return (
    <>
      <div
        className="flex justify-between items-center shadow-sm hover:shadow-md transition-transform duration-300 ease-in-out rounded-md p-2 relative"
        key={product?.id}
      >
        <div className="flex items-center gap-4">
          <div className="bg-light_silver rounded-md p-6">
            <Image
              src={`http://api.timbu.cloud/images/${product?.photos[0].url}`}
              alt="product image"
              width={60}
              height={60}
            />
          </div>
          <h3 className="capitalize">
            {product?.name}
          </h3>
        </div>
        <div className="md:hidden">
          <QuantityButton product={product!}/>
        </div>
        <div className="justify-self-end font-semibold">
          <span>{formatCurrency(price * quantity)}</span>
        </div>
        <button
          className="absolute bg-reddish text-white rounded-md py-1 px-[6px] right-1 hover:opacity-90 bottom-1"
          onClick={() => removeFromCart(product!.id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}
