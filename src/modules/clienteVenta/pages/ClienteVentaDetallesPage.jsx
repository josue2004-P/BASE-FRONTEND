import { useState } from "react";
import { Header } from "../components/index.js";
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
  const [datos, setDatos] = useState({});

  const handleChange = (mes, año, valor) => {
    setDatos((prev) => ({
      ...prev,
      [mes]: {
        ...prev[mes],
        [año]: valor,
      },
    }));
  };

  const agregarAnio = () => {
    const ultimo = parseInt(años[años.length - 1], 10);
    setAnios([...años, (ultimo + 1).toString()]);
  };

  return (
    <section className="bg-gray-50  p-3 sm:p-5">
      <Header title="Detalles" ruta="Detalles Venta Cliente" />

      <section className=" mx-auto  mt-4 px-4 lg:px-12  ">
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 max-w-7xl">
          <div className="flex justify-between">
            <div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 ">
                Cliente: Pedro Pica Piedra
              </h2>
              <h2 className="mb-4 text-xl font-bold text-gray-900 ">
                No, Cuenta: 555098
              </h2>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              >
                Actalizar Datos
              </button>
            </div>
          </div>
          <div className="overflow-x-auto ">
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
                          value={datos[mes]?.[año] || ""}
                          onChange={(e) =>
                            handleChange(mes, año, e.target.value)
                          }
                        />
                      </td>
                    ))}
                       <td className="border border-gray-300 bg-gray-50"></td> {/* Celda vacía para alinear */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
}
