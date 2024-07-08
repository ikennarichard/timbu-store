"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  text: string;
};

export default function SubmitButton({ text }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-red-700 text-white gap-3 font-[500] py-3 text-center w-full rounded-md flex items-center justify-center transistion duration-300 ease-in-out hover:brightness-110"
      type="submit"
    >
      <Image src="/icons/Lock.png" width={20} height={20} alt="lock" />
      {pending ? "Processing" : text}
    </button>
  );
}
