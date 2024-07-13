import { Metadata } from "next";
import { getAllProducts } from "../lib/data";
import Checkout from "./_components/checkout";
import Logo from "../component/Logo";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function CheckoutPage() {
  const products = await getAllProducts();

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden pt-6 pl-3">
      <Logo textColor="black" />
      <Checkout products={products} />
    </main>
  );
}
