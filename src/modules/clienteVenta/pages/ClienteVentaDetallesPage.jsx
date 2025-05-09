import { useState } from "react";
import { Header } from "../components/index.js";
import { useFormik } from "formik";

export default function ClienteVentaDetallesPage() {
  const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];

  const [años, setAnios] = useState(["2023", "2024", "2025"]);

  const agregarAnio = () => {
    const ultimo = parseInt(años[años.length - 1], 10);
    setAnios([...años, (ultimo + 1).toString()]);
  };

  const datosIniciales = {};

  meses.forEach((mes) => {
    datosIniciales[mes] = {};

    años.forEach((anio) => {
      datosIniciales[mes][anio] = ""; // valor por defecto
    });
  });
  
  const formik = useFormik({
    initialValues: {
      nNoCuenta06Clientes: 12212,
      datos: datosIniciales,
    },
    onSubmit: (values) => {
      console.log("✅ Datos bien estructurados:", values);
    },
  });

  const handleChange = (mes, año, valor) => {
    formik.setFieldValue(`datos.${mes}.${año}`, valor);
  };

  return (
    <section className="bg-gray-50 p-3 sm:p-5">
      <Header title="Detalles" ruta="Detalles Venta Cliente" />

      <form onSubmit={formik.handleSubmit}>
        <section className="mx-auto mt-4 px-4 lg:px-12">
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 max-w-7xl">
            <div className="flex justify-between">
              <div>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Cliente: Pedro Pica Piedra
                </h2>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  No. Cuenta: 555098
                </h2>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                >
                  Actualizar Datos
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table-auto border border-gray-300 rounded-lg shadow-sm bg-white w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left">
                      Mes
                    </th>
                    {años.map((año) => (
                      <th
                        key={año}
                        className="px-4 py-2 border border-gray-300 bg-gray-100 text-center"
                      >
                        {año}
                      </th>
                    ))}
                    <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center">
                      <button
                        type="button"
                        onClick={agregarAnio}
                        className="ml-2 px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                        title="Agregar año"
                      >
                        +
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meses.map((mes) => (
                    <tr key={mes}>
                      <td className="px-4 py-2 border border-gray-300 font-semibold">
                        {mes}
                      </td>
                      {años.map((año) => (
                        <td
                          key={año}
                          className="px-4 py-2 border border-gray-300"
                        >
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-200 rounded text-sm"
                            placeholder="-"
                            name={`datos.${mes}.${año}`}
                            value={formik.values.datos?.[mes]?.[año] || ""}
                            onChange={(e) =>
                              handleChange(mes, año, e.target.value)
                            }
                          />
                        </td>
                      ))}
                      <td className="border border-gray-300 bg-gray-50"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}
