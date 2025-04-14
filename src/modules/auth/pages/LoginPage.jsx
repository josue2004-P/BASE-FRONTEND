import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore } from "../hooks/useAuthStore";
import { useFormik } from "formik";

export default function LoginPage() {
  const { startLogin, errorMessage } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      startLogin({ sEmail: values.email, sPassword: values.password });
    },
  });

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="h-screen bg-gray-200">
      <section className="h-full w-full ">
        <div className="flex justify-center items-center h-full">
          <div className="shadow-gray-300 shadow-lg w-11/12 md:w-7/12 lg:grid lg:grid-cols-2 lg:w-7/12 2xl:w-5/12 rounded-xl lg:h-[25rem]">
            <div className="hidden lg:flex justify-center items-center">
              <img className="w-[15rem]" src="../logo-angeles.png" alt="" />
            </div>

            <div className="p-6 space-y-4 md:space-y-6 lg:space-y-3 sm:p-8 relative flex justify-center flex-col ">
              <h1 className=" font-bold  text-gray-500 text-4xl  text-center">
                Login
              </h1>
              <form
                className="space-y-4 md:space-y-6 lg:space-y-5 "
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-[#16351b]">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#004b93] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Iniciar Sesion
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
