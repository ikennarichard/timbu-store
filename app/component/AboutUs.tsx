import Image from "next/image"

export default function AboutUs() {
  return (
    <section
        id="about"
        className="text-center flex justify-center overflow-hidden items-center bg-[#0C8E8E] py-20 relative"
      >
        <div className="w-[70%] text-white z-10">
          <h2 className="text-[2rem] font-bold">About us</h2>
          <p className="text-[1.8rem] mt-6">
            At Vault, we&apos;re passionate about fitness and helping our
            customers achieve their goals. With years of experience in the
            industry, we understand the importance of quality supplements in
            maximizing performance and results.
          </p>
        </div>
        <Image
            src="/images/gym-guy.png"
            alt="A muscular gym guy"
            width={420}
            height={200}
            quality={80}
            className="absolute right-28 -bottom-3"
          />
      </section>
  )
}
