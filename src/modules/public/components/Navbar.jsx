import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="text-gray-800 lg:text-md max-w-[19rem] lg:max-w-4xl flex justify-center mx-auto py-2 lg:py-3 mt-3 rounded-md shadow-md">
      <div className="flex justify-between items-center w-full px-4">
        <p className="font-semibold ">Base</p>
        <FiAlignLeft size={30} className="lg:hidden" />
      </div>

      <nav className="hidden lg:flex lg:w-full lg:justify-end lg:px-4">
        <ul className=" font-semibold">
          <li className=" flex gap-3">
            <Link
              to="/"
              className=""
            >
              Inicio
            </Link>
            <Link
              to="/auth"
              className=""
            >
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
