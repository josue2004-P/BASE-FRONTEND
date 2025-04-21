import { clienteAxios } from '../api/clienteAxios';
import { 
  adaptarPermisos,
  adaptarCrearActualizarPermisos,
  adaptarPermiso
 } from '../adapter/permisosAdapter';

export const permisoService = {

  obtenerPermisos: async ({nombre,page,limit}) => {
    try {
      const { data } = await clienteAxios.get(`/permisos?sNombre=${nombre}&page=${page}&limit=${limit}`);
      const permisos = adaptarPermisos(data.data.perfiles);
      
      return {
        permisos,
      };
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener los permisos";
    }
  },
    obtenerPermiso: async (id) => {
      try {
        const { data } = await clienteAxios.get(`/permisos/${id}`);
        const permiso = adaptarPermiso(data.data);
        return permiso;
      } catch (error) {
        throw error?.response?.data?.message || "Error al obtener el permiso";
      }
    },  crearPermiso: async (datos) => {
        try {
          const permiso = adaptarCrearActualizarPermisos(datos);
          const data = await clienteAxios.post("/permisos", permiso);
          return data.data;
        } catch (error) {
          throw error?.response?.data?.message || "Error al crear los permisos";
        }
      },
      actualizarPermiso: async (id, datos) => {
        try {
          const permiso = adaptarCrearActualizarPermisos(datos);
          const data = await clienteAxios.put(`/permisos/${id}`, permiso);
          return data.data;
        } catch (error) {
          throw error?.response?.data?.message || "Error al actualizar el permiso";
        }
      },
      eliminarPermiso: async (id) => {
        try {
          const data = await clienteAxios.delete(`/permisos/${id}`);
          return data.data;
        } catch (error) {
          throw error?.response?.data?.message || "Error al eliminar el permiso";
        }
      },
};
