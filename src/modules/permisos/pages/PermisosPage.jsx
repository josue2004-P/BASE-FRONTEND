import { usePermisoStore } from "../hooks/usePermisoStore";
import { useEffect, useState } from "react";
import { Header, Permisos, SkeletonPermisos } from "../components";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function PermisosPage() {
  const { filtros, error, permisos, isLoadingPermisos, startPermisos } =
    usePermisoStore();

  const [nombreFiltro, setNombreFiltro] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    startPermisos({ nombre: "", page, limit }); // carga inicial
  }, [page]);

  const handleSearch = () => {
    setPage(1); // reinicia a la primera página al hacer búsqueda
    startPermisos({ nombre: nombreFiltro, page: 1, limit });
  };


  if (isLoadingPermisos) {
    <section className="bg-gray-50 p-3 sm:p-5">
      <SkeletonPermisos />
    </section>;
  }

  return (
    <>
      <section className="bg-gray-50  p-3 sm:p-5  ">
        <Header title="Listado de permisos" />

        <div className="mx-auto  mt-4 px-4 lg:px-12">
          <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0 lg:space-x-4 p-4">
              <div className="w-full  md:w-1/2 my-auto">
                <form className="flex items-center h-full">
                  <label className="sr-only">Search</label>
                  <div className="relative w-full lg:w-fit xl:w-[22rem] 2xl:w-100  ">
                    <div className="absolute text-gray-800 inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                      <IoIosSearch size={20} />
                    </div>
                    <input
                      type="text"
                      id="table-search-permission"
                      className=" py-2 ps-10 text-sm  text-gray-900 border border-gray-300 rounded-lg w-full  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Buscar permisos"
                      value={nombreFiltro}
                      onChange={(e) => setNombreFiltro(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                      }}
                      onClick={() => {
                        setNombreFiltro("");
                        setPage(1);
                        startPermisos({ nombre: "", page: 1, limit });
                      }}
                    />
                  </div>
                </form>
              </div>

              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link
                  to={"crear"}
                  className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  <svg
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Agregar Permiso
                </Link>
                {/* <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                    type="button"
                  >
                    <svg
                      className="-ml-1 mr-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    Actions
                  </button>
                  <div
                    id="actionsDropdown"
                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 "
                      aria-labelledby="actionsDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 "
                        >
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  <button
                    id="filterDropdownButton"
                    data-dropdown-toggle="filterDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-4 w-4 mr-2 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Filter
                    <svg
                      className="-mr-1 ml-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </button>
                  <div
                    id="filterDropdown"
                    className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow "
                  >
                    <h6 className="mb-3 text-sm font-medium text-gray-900 ">
                      Choose brand
                    </h6>
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton"
                    >
                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500   focus:ring-2 "
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900">
                          Apple (56)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                        El permiso que ingresaste no está registrado en el
                        sistema
                      </td>
                    </tr>
                  )}

                  {permisos.length === 0 && !error ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center text-orange-600 bg-red-100 p-2 rounded"
                      >
                        {error}
                      </td>
                    </tr>
                  ) : (
                    permisos.map((item, index) => (
                      <Permisos key={index} items={item} />
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500">
                Mostrando
                <span className="font-semibold text-gray-900 ml-1">
                  {permisos.length}
                </span>
                <span className="mx-1">de</span>
                <span className="font-semibold text-gray-900 ">
                  {filtros.totalUsuarios}
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <span className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                    {page}
                  </span>
                </li>

                <li>
                  <button
                    disabled={page === filtros.totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
