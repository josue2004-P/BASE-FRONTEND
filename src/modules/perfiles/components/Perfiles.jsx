import PropTypes from "prop-types";
import {formatearFechaHora} from "../helpers/formatearFechaHora"

export default function Usuarios({ items }) {

    const { fechaFormateada } = formatearFechaHora(items.fechaCreacion);

  return (
    <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
      <td className="px-6  py-4 text-gray-900 whitespace-nowrap ">{items.id}</td>
      <td className="px-6 py-4">{items.nombre}</td>
      <td className="px-6 py-4">{items.descripcion}</td>
      <td className="px-6 py-4">{fechaFormateada}</td>
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
