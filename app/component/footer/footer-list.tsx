import { ReactNode } from "react";

type FooterListProps = {
  children: ReactNode,
  heading: string
}

export default function FooterList({ children, heading }: FooterListProps) {
  return (
    <ul className="list-none">
      <h2 className="capitalize text-white text-xl font-bold mb-4">{heading}</h2>
      {children}
    </ul>
  )
}
