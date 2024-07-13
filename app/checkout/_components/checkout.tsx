"use client";
import BillingForm from "./billing-form";
import ShoppingCart from "./shopping-cart/shopping-cart";
import { totalPayment } from "@/app/lib/utils";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { Product } from "@/app/lib/definitions";

export default function Checkout({ products }: { products: Product[] }) {
  const { cartItems } = useShoppingCart();
  const total = totalPayment(
    cartItems.reduce((total, cartItem) => {
      const item = products.find((i) => i.id === cartItem.id);
      const price = item?.current_price[0].USD[0];
      return total + (price || 0) * cartItem.quantity;
    }, 0)
  );
  return (
    <>
      <section className="flex sm:flex-col-reverse h-full gap-3 pt-12 pr-3 md:px-2">
        <BillingForm amount={total} />
        <ShoppingCart products={products}/>
      </section>
    </>
  );
}
