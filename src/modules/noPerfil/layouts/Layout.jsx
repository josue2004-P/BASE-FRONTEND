import { Outlet, useLocation, matchPath } from "react-router-dom";

import useDocumentTitle from "../libs/useDocumentTitle";
import { SidebarNavbar, Footer } from "../components";

export default function Layout() {

  let currentTitle = "Sin Perfil";

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
