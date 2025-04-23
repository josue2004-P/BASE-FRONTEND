import { Route, Routes,Navigate} from "react-router-dom";
import { useEffect } from "react";
import  {useAuthStore}  from "./modules/auth/hooks/useAuthStore";

import {  PublicPage } from "./modules/public";
import {LoginPage} from "./modules/auth";
import {HomeClientePage} from "./modules/cliente"

import AdminRoutes from "./modules/admin/routes/AdminRoutes";


export default function App() {
  const { user,status,checkAuthToken } = useAuthStore();
// const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

useEffect(() => {
  checkAuthToken();
}, []);

if (status === 'checking') {
  return <h3>Loading...</h3>;
}

  return (
    <Routes>
      {status === "not-authenticated"  ? (
        <> 
          <Route path="/" element={<PublicPage/>} />

          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />

        </>
      ) : status === "authenticated" && user.perfil.includes("ADMINISTRADOR") ? (
        // ADMINISTRADOR
        <Route path="/*" element={<AdminRoutes />} />

      ) : status === "authenticated" && user.perfil.includes("CLIENTE")  ? (
        // CLIENTE
        <>
          <Route path="/" element={<HomeClientePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )
      : (
        null
      )}
    </Routes>
  );
}

