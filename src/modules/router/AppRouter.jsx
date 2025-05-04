import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../auth/hooks/useAuthStore";

import ClienteRoutes from "../cliente/routes/ClienteRoutes";

import Layout from "./Layouts/Layout";

import AuthRoutes from "../auth/routes/AuthRoutes";
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
          <Route path="/*" element={<AuthRoutes />} />
        </>
      ) : status === "authenticated" &&
        user.perfil.includes("ADMINISTRADOR") ? (
        // ADMINISTRADOR
        <Route element={<Layout />}>
          <Route path="/*" element={<AdminRoutes />} />
        </Route>
      ) : status === "authenticated" && user.perfil.includes("CLIENTE") ? (
        // CLIENTE
        <Route element={<Layout />}>
          <Route path="/*" element={<ClienteRoutes />} />
        </Route>
      ) : (
        // USUARIOS SIN PERFIL
        <>
          <Route path="/*" element={<NoPerfilRoutes />} />
        </>
      )}
    </Routes>
  );
}
