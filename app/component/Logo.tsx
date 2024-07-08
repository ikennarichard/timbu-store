import Image from "next/image"

export default function Logo({textColor=''}: {textColor: string}) {
  return (
    <div className="flex gap-2 items-center">
      <Image src="/icons/logo.svg" alt="Company logo" width={42} height={42} />
      <h1 className={`font-bold text-xl text-${textColor}`}>Vault</h1>
    </div>
  )
}
