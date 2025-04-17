import { usePermisoStore } from "../hooks/usePermisoStore";
import { useEffect } from "react";
import { Header, Permisos } from "../components";

export default function PermisosPage() {
  const { permisos, isLoadingPermisos, startPermisos } = usePermisoStore();

  if (isLoadingPermisos) {
    <h2 className="text-2xl font-semibold">CARGANDO</h2>;
  }

  useEffect(() => {
    startPermisos();
  }, []);

  return (
    <>
      <section className="">
        <Header title="Permisos" />

        <div className="mt-5 relative overflow-x-auto  sm:rounded-lg">
          <div className="flex items-center justify-end flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
            <label className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Buscar por permisos"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre 
                </th>
                <th scope="col" className="px-6 py-3">
                  Descripción
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
              {permisos.map((item, index) => (
                <Permisos key={index} items={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
