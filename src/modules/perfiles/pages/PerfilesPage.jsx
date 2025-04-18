import { usePerfilStore } from "../hooks/usePerfilStore";
import { useEffect, useState } from "react";
import { Header, Perfiles } from "../components";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function PerfilesPage() {
  const { error, perfiles, isLoadingPerfiles, startPerfiles } =
    usePerfilStore();

  const [nombreFiltro, setNombreFiltro] = useState("");
  if (isLoadingPerfiles) {
    <h2 className="text-2xl font-semibold">CARGANDO</h2>;
  }

  useEffect(() => {
    startPerfiles({ nombre: "" }); // carga inicial
  }, []);

  return (
    <>
      <section className="">
        <Header title="" />

        <div className="mt-5 max-w-4xl relative overflow-x-auto  sm:rounded-lg">
          <div className="flex items-center justify-end flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
            <div className="relative">
              <div className="absolute text-gray-800 inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoIosSearch size={20} />
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block py-2 z-0 ps-10 text-sm  text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Buscar usuarios"
                value={nombreFiltro}
                onChange={(e) => setNombreFiltro(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    startPerfiles({ nombre: nombreFiltro });
                  }
                }}
              />
              <div
                onClick={() => {
                  startPerfiles({ nombre: "" });
                  setNombreFiltro("");
                }}
                className="text-red-500 absolute inset-y-0 end-0 flex items-center pe-3  z-10"
              >
                <IoIosClose size={30} />
              </div>
            </div>

            <Link
              to={"crear"}
              className="py-2.5 px-5 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Agregar Usuario
            </Link>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre Perfil
                </th>
                <th scope="col" className="px-6 py-3">
                  Descripcion
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Creación
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {error && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center text-red-600 bg-red-100 p-2 rounded"
                  >
                    El perfil que ingresaste no esta registrado
                  </td>
                </tr>
              )}

              {perfiles.length === 0 && !error ? (
                <tr>
                  <td> {error}</td>
                </tr>
              ) : (
                perfiles.map((item, index) => (
                  <Perfiles key={index} items={item} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
