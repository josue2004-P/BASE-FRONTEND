import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../auth/hooks/useAuthStore";



export default function Navbar() {

    const { startLogout } = useAuthStore();
  
  return (
    <header className="text-gray-800 lg:text-md max-w-[19rem] lg:max-w-4xl flex justify-center mx-auto py-2 lg:py-3 mt-3 rounded-md shadow-md">
      <div className="flex justify-between items-center w-full px-4">
        <p className="font-semibold ">Base</p>
        <FiAlignLeft size={30} className="lg:hidden" />
      </div>

      <nav className="hidden lg:flex lg:w-full lg:justify-end lg:px-4">
        <ul className=" font-semibold">
          <li className=" flex gap-3 items-center">
            <Link
              to="/"
              className=""
            >
              Inicio
            </Link>

            <button
              onClick={() => {
                startLogout();
              }}
              className="bg-red-900 text-white flex items-center p-2  font-semibold  rounded-lg  hover:bg-red-800 group"
            >
              <span className="">Cerrar Sesion</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
