// src/routes/UsuariosRoutes.jsx
import { Navigate, useRoutes } from 'react-router-dom';
import {PermisosPage,
  PermisoCrearPage,
  PermisoEditarPage
} from '../pages';

export default function PermisosRoutes() {
  // Estas rutas son relativas a "…/usuarios/"
  const routes = [
    { index: true,              element: <PermisosPage /> },              // GET /…/usuarios
    { path: 'crear',            element: <PermisoCrearPage /> },         // GET /…/usuarios/nuevo
    { path: 'editar/:id',       element: <PermisoEditarPage /> },        // GET /…/usuarios/editar/123
    // cualquier otra URL bajo /usuarios → redirige a la lista
    { path: '*',                element: <Navigate to='.' replace /> },  // '.' es /…/usuarios
  ];

  return useRoutes(routes);
}