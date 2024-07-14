'use client'

import { useState } from "react";
import ProductItem from "./ProductItem";
import { Product } from "@/app/lib/definitions";
import ReactPaginate from "react-paginate";
import ChevronLeft from "@/public/icons/chevron-left";
import ChevronRight from "@/public/icons/chevron-right";

export default function ProductList({products}: { products: Product[]}) {
  const [resetisActive, setResetIsActive] = useState<boolean | null>(null);

  const ITEMS_PER_PAGE = 10;

  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE)
  
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % products.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
    setResetIsActive(true);
  };
  
  return (
    <section className="pt-12 flex flex-col" id="products">
      <h2 className="text-[2rem] font-bold text-center">Product List</h2>
      <ul className="flex flex-wrap gap-5 justify-center mx-auto mt-7 w-[90%] max-w-[80rem]">
        {currentItems.map((product: Product) => (
          <li
            key={product.unique_id}
            className="w-fit flex flex-col items-center gap-2"
          >
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <ReactPaginate
            breakLabel="..."
            previousLabel={<ChevronLeft/>}
            nextLabel={<ChevronRight/>}
            containerClassName="pagination-container"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            forcePage={currentPage}
          />
      </div>
    </section>
  );
}
