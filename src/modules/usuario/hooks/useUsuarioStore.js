import { useDispatch, useSelector } from "react-redux";
import { usuarioService } from "../services/UsuarioService";
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
  const { filtros, error, usuarios, usuario, isLoadingUsuarios } = useSelector(
    (state) => state.usuario
  );
  const dispatch = useDispatch();

  const startUsuarios = async ({ nombre = "", page = 1, limit }) => {
    try {
      const { data, pageActual, totalPages, totalUsuarios } =
        await usuarioService.obtenerUsuarios({
          nombre,
          page,
          limit,
        });
      dispatch(onLoadUsuarios(data));
      dispatch(
        onFiltrosUsuario({
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

  const startUsuario = async (id) => {
    try {
      const data = await usuarioService.obtenerUsuario(id);
      dispatch(onLoadUsuario(data));
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      // navigate("ususarios");
    }
  };

  const startCrearUsuario = async (datos) => {
    try {
      const formData = new FormData();

      // Añadir los campos normales del formulario
      formData.append("sNombre", datos.nombre);
      formData.append("sApellidoPaterno", datos.apellidoPaterno);
      formData.append("sApellidoMaterno", datos.apellidoMaterno);
      formData.append("sUsuario", datos.usuario);
      formData.append("sEmail", datos.email);
      formData.append("sPassword", datos.password);

      // Añadir la imagen
      if (datos.usuarioImagen) {
        formData.append("usuarioImagen", datos.usuarioImagen); // 'usuarioImagen' es el nombre del campo en el backend
      }

      const data = await usuarioService.crearUsuario(formData); // Pasamos el formData al servicio
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      // navigate("/usuarios");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startActualizarUsuario = async (id, datos) => {
    try {
      const formData = new FormData();

      // Añadir los campos normales del formulario
      formData.append("sNombre", datos.nombre);
      formData.append("sApellidoPaterno", datos.apellidoPaterno);
      formData.append("sApellidoMaterno", datos.apellidoMaterno);
      formData.append("sUsuario", datos.usuario);
      formData.append("sEmail", datos.email);
      formData.append("sPassword", datos.password);

      // Añadir la imagen
      if (datos.usuarioImagen) {
        formData.append("usuarioImagen", datos.usuarioImagen); // 'usuarioImagen' es el nombre del campo en el backend
      }

      const data = await usuarioService.actualizarUsuario(id, formData);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      startUsuario(id);
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      startUsuarios({ nombre: "" });
    }
  };

  const startDesactivarUsuario = async (items, limit) => {
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
        const data = await usuarioService.desactivarUsuario(items.id);
        Swal.fire({
          title: data.message || "Usuario eliminado correctamente.",
          icon: "success",
        });
        startUsuarios({ limit: limit });
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
    startDesactivarUsuario,
  };
};
