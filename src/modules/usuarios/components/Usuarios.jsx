import PropTypes from "prop-types";
import {formatearFechaHora} from "../helpers/formatearFechaHora"
import { Link } from "react-router-dom";
import { useUsuarioStore } from "../hooks/useUsuarioStore";

export default function Usuarios({ items }) {
    const { fechaFormateada } = formatearFechaHora(items.fechaCreacion);
      const { startEliminarUsuario } = useUsuarioStore();
    

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
      <td className="px-6 py-4">
        <div className="flex items-center">
          {!items.activo ? (
            <>  
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
              Activo
            </>
          ) : (
            <>
              <>
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                No Activo
              </>
            </>
          )}
        </div>
      </td>
      <td className="px-6 py-4 sm:flex gap-2">
        <Link
          to={`editar/${items.id}`}
          className="font-medium text-blue-600 hover:underline"
        >
          Editar Usuario
        </Link>
        <button
          onClick={() => startEliminarUsuario(items)}
          type="button"
          className="font-medium text-red-600 hover:underline"
        >
          Eliminar Usuario
        </button>
      </td>
    </tr>
  );
}

Usuarios.propTypes = {
  items: PropTypes.object,
};
