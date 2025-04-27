import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore } from "../hooks/useAuthStore";
import { useFormik } from "formik";
import * as Yup from "yup";

// Esquema de validación
const validationSchema = Yup.object({
  email: Yup.string().required("El correo es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export default function LoginPage() {
  const { startLogin, errorMessage } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      startLogin({ sEmail: values.email, sPassword: values.password });
    },
  });

  return (
    <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 w-[22rem] shadow-xl mx-4 sm:mx-0">
      <h2 className="mb-4 text-xl font-bold text-gray-900 ">Iniciar Sesión</h2>

      <form onSubmit={formik.handleSubmit}>
        {errorMessage !== undefined ? (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <svg
              className="shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Hubo un problema al Iniciar Sesión!</span>{" "}
              {errorMessage}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Correo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="example@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="descripcion"
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
              placeholder="••••••••"
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
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}
