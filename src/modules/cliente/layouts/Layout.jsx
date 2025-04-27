import { Outlet, useLocation, matchPath } from "react-router-dom";

import useDocumentTitle from "../libs/useDocumentTitle";
import { SidebarNavbar, Footer } from "../components";

export default function Layout() {
  const routeTitles = {
    "/usuarios": "Usuarios",
    "/permisos": "Permisos",
    "/perfiles": "Perfiles",
    "/perfiles/crear": "Crear Perfil",
    "/perfiles/editar/:id": "Editar Perfil",
  };

  const location = useLocation();

  let currentTitle = "Panel Admin";

  // Buscar coincidencia con la ruta
  for (const path in routeTitles) {
    if (matchPath({ path, end: true }, location.pathname)) {
      currentTitle = routeTitles[path];
      break;
    }
  }

  useDocumentTitle(`Base | ${currentTitle}`);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SidebarNavbar />
        <main className="flex-1 pt-16 sm:pt-10 sm:ml-60 bg-gray-50 md:relative">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
