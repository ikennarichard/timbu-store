export default function QuantityButton() {
  return (
    <div className="bg-[#AEAEAE] flex items-center justify-around rounded-md w-1/5 px-1 py-1">
      <button className="text-2xl">-</button>
      <span className="text-reddish font-bold text-xl">1</span>
      <button className="text-2xl">+</button>
    </div>
  );
}
