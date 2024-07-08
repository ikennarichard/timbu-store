"use client";
import { products } from "@/app/lib/products-data";
import CartItem from "./cart-item";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { totalPayment } from "@/app/lib/formatCurrency";

export default function ShoppingCart() {
  const { cartItems } = useShoppingCart();
  return (
    <div className="w-[40%]">
      <h2 className="font-semibold text-[1rem] text-center mb-6">Your Order</h2>
      <div className="flex flex-col justify-between rounded-md border-2 px-3 pt-3 border-[#0000005d]">
        <div className="h-full w-full">
          <div className="border-2 border-[#0000005d] rounded-sm flex justify-between p-3 mb-3 mt-3 font-bold text-gray-500 text-[1.2rem]">
            <h3 className="uppercase">products</h3>
            <h3 className="uppercase">subtotal</h3>
          </div>
          <ul className="list-none">
            {cartItems.map((product) => (
              <li key={product.id} className="mb-3">
                <CartItem {...product} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between mb-3 px-3 border-2 border-[#0000005d] rounded-md py-2">
            <p className="text-xl tracking-wide">SUBTOTAL</p>{" "}
            <p className="font-semibold">
              {totalPayment(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
          <div className="flex items-center justify-between px-3 border-2 border-[#0000005d] rounded-md py-2 mb-5">
            <p className="text-xl tracking-wide">TOTAL</p>{" "}
            <p className="font-semibold">
              {totalPayment(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
