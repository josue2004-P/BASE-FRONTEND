import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ListadoPerfiles = ({ items, onSeleccionChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckbox = () => {
    const nuevoValor = !isChecked;
    setIsChecked(nuevoValor);
    onSeleccionChange(items.id, nuevoValor);
  };

  return (
    <div className=" rounded-md  flex items-center gap-2 ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
        className="w-4 h-4 text-blue-600 bg-gray-50 border border-gray-400 rounded-sm focus:ring-blue-500 focus:ring-2 "
      />
      <p className="text-xs">{items.nombre}</p>
    </div>
  );
};

export default ListadoPerfiles;

ListadoPerfiles.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
  checked: PropTypes.bool,
  onSeleccionChange: PropTypes.func.isRequired,

};
