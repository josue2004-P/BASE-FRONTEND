import { useUsuarioStore } from "../hooks/useUsuarioStore";
import { useEffect, useState } from "react";
import { Header, Usuarios } from "../components";
import { Link } from "react-router-dom";
import { IoIosClose, IoIosSearch } from "react-icons/io";


export default function HomeAdminPage() {
  const {error, usuarios, isLoadingUsuarios, startUsuarios } = useUsuarioStore();

  const [nombreFiltro, setNombreFiltro] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    startUsuarios({ nombre: "", page, limit });
  }, [page]);

  const handleSearch = () => {
    setPage(1); // reinicia a la primera página al hacer búsqueda
    startUsuarios({ nombre: nombreFiltro, page: 1, limit });
  };

  if (isLoadingUsuarios) {
    <h2 className="text-2xl font-semibold">CARGANDO</h2>;
  }

  return (
    <>
      <section className="overflow-hidden">
        <Header title="" />

        <div className=" flex items-center  sm:justify-end flex-column md:flex-row flex-wrap space-y-1 sm:space-y-4 md:space-y-0 py-4 ">
          <div className="relative w-full lg:w-fit  ">
            <div className="absolute text-gray-800 inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoIosSearch size={20} />
            </div>
            <input
              type="text"
              id="table-search-users"
              className=" py-2 ps-10 text-sm  text-gray-900 border border-gray-300 rounded-lg w-full sm:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Buscar usuarios"
              value={nombreFiltro}
              onChange={(e) => setNombreFiltro(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              onClick={() => {
                setNombreFiltro("");
                setPage(1);
                startUsuarios({ nombre: "", page: 1, limit });
              }}
            />
            <div
              onClick={() => {
                startUsuarios({ nombre: "" });
                setNombreFiltro("");
              }}
              className="text-red-500 absolute inset-y-0 end-0 flex items-center pe-3 "
            >
              <IoIosClose size={30} />
            </div>
          </div>

          <Link
            to={"crear"}
            className="py-1.5 px-3 sm:py-2.5 sm:px-5 sm:ml-2 sm:mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Agregar usuario
          </Link>
        </div>

        <div className="w-full relative h-[35rem] overflow-auto mt-5">
          <table className="w-full sm:rounded-lg text-sm text-left rtl:text-right text-gray-500">
            <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre Usuario
                </th>
                <th scope="col" className="px-6 py-3">
                  USUARIO
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Creación
                </th>
                <th scope="col" className="px-6 py-3">
                  Estatus
                </th>
                <th scope="col" className="px-6 py-3">
                  Acción
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
                    El usuario que ingresaste no está registrado en el sistema
                  </td>
                </tr>
              )}

              {usuarios.length === 0 && !error ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center text-orange-600 bg-red-100 p-2 rounded"
                  >
                    {error}
                  </td>
                </tr>
              ) : (
                usuarios.map((item, index) => (
                  <Usuarios key={index} items={item} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className=" flex justify-between items-center mt-4 px-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Anterior
            </button>

            <span className="text-sm">Página {page}</span>

            <button
              disabled={usuarios.length < limit}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
      </section>
    </>
  );
}
