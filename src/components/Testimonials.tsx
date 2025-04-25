import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "João S.",
    quote: "Vendi meu apartamento em menos de 30 dias. Atendimento excelente!",
  },
  {
    name: "Maria C.",
    quote:
      "Profissionalismo e agilidade! Recebi toda assistência que precisava.",
  },
  {
    name: "Carlos M.",
    quote: "Avaliação super justa, consegui vender rápido e sem dor de cabeça.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setTransitioning(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`w-full bg-gray-50 py-16 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        O que dizem nossos clientes
      </h2>
      <div className="max-w-3xl mx-auto px-4 text-center relative h-[140px]">
        <FaQuoteLeft className="text-blue-600 text-3xl mx-auto mb-4" />
        <div
          className={`transition-transform duration-500 ease-in-out transform ${
            transitioning
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <blockquote className="text-xl italic text-gray-700 min-h-[80px]">
            “{testimonials[current].quote}”
          </blockquote>
          <p className="text-sm text-gray-600 mt-4">
            – {testimonials[current].name}
          </p>
        </div>
      </div>
    </section>
  );
}
