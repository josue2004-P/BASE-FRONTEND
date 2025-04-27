import { useAuthStore } from "../../auth/hooks/useAuthStore";

import { CiLogout } from "react-icons/ci";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";


export default function SidebarNavbar() {
  const { startLogout } = useAuthStore();

    useEffect(() => {
      initFlowbite(); // Inicializa dropdowns, tooltips, modals, etc.
    }, []);
  

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  Buenas Practicas
                </span>
              </a>
            </div>
            {/* <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900  " role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate "
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 mt-12 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-xl"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={() => {
                  startLogout();
                }}
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <CiLogout
                  className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  size={25}
                />
                <span className="ms-3">Cerrar Sesión</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
