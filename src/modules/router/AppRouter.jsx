import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../auth/hooks/useAuthStore";

import { HomeClientePage } from "../cliente";

import AuthRoutes  from "../auth/routes/AuthRoutes";
import AdminRoutes from "../admin/routes/AdminRoutes";
import NoPerfilRoutes from "../noPerfil/routes/NoPerfilRoutes";

import { Loading } from "./components";

export default function AppRouter() {
  const { user, status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <Loading />;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/*" element={<AuthRoutes/>} />
        </>
      ) : status === "authenticated" &&
        user.perfil.includes("ADMINISTRADOR") ? (
        // ADMINISTRADOR
        <Route path="/*" element={<AdminRoutes />} />
      ) : status === "authenticated" && user.perfil.includes("CLIENTE") ? (
        // CLIENTE
        <>
          <Route path="/" element={<HomeClientePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        // USUARIOS SIN PERFIL
        <>
          <Route path="/*" element={<NoPerfilRoutes />} />
        </>
      )}
    </Routes>
  );
}
