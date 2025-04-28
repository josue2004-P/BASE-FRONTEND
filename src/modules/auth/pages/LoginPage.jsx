import { useAuthStore } from "../hooks/useAuthStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AlertAuth } from "../components";

// Esquema de validación
const validationSchema = Yup.object({
  email: Yup.string()
    .required("El correo es obligatorio")
    .email("El correo debe ser válido"),
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
        {errorMessage !== undefined ? <AlertAuth mensaje={errorMessage} /> : ""}

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
              autoComplete="username"
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
              autoComplete="current-password"
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
