"use client";

import CartItem from "./cart-item";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { Product } from "@/app/lib/definitions";
import { totalPayment } from "@/app/lib/utils";

export default function ShoppingCart({products}: {products: Product[]}) {
  const { cartItems, clearCart } = useShoppingCart();
  return (
    <div className="md:w-[90%] w-[55%] md:mx-auto md:px-0 px-8 py-5 h-full">
      
      <div className="flex flex-col justify-between gap-4 px-3 pt-3 border-[#0000005d]">
        <h2 className="font-semibold text-xl text-[#000000b9] uppercase border-b-2 pb-2">Your Order</h2>
        <div className="h-full w-full">
          <div className="flex items-center gap-3">
            <button
              onClick={clearCart}
              className="bg-red-700 px-2 py-[2px] font-semibold rounded-3xl text-white"
            >
              Clear Cart
            </button>
          </div>

          <ul className="list-none mt-3">
            {cartItems.map((product) => (
              <li key={product.id} className="mb-3">
                <CartItem id={product.id} quantity={product.quantity} products={products} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 border-b-2">
          <div className="flex items-center justify-between mb-3 px-3 py-2">
            <p className="text-xl tracking-wide capitalize font-semibold">subtotal</p>{" "}
            <p className="font-semibold">
              {totalPayment(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find(
                    (i) => i.id === cartItem.id
                  );
                  const price = item?.current_price[0].USD[0];
                  return total + (price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
          <div className="flex items-center justify-between px-3 py-2 mb-5">
            <p className="text-xl tracking-wide font-semibold capitalize">total</p>{" "}
            <p className="font-semibold">
              {totalPayment(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find(
                    (i) => i.id === cartItem.id
                  );
                  const price = item?.current_price[0].USD[0];
                  return total + (price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
