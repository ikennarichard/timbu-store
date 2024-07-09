import Image from "next/image";

type SuccessModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export default function SuccessModal({
  isOpen,
  closeModal,
}: SuccessModalProps) {
  return (
    <>
      {isOpen && (
        <div className="grid place-content-center gap-3 fixed inset-0 bg-light_cyan">
          <button
            className="absolute top-2 bg-reddish text-white rounded-md py-1 px-2 right-2 font-bold"
            onClick={closeModal}
          >
            X
          </button>
          <Image
            src="/images/success-image.svg"
            width={300}
            height={300}
            alt=""
            className="animate-pulse"
          />
          <h3 className="mt-3 font-semibold text-2xl">Payment Successful</h3>
        </div>
      )}
    </>
  );
}
