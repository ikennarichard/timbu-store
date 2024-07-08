import Link from "next/link";
import clsx from "clsx";

export default function Button({ text, link }: { text: string; link: string }) {
  return (
    <button
      className={clsx(
        "px-8 font-semibold p-3 bg-blue-700 text-white rounded-md hover:bg-reddish transition-colors duration-300 ease-in-out"
      )}
    >
      <Link href={link}>{text}</Link>
    </button>
  );
}
