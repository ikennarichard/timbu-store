import { products } from "../../lib/products-data";
import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <section className="pt-12">
      <h2 className="text-[2rem] font-bold text-center">Product List</h2>
      <ul className="flex flex-wrap gap-5 justify-center mt-7">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-fit flex flex-col items-center gap-2"
          >
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
