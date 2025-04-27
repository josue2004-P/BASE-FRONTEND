import { Outlet, useLocation, matchPath } from "react-router-dom";

import useDocumentTitle from "../libs/useDocumentTitle";
import { Footer } from "../components";

export default function Layout() {
  let currentTitle = "Login";

  useDocumentTitle(`Base | ${currentTitle}`);

  return (
    <>
      <div className="flex flex-col min-h-screen  bg-gray-50">
        <main className="flex-1 flex justify-center items-center w-full bg-gray-50">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
