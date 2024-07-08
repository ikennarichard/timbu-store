import type { Metadata } from "next";
import { poppins } from "./ui/font";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: 'Vault'
  },
  description: "Shop for premium fitness supplements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
