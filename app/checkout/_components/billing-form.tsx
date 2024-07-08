import SubmitButton from "@/app/component/SubmitButton";
import { LogosMastercard } from "@/public/icons/mastercard";
import { CibCcVisa } from "@/public/icons/visa";
import Link from "next/link";

export default function BillingForm() {
  return (
    <form className="flex flex-col gap-4 bg-white rounded-sm px-4 py-6 w-[40%] h-fit">
      <h2 className="font-semibold text-center">Billing Details</h2>
      <div>
        <label htmlFor="name" className="sr-only">
          Card Holder Name
        </label>
        <input
          className="outline-none border-2 rounded-md w-full px-2 py-2"
          type="text"
          id="name"
          name="name"
          placeholder="Cardholder Name"
        />
      </div>
      <div className="relative">
        <label htmlFor="name" className="sr-only">
          Card Number
        </label>
        <input
          className="outline-none border-2 rounded-md w-full px-2 py-2"
          type="text"
          id="card-number"
          placeholder="Card Number"
        />
        <p className="absolute top-[6px] right-2 flex items-center gap-3"><LogosMastercard/> <CibCcVisa/></p>
      </div>
      <div className="flex gap-2">
        <label htmlFor="expiry-date" className="sr-only">
          Card Expiry Date
        </label>
        <input
          className="flex-[2] outline-none border-2 rounded-md w-2/5 px-2 py-2"
          type="text"
          id="expiry-date"
          name="expiry-date"
          placeholder="MM/YY"
        />
        <label htmlFor="cvv-number" className="sr-only">
          Card Verification Value (cvv)
        </label>
        <input
          className="outline-none border-2 rounded-md w-2/5 px-2 py-2"
          type="number"
          id="cvv-number"
          name="cvv-number"
          placeholder="CVV"
        />
      </div>
      <div>
        <label htmlFor="save-card" className="flex gap-2">
          <input
            type="checkbox"
            id="save-card"
            name="save-card"
            placeholder="MM/YY"
          />
          Save my card for better checkout
        </label>
      </div>

      <SubmitButton text="Pay $499.0 USD"/>
      <p className="text-lg w-[90%]">By clicking this button you are agreeing to the <Link className="text-blue-700" href='#'>Terms and service</Link></p>
    </form>
  );
}
