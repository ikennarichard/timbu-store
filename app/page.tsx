import { Metadata } from "next";
import Header from "./component/Header";
import AboutUs from "./component/AboutUs";
import Hero from "./component/Hero";
import ProductList from "./component/product/ProductList";
import FAQ from "./component/faq/FAQ";
import Footer from "./component/footer/Footer";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex overflow-x-hidden min-h-screen flex-col bg-light_cyan gap-2 relative z-[1]">
      <Header />
      {/* Hero */}
      <Hero />
      {/* About us */}
      <AboutUs />
      {/* Product list */}
      <ProductList />
      {/* FAQ */}
      <FAQ />
      {/* Footer */}
      <Footer />
    </main>
  );
}
