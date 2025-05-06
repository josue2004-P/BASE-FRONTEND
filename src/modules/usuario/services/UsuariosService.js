import { clienteAxios } from "../api/clienteAxios";
import {
  adaptarUsuarios,
  adaptarUsuario,
} from "../adapter/UsuariosAdapter";

export const usuarioService = {
  obtenerUsuarios: async ({ nombre, page, limit }) => {
    try {
      const { data } = await clienteAxios.get(
        `/usuarios?sNombre=${nombre}&page=${page}&limit=${limit}`
      );
      const usuarios = adaptarUsuarios(data.data.usuarios);
      return {
        data: usuarios,
        pageActual: data.data.page,
        totalUsuarios: data.data.total,
        totalPages: data.data.totalPages,
      };
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener los usuarios";
    }
  },
  obtenerUsuario: async (id) => {
    try {
      const { data } = await clienteAxios.get(`/usuarios/${id}`);
      const usuario = adaptarUsuario(data.data);
      return usuario;
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener el usuario";
    }
  },
  crearUsuario: async (formData) => {
    // Recibe formData
    try {
      const data = await clienteAxios.post("/usuarios", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Especificamos que estamos enviando datos multipart
        },
      });
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al crear el usuario";
    }
  },
  actualizarUsuario: async (id, formData) => {
    try {
      const data = await clienteAxios.put(`/usuarios/${id}`, formData,{
        headers: {
          "Content-Type": "multipart/form-data", // Especificamos que estamos enviando datos multipart
        },
      });
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al actualizar el usuario";
    }
  },
  desactivarUsuario: async (id) => {
    try {
      const data = await clienteAxios.put(`/usuarios/${id}/desactivar`);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al eliminar el usuario";
    }
  },
};
