import { Link } from "react-router-dom";
import { Header } from "../components/index.js";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { usePermisoStore } from "../hooks/usePermisoStore.js";

// Esquema de validación
const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),
  descripcion: Yup.string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .required("La descripción es obligatoria"),
});

export default function ClienteVentaCrearPage() {

  // const {startCrearPermisos} = usePermisoStore();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // startCrearPermisos(values)
    },
  });

  return (
    <section className="bg-gray-50  p-3 sm:p-5">
      <Header title="Crear Cliente" ruta="Crear Cliente"  />

      <section className=" mx-auto  mt-4 px-4 lg:px-12  ">
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 max-w-md">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Crear Cliente
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  No. Cuenta
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
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre Completo
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
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fecha de Creación:
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

            </div>

            <div className="lg:flex lg:gap-1">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              >
                Agregar Cliente
              </button>
              <Link
                to={"/clientes-ventas"}
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-red-800"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}
