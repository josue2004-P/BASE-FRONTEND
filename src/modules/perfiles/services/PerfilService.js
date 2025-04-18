import { clienteAxios } from '../api/clienteAxios';
import { adaptarPerfiles,adaptarCrearActualizarPerfiles,adaptarPerfil } from '../adapter/PerfilesAdapter';

export const perfilService = {

  obtenerPerfiles: async () => {
    try {
      const { data } = await clienteAxios.get('/perfiles');
      const perfiles = adaptarPerfiles(data.data);
      return perfiles;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al obtener los perfiles';
    }
  },
  obtenerPerfil: async (id) => {
    try {
      const { data } = await clienteAxios.get(`/perfiles/${id}`);
      const perfil = adaptarPerfil(data.data);
      return perfil;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al obtener el perfil';
    }
  },
  crearPerfil: async (datos) => {
    try {
      const perfil = adaptarCrearActualizarPerfiles(datos);
      const data  = await clienteAxios.post('/perfiles',perfil);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al crear los perfiles';
    }
  },
  actualizarPerfil: async (id,datos) => {
    try {
      const perfil = adaptarCrearActualizarPerfiles(datos);
      const data  = await clienteAxios.put(`/perfiles/${id}`,perfil);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al actualizar el perfil';
    }
  },
  eliminarPerfil: async (id) => {
    try {
      const data  = await clienteAxios.delete(`/perfiles/${id}`);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al eliminar el perfil';
    }
  }

};
