import { clienteAxios } from '../api/clienteAxios';
import { adaptarPerfiles } from '../adapter/PerfilesAdapter';

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
};
