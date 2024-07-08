import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "../../lib/formatCurrency";
import AddToCartIcon from "@/public/icons/add-to-cart";
import { Product } from "../../lib/products-data";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <>
      <Link href={`/product/${product.id}`}>
        <div className="w-[250px] h-[250px] rounded-md flex items-center justify-center bg-white">
          <Image
            src={product.image}
            alt="product image"
            width={200}
            height={300}
          />
        </div>
        <p className="text-center capitalize font-[500] mt-2">{product.name}</p>
        <p className="text-center font-[500]">
          {formatCurrency(product.price)}
        </p>
      </Link>
      <div className="w-full p-1 flex justify-center">
        <Link
          href="/checkout"
          className="bg-blue-700 transition-colors duration-300 ease-in-out hover:bg-reddish rounded-md p-2 text-white"
        >
          Buy now
        </Link>
        <button className="flex items-center gap-1 ml-3 border-2 rounded-md px-2 py-1 border-[#00000080]">
          <span className="text-black font-[550]">Add</span> <AddToCartIcon />
        </button>
      </div>
    </>
  );
}
