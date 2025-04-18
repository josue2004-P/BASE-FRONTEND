import { clienteAxios } from '../api/clienteAxios';
import { adaptarPerfiles,adaptarCrearPerfiles } from '../adapter/PerfilesAdapter';

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
      const perfil = adaptarPerfiles(data.data);
      return perfil;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al obtener el perfil';
    }
  },
  crearPerfil: async (datos) => {
    try {
      const perfil = adaptarCrearPerfiles(datos);
      const data  = await clienteAxios.post('/perfiles',perfil);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al crear los perfiles';
    }
  }

};
