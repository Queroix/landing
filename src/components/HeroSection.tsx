import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
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
      id="hero"
      ref={sectionRef}
      className={`w-full py-32 text-center transition-opacity duration-1000 relative bg-cover bg-center bg-no-repeat text-white ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${
          process.env.NODE_ENV === "production" ? "/landing" : ""
        }/images/cidade.png)`,
      }}
    >
      <h1 className="text-5xl font-extrabold drop-shadow-md mb-4">
        Venda seu imóvel com quem entende
      </h1>
      <p className="text-lg text-white drop-shadow-sm">
        Solicite uma avaliação gratuita e descubra o valor real do seu imóvel.
      </p>
    </section>
  );
}
