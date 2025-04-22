import React, { useState } from "react";

const ListadoPerfiles = ({ items, onSeleccionChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    const nuevoValor = !checked;
    setChecked(nuevoValor);
    onSeleccionChange(items.id, nuevoValor);
  };

  return (
    <div className="p-3 bg-gray-300 rounded-md shadow-sm border flex items-center justify-between">
      <p>
        {items.nombre}
      </p>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckbox}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2 "
      />
    </div>
  );
};

export default ListadoPerfiles;
