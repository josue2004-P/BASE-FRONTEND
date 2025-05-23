import { clienteAxios } from "../api/clienteAxios";
import {
  adaptarPerfiles,
  adaptarCrearActualizarPerfiles,
  adaptarPerfil,
  adaptarAsignarPerfilesUsuario,
  adaptarPerfilesUsuario
} from "../adapter/PerfilesAdapter";

export const perfilService = {
  obtenerPerfiles: async ({nombre,page,limit}) => {
    try {
      const { data } = await clienteAxios.get(`/perfiles?sNombre=${nombre}&page=${page}&limit=${limit}`);
      const perfiles = adaptarPerfiles(data.data.perfiles);
      
      return {
        data:perfiles,
        pageActual:data.data.page,
        totalUsuarios:data.data.total,
        totalPages:data.data.totalPages
      };
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener los perfiles";
    }
  },
  obtenerPerfil: async (id) => {
    try {
      const { data } = await clienteAxios.get(`/perfiles/${id}`);
      const perfil = adaptarPerfil(data.data);
      return perfil;
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener el perfil";
    }
  },
  crearPerfil: async (datos) => {
    try {
      const perfil = adaptarCrearActualizarPerfiles(datos);
      const data = await clienteAxios.post("/perfiles", perfil);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al crear los perfiles";
    }
  },
  actualizarPerfil: async (id, datos) => {
    try {
      const perfil = adaptarCrearActualizarPerfiles(datos);
      const data = await clienteAxios.put(`/perfiles/${id}`, perfil);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al actualizar el perfil";
    }
  },
  eliminarPerfil: async (id) => {
    try {
      const data = await clienteAxios.delete(`/perfiles/${id}`);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al eliminar el perfil";
    }
  },
  asignarPerfilesUsuario: async (datos) => {
    try {
      const perfilesUsuarios = adaptarAsignarPerfilesUsuario(datos);
      const data = await clienteAxios.post(`/perfilesUsuarios`, perfilesUsuarios);
      return data.data
    } catch (error) {
      throw error?.response?.data?.message || "Error al asignar perfil";
    }
  },
  obtenerPerfilesUsuario: async (id) => {
    try {
      const data = await clienteAxios.get(`/perfilesUsuarios/${id}`);
      const perfilesUsuarios = adaptarPerfilesUsuario(data.data.data);
      return perfilesUsuarios
    } catch (error) {
      console.log(error)
      throw error?.response?.data?.message || "Error al obtener perfiles";
    }
  },
};
