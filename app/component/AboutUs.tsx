import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="text-center flex justify-center overflow-hidden items-center bg-[#0C8E8E] text-pretty pt-10 pb-[8rem] relative md:bg-transparent md:absolute md:min-h-screen sm:animate-fade w-full"
    >
      <div className="w-[65%] sm:w-[98%] text-white mx-auto md:relative md:top-[17rem]">
        <h2 className="text-[2rem] font-bold sm:text-2xl">About us</h2>
        <p className="text-[2rem] max-w-full md:w-[88%] md:mx-auto mt-12 word md:text-[0.875rem] md:mt-[1.2rem]">
          At Vault, we&apos;re passionate about fitness and helping our
          customers achieve their goals. With years of experience in the
          industry, we understand the importance of quality supplements in
          maximizing performance and results.
        </p>
      </div>
      <Image
        src="/images/gym-guy.png"
        alt="A muscular gym guy"
        width={500}
        height={0}
        quality={80}
        className="absolute right-10 -bottom-3 md:hidden"
      />
    </section>
  );
}
