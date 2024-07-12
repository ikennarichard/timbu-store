"use client";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "../../lib/formatCurrency";
import { Product } from "../../lib/products-data";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import QuantityButton from "../QuantiytButton";

export default function ProductItem({ product }: { product: Product }) {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();

  const quantity = getItemQuantity(product.id);
  return (
    <div className="border-2 border-gray-400 px-5 py-5 w-[16rem] rounded-sm">
      <div>
        <div className="w-[13rem] h-[250px] rounded-md flex items-center justify-center bg-white">
          <Image
            src={product.image}
            alt="product image"
            width={130}
            height={0}
          />
        </div>
        <p className="text-center capitalize flex items-center mt-2 gap-2">
          <span>{product.name}</span>
          <span>{formatCurrency(product.price)}</span>
        </p>

        <div className="w-full p-1 flex justify-between">
          <Link
            href={`/product/${product.id}`}
            className="bg-blue-700 transition-colors duration-300 ease-in-out hover:bg-reddish rounded-md p-2 text-white font-semibold"
          >
            Buy now
          </Link>
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(product.id)}
              className="group flex hover:bg-reddish hover:border-reddish items-center gap-1 ml-3 border-2 rounded-md px-2 py-1 border-[#00000080] transition-colors duration-300 ease-in-out"
            >
              <span className="text-black font-[550] group-hover:text-white transition-colors duration-300 ease-in-out">
                Add
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-label='shopping cart icon'
              >
                <path
                  fill="#000"
                  d="M12 9q-.425 0-.713-.288T11 8V6H9q-.425 0-.713-.288T8 5q0-.425.288-.713T9 4h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2h2q.425 0 .713.288T16 5q0 .425-.288.713T15 6h-2v2q0 .425-.288.713T12 9ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.15 0-1.738-.988T5.25 14.05L6.6 11.6L3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7.025l3.6-6.5q.125-.225.35-.363T20 4q.575 0 .863.488t.012.987L17.3 11.95q-.275.5-.738.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7Z"
                  className="group-hover:fill-white transition-colors duration-300 ease-in-out"
                ></path>
              </svg>
            </button>
          ) : (
            <QuantityButton product={product} />
          )}
        </div>
      </div>
    </div>
  );
}
