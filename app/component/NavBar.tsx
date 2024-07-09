import NavLinks from "./NavLink";
import clsx from "clsx";

type NavBarProps = {
  isOpen: boolean;
  handleMenuToggle: () => void;
}

export default function NavBar({ isOpen, handleMenuToggle }: NavBarProps) {
  return (
    <nav
      className={clsx(
        "flex sm:flex-col gap-6 sm:bg-light_cyan origin-left transition-transform duration-300 ease-in-out sm:fixed inset-0 sm:pt-40 sm:px-10 sm:z-10",
        isOpen ? "sm:translate-x-0" : "sm:-translate-x-[300rem]"
      )}
    >
      <ul className="flex sm:flex-col gap-6">
        <NavLinks handleMenuToggle={handleMenuToggle} />
      </ul>
    </nav>
  );
}
