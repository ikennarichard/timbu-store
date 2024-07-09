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
      <div className="md:bg-[#0000008e] md:rounded-md md:py-1 md:w-[95%] md:mx-auto">
        <Header />
      </div>
      {children}
    </main>
  );
}
