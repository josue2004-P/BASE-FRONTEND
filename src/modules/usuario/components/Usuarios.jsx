import PropTypes from "prop-types";
import { formatearFechaHora } from "../helpers/formatearFechaHora";
import { Link } from "react-router-dom";
import { useUsuarioStore } from "../hooks/useUsuarioStore";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

export default function Usuarios({ items,limit }) {
  const { fechaFormateada } = formatearFechaHora(items.fechaCreacion);
  const { startDesactivarUsuario } = useUsuarioStore();

  useEffect(() => {
    initFlowbite(); // Inicializa dropdowns, tooltips, modals, etc.
  }, []);

  return (
    <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
      <th
        scope="row"
        className="flex items-center  py-4 text-gray-900 whitespace-nowrap "
      >
        <div className="ps-3">
          <div className="text-base font-semibold">{items.nombreCompleto}</div>
          <div className="font-normal text-gray-500">{items.email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{items.usuario}</td>
      <td className="px-6 py-4">{fechaFormateada}</td>
      <td className="px-6 py-4 ">
        <div className="flex items-center">
          {!items.activo ? (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
              Activo
            </>
          ) : (
            <>
              <>
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                No Activo
              </>
            </>
          )}
        </div>
      </td>
      <td className="px-4 py-3 ">
        <div className=" flex  items-center justify-center">
          <button
            id={`${items.id}-dropdown-button`}
            data-dropdown-toggle={`${items.id}-dropdown`}
            className=" inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none "
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          <div
            id={`${items.id}-dropdown`}
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow "
          >
            <ul
              className="py-2 text-sm text-gray-700 "
              aria-labelledby={`${items.id}-dropdown-button`}
            >
              <li>
                <Link
                  to={`editar/${items.id}`}
                  className=" text-blue-600 py-4 px-4 hover:underline"
                >
                  Editar Usuario
                </Link>
              </li>
            </ul>
            <div className="">
              <button
                onClick={() => startDesactivarUsuario(items,limit)}
                type="button"
                className="block py-2 px-4 text-sm text-start text-red-700 hover:bg-gray-100 w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

Usuarios.propTypes = {
  items: PropTypes.object,
};
