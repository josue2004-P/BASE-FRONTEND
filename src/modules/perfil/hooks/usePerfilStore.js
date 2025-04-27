import { useDispatch, useSelector } from "react-redux";
import { perfilService } from "../services/PerfilService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  onLoadPerfiles,
  onLoadPerfil,
  onLogoutPerfil,
  onClearError,
  onSetError,
  onLoadPerfilesUsuario,
  onFiltrosPerfil
} from "../store/perfilSlice";

export const usePerfilStore = () => {
  const {
    filtros,
    perfilesUsuario,
    error,
    perfiles,
    perfil,
    isLoadingPerfiles,
  } = useSelector((state) => state.perfil);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startPerfiles = async ({ nombre = "", page = 1, limit = 10 }) => {
    try {
      const {data,pageActual,totalPages,totalUsuarios} = await perfilService.obtenerPerfiles({
        nombre,
        page,
        limit,
      });
      dispatch(onLoadPerfiles(data));
      dispatch(
        onFiltrosPerfil({
          pageActual: pageActual,
          totalPages: totalPages,
          totalUsuarios: totalUsuarios,
        })
      );
      dispatch(onClearError());
    } catch (error) {
      dispatch(onSetError(error));
    }
  };

  const startPerfil = async (id) => {
    try {
      const data = await perfilService.obtenerPerfil(id);
      dispatch(onLoadPerfil(data));
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      navigate("perfiles");
    }
  };

  const startPerfilesUsuario = async (id) => {
    try {
      const data = await perfilService.obtenerPerfilesUsuario(id);
      dispatch(onLoadPerfilesUsuario(data));
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      navigate("perfiles");
    }
  };

  const startCrearPerfiles = async (datos) => {
    try {
      const data = await perfilService.crearPerfil(datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      navigate("perfiles");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startActualizarPerfil = async (id, datos) => {
    try {
      const data = await perfilService.actualizarPerfil(id, datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      navigate("perfiles");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      startPerfiles();
    }
  };

  const startEliminarPerfil = async (items) => {
    const result = await Swal.fire({
      title: `¿Deseas eliminar el perfil ${items.nombre}?`,
      text: `Los datos ya no podrán ser recuperados`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar perfil.",
    });

    if (result.isConfirmed) {
      try {
        const data = await perfilService.eliminarPerfil(items.id);
        Swal.fire({
          title: data.message || "Perfil eliminado correctamente.",
          icon: "success",
        });
        startPerfiles({ nombre: "" });
      } catch (error) {
        Swal.fire({
          title: "Error al eliminar",
          text: error.message || "Ocurrió un problema al eliminar el perfil.",
          icon: "error",
        });
      }
    }
  };

  const startAsignarPerfilesUsuario = async (datos) => {
    try {
      const data = await perfilService.asignarPerfilesUsuario(datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startOnLogoutPerfil = (id) => {
    dispatch(onLogoutPerfil(id));
  };

  return {
    //* Propiedades
    filtros,
    perfilesUsuario,
    error,
    perfiles,
    perfil,
    isLoadingPerfiles,
    //* Métodos
    startPerfil,
    startPerfiles,
    startCrearPerfiles,
    startActualizarPerfil,
    startEliminarPerfil,
    startOnLogoutPerfil,
    startAsignarPerfilesUsuario,
    startPerfilesUsuario,
  };
};
