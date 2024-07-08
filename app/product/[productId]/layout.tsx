import Header from "@/app/component/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Product'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-light_cyan pt-10 flex flex-col gap-6 min-h-screen">
      <Header/>
      {children}
    </main>
  );
}
