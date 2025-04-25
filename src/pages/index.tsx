
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import PropertyList from "@/components/PropertyList";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { animateScroll as scroll } from "react-scroll";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center relative">
      <Navbar />
      <div className="pt-20 w-full">
        <HeroSection />
        <Services />
        <Specialties />
        <Testimonials />
        <PropertyList />
        <ContactForm />
        <FAQ />
        <MapSection />
        <Footer />
      </div>
      {showButton && (
        <button
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
}
