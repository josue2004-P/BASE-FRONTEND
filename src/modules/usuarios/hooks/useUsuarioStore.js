import { useDispatch, useSelector } from "react-redux";
import { usuarioService } from "../services/UsuariosService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  onLoadUsuarios,
  onLogoutUsuario,
  onLoadUsuario,
  onFiltrosUsuario,
  onClearError,
  onSetError,
} from "../store/usuarioSlice";

export const useUsuarioStore = () => {
  const { filtros,error, usuarios, usuario, isLoadingUsuarios } = useSelector(
    (state) => state.usuario
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startUsuarios = async ({ nombre = "", page = 1, limit  }) => {
    try {
      const {data,pageActual,totalPages,totalUsuarios} = await usuarioService.obtenerUsuarios({
        nombre,
        page,
        limit,
      });
      dispatch(onLoadUsuarios(data));
      dispatch(onFiltrosUsuario({
        pageActual:pageActual,
        totalPages:totalPages,
        totalUsuarios:totalUsuarios
      }));

      dispatch(onClearError());
    } catch (error) {
      dispatch(onSetError(error));
    }
  };

  const startUsuario = async (id) => {
    try {
      const data = await usuarioService.obtenerUsuario(id);
      dispatch(onLoadUsuario(data));
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      navigate("ususarios");
    }
  };

  const startCrearUsuario = async (datos) => {
    try {
      const data = await usuarioService.crearUsuario(datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      navigate("usuarios");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startActualizarUsuario = async (id, datos) => {
    try {
      const data = await usuarioService.actualizarUsuario(id, datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      navigate("usuarios");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      startUsuarios();
    }
  };

  const startEliminarUsuario = async (items) => {

    const result = await Swal.fire({
      title: `¿Deseas eliminar el usuario ${items.nombreCompleto}?`,
      text: `Los datos ya no podrán ser recuperados`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar usuario.",
    });

    if (result.isConfirmed) {
      try {
        const data = await usuarioService.eliminarUsuario(items.id);
        Swal.fire({
          title: data.message || "Perfil eliminado correctamente.",
          icon: "success",
        });
        startUsuarios({ nombre: "" });
      } catch (error) {
        Swal.fire({
          title: "Error al eliminar",
          text: error.message || "Ocurrió un problema al eliminar el usuario.",
          icon: "error",
        });
      }
    }
  };

  const startOnLogoutUsuario = (id) => {
    dispatch(onLogoutUsuario(id));
  };

  return {
    //* Propiedades
    usuarios,
    usuario,
    isLoadingUsuarios,
    error,
    filtros,
    //* Métodos
    startUsuarios,
    startUsuario,
    startOnLogoutUsuario,
    startCrearUsuario,
    startActualizarUsuario,
    startEliminarUsuario,
  };
};
