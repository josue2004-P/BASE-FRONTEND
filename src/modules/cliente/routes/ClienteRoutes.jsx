// src/routes/AdminRoutes.jsx
import { Navigate, useRoutes } from "react-router-dom";
import {HomeClientePage} from "../pages";
import { ClienteVentasRoutes } from "../../clienteVenta";

export default function ClienteRoutes() {
  // Todas las rutas aquí son relativas al punto donde montes <AdminRoutes/>
  const routes = [
    {
      // Aquí podrías poner un layout si quieres, como element: <Layout /> (pero ya lo usaste afuera)
      children: [
        { index: true, element: <HomeClientePage/> }, //DASHBOARD DE CLIENTES
        { path: "clientes-ventas/*", element:<ClienteVentasRoutes />},
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ];
  
  return useRoutes(routes);
}
