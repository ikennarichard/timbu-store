import clsx from "clsx";

type HamburgerProps = {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
};

export default function Hamburger({
  isMenuOpen,
  handleMenuToggle,
}: HamburgerProps) {
  return (
    <button
      className="bg-dark_charcoal rounded-md [@media(min-width:900px)]:hidden"
      onClick={handleMenuToggle}
    >
      <div
        className={`transition-all delay-300 w-9 h-9 flex flex-col items-center justify-center gap-1 lg:hidden ${
          isMenuOpen && "sm:z-10 sm:fixed left-9 top-10"
        }`}
      >
        <span
          className={clsx(
            "w-5 h-[2px] transition-transform duration-300 ease-in-out",
            isMenuOpen
              ? "sm:rotate-45 sm:translate-y-1 sm:bg-black"
              : "bg-white"
          )}
        ></span>
        <span
          className={clsx(
            "w-5 h-[2px] bg-white transition-transform duration-300 ease-in-out origin-center scale-1",
            isMenuOpen && "scale-0"
          )}
        ></span>
        <span
          className={clsx(
            "w-5 h-[2px] transition-transform duration-300 ease-in-out",
            isMenuOpen
              ? "sm:-rotate-45 sm:-translate-y-2 sm:bg-black "
              : "bg-white"
          )}
        ></span>
      </div>
    </button>
  );
}
