import { Link } from "react-router-dom";
import { Header } from "../components/index.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUsuarioStore } from "../hooks/useUsuarioStore.js";

// Esquema de validación
const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),
  apellidoPaterno: Yup.string()
    .min(3, "El Apellido Paterno debe tener al menos 3 caracteres")
    .required("El Apellido Paterno es obligatorio"),
  apellidoMaterno: Yup.string()
    .min(3, "El Apellido Materno debe tener al menos 3 caracteres")
    .required("El Apellido Materno es obligatorio"),
  usuario: Yup.string()
    .min(3, "El usuario debe tener al menos 3 caracteres")
    .required("El usuario es obligatorio"),
  email: Yup.string().required("El correo es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatorio"),
});

export default function UsuarioCrearPage() {
  const { startCrearUsuario } = useUsuarioStore();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      usuario: "",
      email: "",
      password: "",
      usuarioImagen: null, // Campo para la imagen
    },
    validationSchema,
    onSubmit: (values) => {
      startCrearUsuario(values);
    },
  });

  return (
    <section className="bg-gray-50  p-3 sm:p-5">
      <Header title="Crear Usuario" ruta={"Crear Perfil"} />

      <section className=" mx-auto  mt-4 px-4 lg:px-12  ">
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 max-w-xl  ">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Crear Usuario
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* NOMBRE */}
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
                  placeholder="Escribe el nombre del usuario"
                />
                {formik.touched.nombre && formik.errors.nombre && (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.nombre}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2  grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* APELLIDO PATERNO */}
                <div className="">
                  <label
                    htmlFor="apellidoPaterno"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Apellido Paterno
                  </label>
                  <input
                    type="text"
                    name="apellidoPaterno"
                    id="apellidoPaterno"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apellidoPaterno}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Escribe el apellido paterno"
                  />

                  {formik.touched.apellidoPaterno &&
                    formik.errors.apellidoPaterno && (
                      <div className="text-red-600 text-sm mt-1">
                        {formik.errors.apellidoPaterno}
                      </div>
                    )}
                </div>
                {/* APELIIDO MATERNO */}
                <div className="">
                  <label
                    htmlFor="apellidoMaterno"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Apellido Materno
                  </label>
                  <input
                    type="text"
                    name="apellidoMaterno"
                    id="apellidoMaterno"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apellidoMaterno}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Escribe el apellido materno"
                  />
                  {formik.touched.apellidoMaterno &&
                    formik.errors.apellidoMaterno && (
                      <div className="text-red-600 text-sm mt-1">
                        {formik.errors.apellidoMaterno}
                      </div>
                    )}
                </div>
              </div>
              {/* EMAIL */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Escribe el email"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2  grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* USUARIO */}
                <div className="">
                  <label
                    htmlFor="usuario"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Usuario
                  </label>
                  <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.usuario}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Escribe el usuario"
                  />
                  {formik.touched.usuario && formik.errors.usuario && (
                    <div className="text-red-600 text-sm mt-1">
                      {formik.errors.usuario}
                    </div>
                  )}
                </div>

                {/* CONTRASEÑA */}
                <div className="">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Escribe la contraseña"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-600 text-sm mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:flex lg:gap-1">
              <button
                type="submit"
                className="inline-flex items-center w-full md:w-fit md:mr-2 lg:mr-0   px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center justify-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              >
                Agregar Usuario
              </button>
              <Link
                to={"/usuarios"}
                className="inline-flex items-center px-5 py-2.5 mt-4 md:mt-6 text-sm font-medium text-center text-white bg-red-700 justify-center w-full md:w-fit rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-red-800"
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
