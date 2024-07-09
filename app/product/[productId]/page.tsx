"use client";

import { products } from "@/app/lib/products-data";
import Image from "next/image";
import QuantityButton from "../_components/quantity-button";
import ProductItem from "@/app/component/product/ProductItem";
import Subscribe from "@/app/component/footer/subscribe";
import Link from "next/link";
import { formatCurrency } from "@/app/lib/formatCurrency";
import { useState } from "react";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const [description, setDescrription] = useState("");
  const [productName, setProductName] = useState("");

  const handleMouseOver = (productId: string) => {
    const item = products.find((i) => i.id === productId);
    if (item) {
      setDescrription(item.description);
      setProductName(item.name);
    } else {
      setDescrription("");
      setProductName("");
    }
  };
  const product = products.find((product) => product.id === productId);
  return (
    <>
      <div className="flex mt-3 pl-24 md:px-6 h-fit md:flex-col">
        {/* project image */}
        <div className="bg-alabaster rounded-md h-fit p-12 md:w-fit">
          <Image
            src={product!.image}
            alt="product image"
            width={200}
            height={200}
          />
        </div>
        {/* </#project image> */}

        {/* product details */}
        <div className="h-fit max-w-[25rem] ps-3 pt-1 flex flex-col gap-8">
          <h3 className="capitalize font-semibold flex gap-3 md:text-[1.5rem]">
            <p>{product!.name}</p> <p>{formatCurrency(product!.price)}</p>
          </h3>
          <p className="md:hidden">
            <b>Category:</b>{" "}
            <span className="capitalize">{product!.category}</span>
          </p>

          {/* description */}
          <p className="max-w-full">{product!.description}</p>

          <div className="flex gap-5 items-center md:justify-between md:px-5">
            <span className="md:hidden">Quantity:</span>
            <QuantityButton product={product!} />

            <Link
              href="/checkout"
              className="bg-reddish text-white rounded-md px-8 py-2 md:py-3 text-center"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      {/* </#project details> */}

      <div>
        <ul className="flex flex-col gap-5 mt-7 pl-24 md:hidden">
          <div className="flex gap-3 w-fit">
            {products
              .filter(
                (p) => p.category === product?.category && p.id !== product.id
              )
              .slice(0, 2)
              .map((p) => (
                <li
                  key={p.id}
                  className="w-fit items-center cursor-pointer"
                  onMouseOver={() => handleMouseOver(p.id)}
                >
                  <div className="w-[10rem] h-[200px] rounded-md flex items-center justify-center bg-[#eeeeee]">
                    <Image
                      src={p.image}
                      alt="product image"
                      width={130}
                      height={0}
                    />
                  </div>
                </li>
              ))}
          </div>
          <li className="w-fit flex gap-5">
            <div className="flex h-[30%] gap-6">
              <h3 className="font-bold text-md">Description</h3>
              <div className="relative w-[6px] h-[10rem] rounded-md bg-black">
                <div className="absolute w-[6px] h-[5rem] left-0 rounded-md bg-reddish"></div>
              </div>
            </div>
            <div className="w-[30%]">
              <p className="capitalize font-semibold">{productName}</p>{" "}
              {description}
            </div>
          </li>
        </ul>

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
        <h2 className="text-[1.8rem] font-bold md:text-[1rem] md:text-center">
          SUBSCRIBE NOW For Coupons, Newsletters, And More!
        </h2>
        <Subscribe />
      </footer>
    </>
  );
}
