
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PropertyList() {
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

  return (
    <section
      id="properties"
      ref={sectionRef}
      className={`w-full bg-gray-50 py-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Imóveis Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {[1, 2, 3].map((id, index) => (
          <div
            key={id}
            style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            className={`bg-white rounded-xl p-5 shadow transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } hover:shadow-lg hover:scale-[1.02]`}
          >
            <h3 className="text-xl font-semibold text-gray-800">Imóvel {id}</h3>
            <p className="text-sm text-gray-600 mt-1">Descrição breve do imóvel.</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-full shadow transition flex items-center gap-2">
          Ver mais <FaArrowRight />
        </button>
      </div>
    </section>
  );
}