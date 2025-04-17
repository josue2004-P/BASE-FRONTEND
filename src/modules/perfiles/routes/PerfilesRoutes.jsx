// src/routes/UsuariosRoutes.jsx
import { Navigate, useRoutes } from 'react-router-dom';
import PerfilesPage from '../pages/PerfilesPage';

export default function PerfilesRoutes() {
  // Estas rutas son relativas a "…/usuarios/"
  const routes = [
    { index: true,              element: <PerfilesPage /> },              // GET /…/usuarios
    // { path: 'nuevo',            element: <NuevoUsuarioPage /> },         // GET /…/usuarios/nuevo
    // { path: 'editar/:id',       element: <EditarUsuarioPage /> },        // GET /…/usuarios/editar/123
    // cualquier otra URL bajo /usuarios → redirige a la lista
    { path: '*',                element: <Navigate to='.' replace /> },  // '.' es /…/usuarios
  ];

  return useRoutes(routes);
}