import { useDispatch, useSelector } from "react-redux";
import { authService } from '../services/AuthService';
import Swal from "sweetalert2";

import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/authSlice";
import { onLogoutPerfil } from "../../perfil/store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ sEmail, sPassword }) => {
    dispatch(onChecking());
    try {

      const data = await authService.login({ sEmail, sPassword });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({
        id: data.id,
        perfil: data.perfil
      }));

    } catch (error) {
      dispatch(onLogout(error));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };
  
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {

      const data = await authService.renewToken();

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        onLogin({
          id: data.id,
          perfil: data.perfil
        })
      );
    } catch (error) {
      dispatch(onLogout(error));
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    Swal.fire({
      title: "¿Deseas cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesion.",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        dispatch(onLogout());
        dispatch(onLogoutPerfil());
      }
    });
  };


  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    startLogout,
    checkAuthToken,
    startLogin,
 
  };
};
