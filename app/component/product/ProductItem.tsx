"use client";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/app/lib/utils";
import { Product } from "../../lib/definitions";

export default function ProductItem({ product }: { product: Product }) {

  return (
    <div className="flex flex-col items-center py-1 w-[17rem] rounded-sm h-[20rem] hover:shadow-md transition-shadow duration-200 ease-in-out">
      <div>
        <Link href={`/product/${product.id}`}>
          <div className="w-[14rem] h-[250px] rounded-md flex items-center justify-center bg-white">
            <Image
              src={`http://api.timbu.cloud/images/${product.photos[0]?.url}`}
              alt="product image"
              width={150}
              height={0}
            />
          </div>

          <p className="w-full px-1 text-center capitalize flex flex-col mt-2 gap-1">
            <span className="whitespace-nowrap font-semibold">
              {product.name}
            </span>
            <span className="font-semibold text-xl text-center">
              {formatCurrency(product.current_price[0].USD[0])}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
