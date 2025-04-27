// src/routes/AdminRoutes.jsx
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout"; // opcional: tu layout con sidebar/header
import {HomeClientePage} from "../pages";

export default function AdminRoutes() {
  // Todas las rutas aquí son relativas al punto donde montes <AdminRoutes/>
  const routes = [
    {
      // Puedes envolver todo en un layout si quieres
      element: <Layout />,
      children: [
        { index: true, element: <HomeClientePage /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ];

  return useRoutes(routes);
}
