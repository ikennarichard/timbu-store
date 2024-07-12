"use client";

import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

const links = [
  { name: "Products", href: "#products" },
  { name: "Pricing", href: "#pricing" },
  { name: "About us", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

type NavLinkProps = {
  handleMenuToggle: () => void;
};

export default function NavLinks({ handleMenuToggle }: NavLinkProps) {
  const [fragment, setFragment] = useState("#products");

  const handleClick = (frag: string) => {
    setFragment(frag);
    handleMenuToggle();
  };

  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name} className="list-none">
            <Link
              href={link.href}
              className={clsx("", {
                "text-black font-bold": fragment === link.href,
              })}
              onClick={() => handleClick(link.href)}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
