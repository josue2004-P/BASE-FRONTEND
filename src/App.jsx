import { Route, Routes,Navigate} from "react-router-dom";
import { useEffect } from "react";
import  {useAuthStore}  from "./modules/auth/hooks/useAuthStore";

import {  PublicPage } from "./modules/public";
import {LoginPage} from "./modules/auth";
import {HomeAdminPage} from "./modules/admin"
import {HomeClientePage} from "./modules/cliente"


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
      ) : status === "authenticated" && user.perfil == "ADMINISTRADOR"  ? (
        // SUPER ADMIN
        <>
          <Route path="/" element={<HomeAdminPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : status === "authenticated" && user.perfil == "CLIENTE"  ? (
        // SUPER ADMIN
        <>
          <Route path="/" element={<HomeClientePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )
      : (
        <></>
      )}
    </Routes>
  );
}

