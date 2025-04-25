import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold text-blue-700">Imobiliária</div>
        <ul className="flex gap-6 text-gray-700">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="properties"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              Imóveis
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              Depoimentos
            </Link>
          </li>
          <li>
            <Link
              to="localizacao"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              Localização
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
