"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { LogosMastercard } from "@/public/icons/mastercard";
import { CibCcVisa } from "@/public/icons/visa";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import SuccessModal from "./success";

export default function BillingForm({ amount }: { amount: string }) {
  const { pending } = useFormStatus();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="flex flex-col w-[40%] md:w-full md:px-4 md:mt-4">
        <h2 className="font-semibold text-center">Billing Details</h2>
        <form
          className="flex flex-col gap-4 rounded-sm px-4 py-6 h-fit"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Card Holder Name
            </label>
            <input
              className="outline-none border-2 border-[#0000005d] rounded-md w-full px-2 py-2 bg-transparent"
              type="text"
              id="name"
              name="name"
              placeholder="Cardholder Name"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="name" className="sr-only">
              Card Number
            </label>
            <input
              className="outline-none border-2 border-[#0000005d] rounded-md w-full px-2 bg-transparent py-2"
              type="text"
              pattern="[0-9]*"
              id="card-number"
              placeholder="Card Number"
              maxLength={16}
              required
            />
            <p className="absolute top-[6px] right-2 flex items-center gap-3">
              <LogosMastercard /> <CibCcVisa />
            </p>
          </div>
          <div className="flex gap-2">
            <label htmlFor="expiry-date" className="sr-only">
              Card Expiry Date
            </label>
            <input
              className="flex-[2] outline-none border-[#0000005d] bg-transparent border-2 rounded-md w-2/5 px-2 py-2"
              type="text"
              id="expiry-date"
              name="expiry-date"
              placeholder="MM/YY"
              required
              maxLength={4}
            />
            <label htmlFor="cvv-number" className="sr-only">
              Card Verification Value (cvv)
            </label>
            <input
              className="outline-none border-[#0000005d] bg-transparent border-2 rounded-md w-2/5 px-2 py-2"
              type="text"
              pattern="[0-9]*"
              id="cvv-number"
              name="cvv-number"
              placeholder="CVV"
              maxLength={3}
              required
            />
          </div>
          <div>
            <label htmlFor="save-card" className="flex gap-2">
              <input type="checkbox" id="save-card" name="save-card" />
              Save my card for better checkout
            </label>
          </div>
          <button
            className="bg-red-700 text-white gap-3 font-[500] py-3 text-center w-full rounded-md flex items-center justify-center transistion duration-300 ease-in-out hover:brightness-110"
            type="submit"
          >
            <Image src="/icons/Lock.png" width={20} height={20} alt="lock" />
            {pending ? "Processing" : `Pay  ${amount}  USD`}
          </button>
          <p className="text-lg w-[90%]">
            By clicking this button you are agreeing to the{" "}
            <Link className="text-blue-700" href="#">
              Terms and service
            </Link>
          </p>
        </form>
      </div>
      <SuccessModal isOpen={showModal} closeModal={closeModal} />
    </>
  );
}
