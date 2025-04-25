// components/ContactForm.tsx
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  const handleContactForm = () => {   
    const text = `Olá, meu nome é quero conversar sobre meu imovel`;
    const phone = "5562998556932";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="w-full bg-white py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Entre em Contato
      </h2>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleContactForm}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition flex items-center gap-2"
        >
          <FaWhatsapp className="text-2xl" />
          Fale conosco no WhatsApp
        </button>
      </div>
    </section>
  );
}