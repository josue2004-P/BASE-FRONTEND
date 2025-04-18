import { usePerfilStore } from "../hooks/usePerfilStore";
import { useEffect } from "react";
import { Header, Perfiles } from "../components";
import { Link } from "react-router-dom";

export default function PerfilesPage() {
  const { perfiles, isLoadingPerfiles, startPerfiles } = usePerfilStore();

  if (isLoadingPerfiles) {
    <h2 className="text-2xl font-semibold">CARGANDO</h2>;
  }

  useEffect(() => {
    startPerfiles();
  }, []);

  return (
    <>
      <section className="">
        <Header title="" />

        <div className="mt-5 max-w-4xl relative overflow-x-auto  sm:rounded-lg">
          <div className="flex items-center justify-end flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
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
                className="block py-2 ps-10 text-sm  text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Buscar usuarios"
              />
            </div>

              <Link to={"crear"} className="py-2.5 px-5 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Agregar Usuario</Link>
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
              {perfiles.map((item, index) => (
                <Perfiles key={index} items={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
