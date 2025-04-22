// src/routes/UsuariosRoutes.jsx
import { Navigate, useRoutes } from "react-router-dom";
import { UsuariosPage, UsuarioCrearPage, UsuarioEditarPage } from "../pages";

export default function UsuariosRoutes() {
  // Estas rutas son relativas a "…/usuarios/"
  const routes = [
    { index: true, element: <UsuariosPage /> }, // GET /…/usuarios
    { path: "crear", element: <UsuarioCrearPage /> }, // GET /…/usuarios/nuevo
    { path: "editar/:id", element: <UsuarioEditarPage /> }, // GET /…/usuarios/editar/123
    { path: "*", element: <Navigate to="." replace /> }, // '.' es /…/usuarios
  ];

  return useRoutes(routes);
}
