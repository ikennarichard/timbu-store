import Link from "next/link";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function CartIcon() {
  const { cartQuantity } = useShoppingCart();
  return (
    <div className="relative w-10 h-10 rounded-full bg-laurel_green flex items-center justify-center sm:rounded-md sm:bg-dark_charcoal">
      <Link href="/checkout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            fill="#000"
            className="md:fill-white"
            d="m239.71 74.14l-25.64 92.28A24.06 24.06 0 0 1 191 184H92.16A24.06 24.06 0 0 1 69 166.42L33.92 40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 7.71 5.86L57.19 64H232a8 8 0 0 1 7.71 10.14M88 200a16 16 0 1 0 16 16a16 16 0 0 0-16-16m104 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
          ></path>
        </svg>
        <div className="absolute right-1 bottom-[2px] text-[11px] w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center p-2">
          {cartQuantity}
        </div>
      </Link>
    </div>
  );
}
