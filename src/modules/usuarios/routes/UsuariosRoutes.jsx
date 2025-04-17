// src/routes/UsuariosRoutes.jsx
import { Navigate, useRoutes } from 'react-router-dom';
import UsuariosPage           from '../pages/UsuariosPage';

export default function UsuariosRoutes() {
  // Estas rutas son relativas a "…/usuarios/"
  const routes = [
    { index: true,              element: <UsuariosPage /> },              // GET /…/usuarios
    // { path: 'nuevo',            element: <NuevoUsuarioPage /> },         // GET /…/usuarios/nuevo
    // { path: 'editar/:id',       element: <EditarUsuarioPage /> },        // GET /…/usuarios/editar/123
    // cualquier otra URL bajo /usuarios → redirige a la lista
    { path: '*',                element: <Navigate to='.' replace /> },  // '.' es /…/usuarios
  ];

  return useRoutes(routes);
}