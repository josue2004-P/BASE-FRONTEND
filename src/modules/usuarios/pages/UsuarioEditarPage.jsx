import { Header, ListadoPerfiles } from "../components";
import { Link } from "react-router-dom";
import { useUsuarioStore } from "../hooks/useUsuarioStore";
import { usePerfilStore } from "../../perfiles/hooks/usePerfilStore";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

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

export default function UsuarioEditarPage() {
  const { id } = useParams();

  const {
    usuario,
    startUsuario,
    startOnLogoutUsuario,
    startActualizarUsuario,
    isLoadingUsuarios,
  } = useUsuarioStore();

  const {
    perfiles,
    perfilesUsuario,
    isLoadingPerfiles,
    startPerfilesUsuario,
    startAsignarPerfilesUsuario,
    startPerfiles,
  } = usePerfilStore();

  const [seleccionados, setSeleccionados] = useState([]);

  const manejarSeleccion = (idPerfil, valor) => {
    setSeleccionados((prev) =>
      valor ? [...prev, idPerfil] : prev.filter((id) => id !== idPerfil)
    );
  };

  const handleObtenerSeleccionados = () => {
    const data = {
      idUsuario: usuario.id,
      idPerfiles: seleccionados,
    };
    startAsignarPerfilesUsuario(data);
  };

  useEffect(() => {
    if (id) {
      startUsuario(id);
      startPerfilesUsuario(id);
      startPerfiles({ nombre: "", page: 1, limit: 100 });
    }
  }, [id]);

  useEffect(() => {
      const ids = perfilesUsuario.map((p) => p.idPerfil);
      setSeleccionados(ids);
    
  }, [perfilesUsuario]);

  const formik = useFormik({
    initialValues: {
      id: usuario?.id || "",
      nombre: usuario?.nombre || "",
      apellidoPaterno: usuario?.apellidoMaterno || "",
      apellidoMaterno: usuario?.apellidoPaterno || "",
      usuario: usuario?.usuario || "",
      email: usuario?.email || "",
      password: usuario?.password || "",
    },
    enableReinitialize: true, // 🔑 permite que se reinicialicen los valores al cambiar permiso
    validationSchema,
    onSubmit: (values) => {
      startActualizarUsuario(id, values);
    },
  });

  if (isLoadingPerfiles || isLoadingUsuarios || !usuario?.nombre) {
    return <h2 className="text-2xl font-semibold">CARGANDO...</h2>;
  }

  return (
    <section className="">
      <Header title="Editar Perfil" ruta="Editar Perfil" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        <section className=" border border-gray-200 bg-gray-50 rounded-lg mt-4">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900 ">
              Editar Permiso
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
                {/* APELLIDO PATERNO */}
                <div className="sm:col-span-2">
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
                <div className="sm:col-span-2">
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
                {/* USUARIO */}
                <div className="sm:col-span-2">
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

                {/* CONTRASEÑA */}
                <div className="sm:col-span-2">
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

              <div className="lg:flex lg:gap-1">
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                >
                  Actualizar Usuario
                </button>
                <Link
                  to={"/usuarios"}
                  onClick={() => startOnLogoutUsuario(id)}
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-red-800"
                >
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </section>
        <div className="py-2 px-4 lg:py-8 border border-gray-200 bg-gray-50 rounded-lg mt-4 h-fit">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Asignar Perfil
          </h2>
          <div className="flex flex-col gap-3">
            {perfiles.map((items, key) => (
              <ListadoPerfiles
                items={items}
                key={key}
                checked={seleccionados.includes(items.id)}
                onSeleccionChange={manejarSeleccion}
              />
            ))}
          </div>
          <button
            onClick={handleObtenerSeleccionados}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Asignar Perfiles
          </button>
        </div>
      </div>
    </section>
  );
}
