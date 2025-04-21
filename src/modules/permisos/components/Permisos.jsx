import PropTypes from "prop-types";
import { formatearFechaHora } from "../helpers/formatearFechaHora";
import { Link } from "react-router-dom";
import {usePermisoStore} from "../hooks/usePermisoStore"


export default function Permisos({ items }) {
  const { fechaFormateada } = formatearFechaHora(items.fechaCreacion);
    const {startEliminarPermiso} = usePermisoStore()

  return (
    <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
      <td className="px-6 py-4  text-gray-900 whitespace-nowrap ">{items.id}</td>
      <td className="px-6 py-4">{items.nombre}</td>
      <td className="px-6 py-4">{items.descripcion}</td>
      <td className="px-6 py-4">{fechaFormateada}</td>
      <td className="px-6 py-4 sm:flex gap-2">
        <Link
          to={`editar/${items.id}`}
          type="button"
          className="font-medium text-blue-600  hover:underline"
        >
          Editar Permiso
        </Link>
        <button
        onClick={()=>startEliminarPermiso(items)}
          type="button"
          className="font-medium text-red-600  hover:underline"
        >
          Eliminar Permiso
        </button>
      </td>
    </tr>
  );
}

Permisos.propTypes = {
  items: PropTypes.object,
};
