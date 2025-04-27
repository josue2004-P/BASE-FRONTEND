import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage } from "../pages";
import Layout from "../layouts/Layout";

export default function AuthRoutes() {
  const routes = [
    {
      element: <Layout />,
      children: [
        { index: true, element: <LoginPage /> }, // GET /…/
        { path: "*", element: <Navigate to="." replace /> }, // '.' es /…/
      ],
    },
  ];

  return useRoutes(routes);
}
