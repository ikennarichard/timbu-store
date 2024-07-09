import Image from "next/image";
import Link from "next/link";
export default function Logo({ textColor = "" }: { textColor: string }) {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/icons/logo.svg" alt="Company logo" width={42} height={42} />
      <h1
        className={`font-bold text-xl sm:text-white tracking-[1px] text-${textColor}`}
      >
        Vault
      </h1>
    </Link>
  );
}
