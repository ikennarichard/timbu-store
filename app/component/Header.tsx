"use client";

import NavBar from "./NavBar";
import { CartIcon } from "./CartIcon";
import Logo from "./Logo";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FormkitAvatarman } from "@/public/icons/avatar";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={clsx(
        "bg-[#ffffffd3] sm:bg-transparent z-10 rounded-lg flex gap-[70px] w-11/12 items-center justify-between px-3 py-4 mx-auto",
        pathname === "/" && "absolute top-6 left-[4%]"
      )}
    >
      <Logo textColor="black" />
      <NavBar isOpen={isMenuOpen} handleMenuToggle={toggleMenu} />
      <div className="flex items-center gap-3">
        <CartIcon />
        <div className="flex items-center gap-2 ml-2 md:hidden">
          <FormkitAvatarman />
          <p className="text-xl">Account</p>
        </div>
        <Hamburger isMenuOpen={isMenuOpen} handleMenuToggle={toggleMenu} />
      </div>
    </header>
  );
}
