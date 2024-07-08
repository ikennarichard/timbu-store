'use client'

import NavBar from "./NavBar";
import Button from "./Button";
import { CartIcon } from "./CartIcon";
import Logo from "./Logo";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FormkitAvatarman } from "@/public/icons/avatar";

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className={clsx("bg-[#ffffffd3] z-10 rounded-lg flex gap-[70px] w-11/12 items-center justify-between px-3 py-4 mx-auto", pathname === '/' && "absolute top-6 left-[4%]")}>
      <Logo textColor="black" />
      <NavBar />
      <div className="flex items-center gap-3">
        <CartIcon />
        <div className="flex items-center gap-2 ml-2">
          <FormkitAvatarman />
          <p className="text-xl">Account</p>
        </div>
      </div>
    </header>
  );
}
