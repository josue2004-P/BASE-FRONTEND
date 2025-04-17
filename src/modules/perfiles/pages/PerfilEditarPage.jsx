import { Header } from "../components"
import { Link } from "react-router-dom"

export default function PerfilEditarPage() {
  return (
    <section className="">
      <Header title="Editar Perfil" />

      <section className="max-w-2xl border border-gray-200 bg-gray-50 rounded-lg mt-4">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Editar Perfil
          </h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  placeholder="Escribe el nombre del pefil"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Descripción
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Escribe la descripción del perfil"
                ></textarea>
              </div>
            </div>
            <div className="lg:flex lg:gap-1">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
            >
              Agregar Perfil
            </button>
            <Link
              to={"/perfiles"}
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-red-800"
            >
              Cancelar
            </Link>
            </div>
          </form>
        </div>
      </section>
    </section>
  )
}
