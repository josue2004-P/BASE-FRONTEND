// src/routes/AdminRoutes.jsx
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout"; // opcional: tu layout con sidebar/header
import {HomeClientePage} from "../pages";

export default function ClienteRoutes() {
  // Todas las rutas aquí son relativas al punto donde montes <AdminRoutes/>
  const routes = [
    {
      // Aquí podrías poner un layout si quieres, como element: <Layout /> (pero ya lo usaste afuera)
      children: [
        { index: true, element: <HomeClientePage/> },
        { path: "clientes/*", element: <h1 className="mt-10">Clientes Page</h1> },
        { path: "crear/*", element: <h1 className="mt-10">Clientes Page</h1> },
        { path: "editar/:*", element: <h1 className="mt-10">Clientes Page</h1> },

        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ];
  
  return useRoutes(routes);
}
