import PropTypes from "prop-types";
import {formatearFechaHora} from "../helpers/formatearFechaHora"

export default function Usuarios({ items }) {

    const { fechaFormateada } = formatearFechaHora(items.fechaCreacion);

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
      <td className="px-6 py-4">
        <a
          href="#"
          type="button"
          className="font-medium text-blue-600  hover:underline"
        >
          Edit user
        </a>
      </td>
    </tr>
  );
}

Usuarios.propTypes = {
  items: PropTypes.object,
};
