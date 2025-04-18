import { Header } from "../components"
import { Link } from "react-router-dom"
import { usePerfilStore } from "../hooks/usePerfilStore"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import convertirAFormatoLocal from "../helpers/convertirAFormatoLocal";

// Esquema de validación
const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),
  descripcion: Yup.string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .required("La descripción es obligatoria"),
});

export default function PerfilEditarPage() {
  const { id } = useParams();
  const { perfil, startPerfil,startOnLogoutPerfil,startActualizarPerfil, isLoadingPerfiles } = usePerfilStore();

  useEffect(() => {
    startPerfil(id);
  }, [id]);

  const formik = useFormik({
    initialValues: {
      id: perfil?.id || '',
      nombre: perfil?.nombre || '',
      descripcion: perfil?.descripcion || '',
      fechaCreacion: perfil?.fechaCreacion
      ? convertirAFormatoLocal(perfil.fechaCreacion)
      : '',
    },
    enableReinitialize: true, // 🔑 permite que se reinicialicen los valores al cambiar perfil
    validationSchema,
    onSubmit: (values) => {
      startActualizarPerfil(id, values)
    },
  });

  if (isLoadingPerfiles || !perfil?.nombre) {
    return <h2 className="text-2xl font-semibold">CARGANDO...</h2>;
  }

  return (
    <section className="">
      <Header title="Editar Perfil" />
      <section className="max-w-lg border border-gray-200 bg-gray-50 rounded-lg mt-4">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Editar Perfil
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Id
                </label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  disabled
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.id}
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Escribe el id del perfil"
                />
                {formik.touched.id && formik.errors.id && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.id}</div>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nombre}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Escribe el nombre del perfil"
                />
                {formik.touched.nombre && formik.errors.nombre && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.nombre}</div>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="descripcion"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Escribe la descripción del perfil"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.descripcion}
                />
                {formik.touched.descripcion && formik.errors.descripcion && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.descripcion}</div>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="descripcion"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fecha Creacioin
                </label>
                <input
                  id="fechaCreacion"
                  name="fechaCreacion"
                  type="datetime-local"
                  disabled
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Ingresa la fecha de creación"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fechaCreacion}
                />
              </div>
            </div>

            <div className="lg:flex lg:gap-1">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              >
                Actualizar Perfil
              </button>
              <Link
                to={"/perfiles"}
                onClick={()=>startOnLogoutPerfil(id)}
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-red-800"
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
