// src/routes/AdminRoutes.jsx
import { Navigate, useRoutes } from 'react-router-dom';
import HomeAdminPage     from '../pages/HomeAdminPage';
import {UsuariosRoutes} from '../../usuario';
import {PermisosRoutes} from '../../permiso';
import {PerfilesRoutes} from '../../perfil';


export default function AdminRoutes() {
  // Todas las rutas aquí son relativas al punto donde montes <AdminRoutes/>
  const routes = [
    {
      children: [
        { index: true,               element: <HomeAdminPage /> },
        // NOTA el "/*" en usuarios: indica que debajo de /usuarios vienen rutas hijas
        { path: 'usuarios/*',        element: <UsuariosRoutes /> },
        { path: 'permisos/*',        element: <PermisosRoutes /> },
        { path: 'perfiles/*',        element: <PerfilesRoutes /> },
        { path: '*',                 element: <Navigate to='/' replace /> },
      ],
    },
  ];

  return useRoutes(routes);
}