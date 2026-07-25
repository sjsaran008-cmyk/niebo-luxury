import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is included in a Full Home Interior package?",
    answer:
      "A full home interior package typically includes Modular kitchens, Wardrobes, TV units, Living room Furniture, Bedroom Interiors, Storage Solutions, False ceilings, Lighting and Customized designs tailored to your lifestyle and budget.",
  },
  {
    question: "Why should I Choose a Modular Kitchen?",
    answer:
      "Modular kitchens offer Smart storage, Efficient layouts, Easy maintenance and Modern Aesthetic, making everyday cooking more Convenient and Enjoyable.",
  },
  {
    question: "How can I make my Living room look more Spacious?",
    answer:
      "Smart furniture placement, Multifunctional Storage, Proper lighting and thoughtfully selected colours can help create a more open and Spacious living room.",
  },
  {
    question: "What are the essential elements of a well-designed bedroom?",
    answer:
      "A Comfortable Layout, Functional Wardrobes, Proper lighting, Stylish Furniture and Calming colour schemes are key elements of a well-designed Bedroom.",
  },
];

export default function ProjectsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-light text-zinc-900 md:text-5xl">
            Have Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 text-base leading-7 md:leading-8">
            Everything you need to know before starting your dream interior
            project.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-5 py-5 md:px-8 md:py-6 text-left"
                >
                  <h3 className="text-base md:text-lgfont-medium text-zinc-900">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <Minus size={20} className="text-[#C8A96A]" />
                  ) : (
                    <Plus size={20} className="text-zinc-500" />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-zinc-200 px-5 py-5 md:px-8 md:py-6">
                    <p className="text-base leading-7 md:leading-8 text-zinc-600">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}