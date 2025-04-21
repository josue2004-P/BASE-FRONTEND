import PropTypes from "prop-types";
import {formatearFechaHora} from "../helpers/formatearFechaHora"
import { Link } from "react-router-dom";
import {usePerfilStore} from "../hooks/usePerfilStore"

export default function Perfiles({ items }) {

    const { fechaFormateada } = formatearFechaHora(items.fechaCreacion);
    const {startEliminarPerfil} = usePerfilStore()
  return (
    <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
      <td className="px-6  py-4 text-gray-900 whitespace-nowrap ">{items.id}</td>
      <td className="px-6 py-4">{items.nombre}</td>
      <td className="px-6 py-4">{items.descripcion}</td>
      <td className="px-6 py-4">{fechaFormateada}</td>
      <td className="px-6 py-4 sm:flex gap-2">
        <Link
          to={`editar/${items.id}`}
          type="button"
          className="font-medium text-blue-600  hover:underline"
        >
          Editar Perfil
        </Link>
        <button
        onClick={()=>startEliminarPerfil(items)}
          type="button"
          className="font-medium text-red-600  hover:underline"
        >
          Eliminar Perfil
        </button>
      </td>
    </tr>
  );
}

Perfiles.propTypes = {
  items: PropTypes.object,
};
