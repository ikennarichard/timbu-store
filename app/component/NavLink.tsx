"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Products", href: "/" },
  { name: "Pricing", href: "#" },
  { name: "About us", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

type NavLinkProps = {
  handleMenuToggle: () => void;
}

export default function NavLinks({handleMenuToggle}: NavLinkProps) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name} className="list-none">
            <Link
              href={link.href}
              className={clsx("", {
                "text-black font-bold": pathname === link.href,
              })}
              onClick={handleMenuToggle}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
