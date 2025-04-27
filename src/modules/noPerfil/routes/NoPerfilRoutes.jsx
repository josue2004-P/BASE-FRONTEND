import { Navigate, useRoutes } from "react-router-dom";
import { NoPerfilPage } from "../pages";
import Layout from "../layouts/Layout";

export default function UsuariosRoutes() {
  const routes = [
    {
      element: <Layout />,
      children: [
        { index: true, element: <NoPerfilPage /> }, // GET /…/
        { path: "*", element: <Navigate to="." replace /> }, // '.' es /…/
      ],
    },
  ];

  return useRoutes(routes);
}
