import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative grid place-content-center w-full min-h-screen bg-[url('/images/hero-bg.svg')] bg-cover bg-no-repeat">
      <div className="z-10">
        <h2 className="capitalize text-white text-[4.625rem] text-center font-extrabold">
          fuel your fitness <span className="text-[#E5C207]">journey</span>{" "}
          <p>
            <span className="lowercase">with</span> premium suppliments
          </p>
        </h2>
        <div className="flex justify-center gap-6">
          <Button text="View Product" link="#products" />
          <button className="px-8 py-3 font-semibold border-2 border-blue-700 text-white rounded-md hover:bg-reddish hover:border-reddish transition-colors duration-300 ease-in-out">
            Explore now
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
}
