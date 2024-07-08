import { Product } from "@/app/lib/products-data";
import { products } from "@/app/lib/products-data";
import Image from "next/image";
import QuantityButton from "../_components/quantity-button";
import ProductItem from "@/app/component/product/ProductItem";
import Subscribe from "@/app/component/footer/subscribe";
import Link from "next/link";
import { formatCurrency } from "@/app/lib/formatCurrency";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  const product: Product | undefined = products.find(
    (product) => product.id === productId
  );
  return (
    <>
      <div className="flex justify-center mt-3">
        <div className="bg-white rounded-md p-12">
          <Image
            src={product!.image}
            alt="product image"
            width={200}
            height={300}
          />
        </div>
        <div className="basis-2/6 ps-3 flex flex-col gap-12">
          <h3 className="capitalize font-semibold">
            {product!.name} {formatCurrency(product!.price)}
          </h3>
          <p>
            <b>Category:</b>{" "}
            <span className="capitalize">{product?.category}</span>
          </p>
          <p className="w-4/6">{product?.description}</p>
          <div className="flex gap-5 items-center">
            <span>Quantity:</span>
            <QuantityButton />
            
            <Link
              href="/checkout"
              className="bg-reddish text-white rounded-md px-8 py-2"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[1.2rem] text-center font-bold mt-8">
          Related products
        </h2>
        <ul className="flex flex-wrap gap-5 justify-center mt-7">
          {products
            .filter(
              (p) => p.category === product?.category && p.id !== product.id
            )
            .map((p) => (
              <li key={p.id} className="w-fit flex flex-col items-center gap-2">
                <ProductItem product={p} />
              </li>
            ))}
        </ul>
      </div>
      <footer className="bg-dark_cyan px-10 py-20 flex flex-col gap-8 mt-8 items-center justify-center">
        <h2 className="text-[1.8rem] font-bold">
          SUBSCRIBE NOW For Coupons, Newsletters, And More!
        </h2>
        <Subscribe />
      </footer>
    </>
  );
}
