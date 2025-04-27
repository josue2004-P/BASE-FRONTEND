import { useDispatch, useSelector } from "react-redux";
import { permisoService } from "../services/permisoService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  onLoadPermisos,
  onLogoutPermiso,
  onLoadPermiso,
  onClearError,
  onSetError,
  onFiltrosPermiso,
} from "../store/permisoSlice";

export const usePermisoStore = () => {
  const {filtros, error, permisos, permiso, isLoadingPermisos } = useSelector(
    (state) => state.permiso
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startPermisos = async ({ nombre = "", page = 1, limit = 10 }) => {
    try {
      const { data, pageActual, totalPages, totalUsuarios } =await permisoService.obtenerPermisos({ nombre, page, limit });
      dispatch(onLoadPermisos(data));
      dispatch(
        onFiltrosPermiso({
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

  const startPermiso = async (id) => {
    try {
      const data = await permisoService.obtenerPermiso(id);
      dispatch(onLoadPermiso(data));
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      navigate("permisos");
    }
  };

  const startCrearPermisos = async (datos) => {
    try {
      const data = await permisoService.crearPermiso(datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      navigate("permisos");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startActualizarPermiso = async (id, datos) => {
    try {
      const data = await permisoService.actualizarPermiso(id, datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      navigate("permisos");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      startPermisos();
    }
  };

  const startEliminarPermiso = async (items) => {
    const result = await Swal.fire({
      title: `¿Deseas eliminar el permiso ${items.nombre}?`,
      text: `Los datos ya no podrán ser recuperados`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar permiso.",
    });

    if (result.isConfirmed) {
      try {
        const data = await permisoService.eliminarPermiso(items.id);
        Swal.fire({
          title: data.message || "Permiso eliminado correctamente.",
          icon: "success",
        });
        startPermisos({ nombre: "" });
      } catch (error) {
        Swal.fire({
          title: "Error al eliminar",
          text: error.message || "Ocurrió un problema al eliminar el permiso.",
          icon: "error",
        });
      }
    }
  };

  const startOnLogoutPermiso = (id) => {
    dispatch(onLogoutPermiso(id));
  };

  return {
    //* Propiedades
    filtros,
    permisos,
    permiso,
    error,
    isLoadingPermisos,
    //* Métodos
    startPermisos,
    startPermiso,
    startCrearPermisos,
    startActualizarPermiso,
    startOnLogoutPermiso,
    startEliminarPermiso,
  };
};
