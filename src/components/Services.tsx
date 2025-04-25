// components/Services.tsx
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="w-full bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Serviços Prestados
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 max-w-5xl mx-auto px-4">
          {[
            "✔ Avaliação de imóveis gratuita",
            "✔ Assessoria completa na venda",
            "✔ Divulgação em plataformas especializadas",
            "✔ Acompanhamento jurídico",
          ].map((item, index) => (
            <li
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
