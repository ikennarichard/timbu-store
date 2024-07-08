"use client";
import BillingForm from "./_components/billing-form";
import ShoppingCart from "./_components/shopping-cart";
import { totalPayment } from "../lib/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { products } from "../lib/products-data";

export default function CheckoutPage() {
  const { cartItems } = useShoppingCart();
  const total = totalPayment(
    cartItems.reduce((total, cartItem) => {
      const item = products.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );
  return (
    <main className="bg-light_cyan min-h-screen flex flex-col justify-center">
      <title>Checkout</title>
      <section className="flex flex-wrap justify-center gap-3 pt-12">
        <BillingForm amount={total} />
        <ShoppingCart />
      </section>
    </main>
  );
}
