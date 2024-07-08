import { formatCurrency } from "@/app/lib/formatCurrency";
import { products } from "@/app/lib/products-data";
import Image from "next/image";

type CartItemProps = {
  id: string;
  quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const product = products.find(i => i.id === id)

  if (product == null) return null;
  return (
    <>
      <div className="flex justify-between items-center border-2 rounded-md p-2" key={product.id}>
        <div className="flex items-center gap-4">
          <div className="bg-light_silver rounded-md p-6">
            <Image
              src={product!.image}
              alt="product image"
              width={60}
              height={60}
            />
          </div>
          <h3 className="capitalize">
            {product!.name} <span>x{quantity}</span>
          </h3>
        </div>
        <div className="justify-self-end font-semibold">
          <span>{formatCurrency(product!.price * quantity)}</span>
        </div>
      </div>
    </>
  );
}
