import { Link, useParams } from "react-router-dom";
import { Header } from "../components/index.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useClienteVentaStore } from "../hooks/useClienteVentaStore.js";
import { useEffect } from "react";

// Esquema de validación
const validationSchema = Yup.object({
  noCuenta: Yup.number()
    .typeError("El número de cuenta debe ser numérico")
    .required("El número de cuenta es obligatorio")
    .positive("Debe ser un número positivo")
    .integer("Debe ser un número entero"),
  nombreCliente: Yup.string().required("El nombre del cliente es obligatorio"),
  apellidoClientePaterno: Yup.string().required(
    "El apellido paterno del cliente es obligatoria"
  ),
  apellidoClienteMaterno: Yup.string().required(
    "El apellido materno del cliente es obligatoria"
  ),
});

export default function ClienteVentaEditarPage() {
  const { id } = useParams();

  const { cliente, isLoadingClientes, startCliente, startActualizarCliente } =
    useClienteVentaStore();

  useEffect(() => {
    if (id) {
      startCliente(id);
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      noCuenta: cliente?.id || "",
      nombreCliente: cliente?.nombre || "",
      apellidoClientePaterno: cliente?.apellidoPaterno || "",
      apellidoClienteMaterno: cliente?.apellidoMaterno || "",
    },
    enableReinitialize: true, // <-- esto permite que los valores se actualicen
    validationSchema,
    onSubmit: (values) => {
      const { noCuenta, ...datos } = values; // elimina noCuenta
      startActualizarCliente(id,datos);
    },
  });

  if (isLoadingClientes || !cliente?.nombre) {
    return (
      <section className="bg-gray-50 p-3 sm:p-5 ">
        <h2 className="text-2xl font-semibold">CARGANDO...</h2>
      </section>
    );
  }
  return (
    <section className="bg-gray-50  p-3 sm:p-5">
      <Header title="Editar Cliente" ruta="Editar Cliente" />

      <section className=" mx-auto  mt-4 px-4 lg:px-12  ">
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 max-w-md">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Editar Cliente
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="noCuenta"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  No. Cuenta
                </label>
                <input
                  type="number"
                  name="noCuenta"
                  id="noCuenta"
                  readOnly
                  disabled
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.noCuenta}
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Escribe el numero de cuenta"
                />
                {formik.touched.noCuenta && formik.errors.noCuenta && (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.noCuenta}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="nombreCliente"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombreCliente"
                  id="nombreCliente"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nombreCliente}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Escribe el nombre del cliente"
                />
                {formik.touched.nombreCliente &&
                  formik.errors.nombreCliente && (
                    <div className="text-red-600 text-sm mt-1">
                      {formik.errors.nombreCliente}
                    </div>
                  )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="apellidoClientePaterno"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  name="apellidoClientePaterno"
                  id="apellidoClientePaterno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.apellidoClientePaterno}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Escribe el apellido paterno del cliente"
                />
                {formik.touched.apellidoClientePaterno &&
                  formik.errors.apellidoClientePaterno && (
                    <div className="text-red-600 text-sm mt-1">
                      {formik.errors.apellidoClientePaterno}
                    </div>
                  )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="apellidoClienteMaterno"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Materno
                </label>
                <input
                  type="text"
                  name="apellidoClienteMaterno"
                  id="apellidoClienteMaterno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.apellidoClienteMaterno}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Escribe el apellido materno del cliente"
                />
                {formik.touched.apellidoClienteMaterno &&
                  formik.errors.apellidoClienteMaterno && (
                    <div className="text-red-600 text-sm mt-1">
                      {formik.errors.apellidoClienteMaterno}
                    </div>
                  )}
              </div>
            </div>

            <div className="lg:flex lg:gap-1">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              >
                Actualizar Cliente
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
