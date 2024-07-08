import { formatCurrency } from "@/app/lib/formatCurrency";
import { Product } from "@/app/lib/products-data";
import Image from "next/image";

export default function CartItem({ product }: { product: Product }) {
  return (
    <>
      <div className="flex justify-between items-center bg-alabaster p-2" key={product.id}>
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-md p-6">
            <Image
              src={product!.image}
              alt="product image"
              width={40}
              height={40}
            />
          </div>
          <h3 className="capitalize">
            {product!.name} <span>x1</span>
          </h3>
        </div>
        <div className="justify-self-end">
          <span>{formatCurrency(product!.price)}</span>
        </div>
      </div>
    </>
  );
}
