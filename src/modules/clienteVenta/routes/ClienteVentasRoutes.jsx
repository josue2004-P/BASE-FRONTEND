// src/routes/AdminRoutes.jsx
import { Navigate, useRoutes } from "react-router-dom";
import {
  HomeClienteVentasPage,
  ClienteVentaCrearPage,
  ClienteVentaEditarPage,
  ClienteVentaDetallesPage
} from "../pages";

export default function ClienteRoutes() {
  // Todas las rutas aquí son relativas al punto donde montes <AdminRoutes/>
  const routes = [
    {
      // Aquí podrías poner un layout si quieres, como element: <Layout /> (pero ya lo usaste afuera)
      children: [
        { index: true, element: <HomeClienteVentasPage /> }, //DASHBOARD DE CLIENTES
        { path: "crear", element: <ClienteVentaCrearPage /> },
        { path: "detalles/:id", element: <ClienteVentaDetallesPage /> },
        { path: "editar/:id", element: <ClienteVentaEditarPage /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ];

  return useRoutes(routes);
}
