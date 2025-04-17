import { Outlet, useLocation } from "react-router-dom";

import useDocumentTitle from "../libs/useDocumentTitle";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  const location = useLocation();

  // Definir títulos por ruta
  const routeTitles = {
    "/usuarios": "Usuarios",
  };

  // Buscar título basado en la ruta actual
  const currentTitle = routeTitles[location.pathname] || "Panel Admin";

  useDocumentTitle(`Base | ${currentTitle}`);

  return (
    <>
      <Sidebar />
      <main className="p-4 sm:ml-64">
        <Outlet />
      </main>
    </>
  );
}
