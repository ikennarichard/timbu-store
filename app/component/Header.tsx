'use client'

import React from "react";
import NavBar from "./NavBar";
import Button from "./Button";
import { PhShoppingCartSimpleFill } from "./CartIcon";
import Logo from "./Logo";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className={clsx("bg-[#ffffffd3] z-10 rounded-lg flex gap-[70px] w-11/12 items-center justify-between px-3 py-4 mx-auto", pathname === '/' && "absolute top-6 left-[4%]")}>
      <Logo textColor="black" />
      <NavBar />
      <div className="flex items-center gap-3 relative">
        <Button text="Login" link="#" />
        <Button text="Sign Up" link="#" />
        <PhShoppingCartSimpleFill />
      </div>
    </header>
  );
}
