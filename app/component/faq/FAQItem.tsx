import PlusIcon from "@/public/icons/plus-icon";

export default function FAQItem({ question }: { question: string }) {
  return (
    <li className="flex justify-between items-center capitalize border-2 border-[#00000088] p-6 shadow-md font-semibold mb-3">
      {question} <PlusIcon />
    </li>
  );
}
