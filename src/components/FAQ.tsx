// components/FAQ.tsx
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "O que é o Avaliador Imobiliário?",
    answer:
      "É o profissional responsável por atribuir valor técnico aos imóveis conforme normas da ABNT e mercado imobiliário.",
  },
  {
    question: "Quais são as áreas de atuação?",
    answer:
      "O avaliador pode atuar em imóveis residenciais, comerciais, rurais, judiciais e extrajudiciais.",
  },
  {
    question: "Preciso de uma avaliação para vender?",
    answer:
      "Sim, a avaliação técnica profissional garante segurança jurídica e valor justo de mercado.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Perguntas Frequentes
      </h2>
      <div className="max-w-2xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b overflow-hidden">
            <button
              className="w-full flex justify-between items-center text-left py-3 text-lg font-medium text-blue-700 hover:underline"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="ml-4 text-sm">
                {openIndex === index ? (
                  <FaMinus className="text-blue-500" />
                ) : (
                  <FaPlus className="text-blue-500" />
                )}
              </span>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden transform ${
                openIndex === index
                  ? "max-h-40 opacity-100 scale-y-100"
                  : "max-h-0 opacity-0 scale-y-95"
              } origin-top text-gray-700`}
            >
              <div className="py-2 px-1">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
