import Header from "@/app/component/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-light_cyan pt-10 flex flex-col gap-6 min-h-screen overflow-x-hidden">
      <div className="bg-[#0000008e] rounded-md py-1 w-[95%] mx-auto">
        <Header />
      </div>
      {children}
    </main>
  );
}
