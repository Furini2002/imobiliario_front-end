import { Link } from "react-router-dom";

export default function Header() {
  return (
    /*<header className="w-full bg-blue-500 text-white">
      <div className="w-full px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Mendes & Favaro" className="h-8" />
        </div>

        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/sobre-nos" className="hover:text-gray-200">
            Sobre nós
          </Link>
          <Link to="/fale-conosco" className="hover:text-gray-200">
            Fale conosco
          </Link>
          <Link to="/anuncie" className="hover:text-gray-200">
            Anuncie aqui seu imóvel
          </Link>
          <Link to="/simulador" className="hover:text-gray-200">
            Simule seu Financiamento
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/seunumerowhatsapp"
            target="_blank"
            className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-green-600"
          >
            Fale conosco
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-gray-200"
          >
            📘
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-gray-200"
          >
            📸
          </a>
        </div>
      </div>
    </header>*/

    <header className="bg-yellow text-white text-4xl p-6">
      Tailwind funcionando no Header
    </header>
  );
}
