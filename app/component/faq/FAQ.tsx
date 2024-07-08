import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-alabaster flex flex-col items-center gap-3 pt-16 mt-9"
    >
      <h2 className="text-[2rem] font-bold text-center">FAQ</h2>
      <p className="w-3/5 text-center text-lg">
        Got questions? We&apos;ve got answers! Check out our frequently asked
        questions to learn more about our products, policies, and services.
      </p>

      <ul className="list-none w-2/4 mt-7">
        <FAQItem question="Shipping and delivery" />
        <FAQItem question="When can I expect to see result?" />
        <FAQItem question="Can i take vault with other supplements or medication?" />
        <FAQItem question="How can I contact customer support?" />
      </ul>
    </section>
  );
}
