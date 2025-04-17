// src/routes/AdminRoutes.jsx
import { Navigate, useRoutes } from 'react-router-dom';
import Layout       from '../layouts/Layout';       // opcional: tu layout con sidebar/header
import HomeAdminPage     from '../pages/HomeAdminPage';
import UsuariosRoutes from '../../usuarios/routes/UsuariosRoutes';

export default function AdminRoutes() {
  // Todas las rutas aquí son relativas al punto donde montes <AdminRoutes/>
  const routes = [
    {
      // Puedes envolver todo en un layout si quieres
      element: <Layout/>,
      children: [
        { index: true,               element: <HomeAdminPage /> },
        // NOTA el "/*" en usuarios: indica que debajo de /usuarios vienen rutas hijas
        { path: 'usuarios/*',        element: <UsuariosRoutes /> },
        { path: '*',                 element: <Navigate to='/' replace /> },
      ],
    },
  ];

  return useRoutes(routes);
}