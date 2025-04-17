import { clienteAxios } from '../api/clienteAxios';
import { adaptarPermisos } from '../adapter/permisosAdapter';

export const permisoService = {

  obtenerPermisos: async () => {
    try {
      const { data } = await clienteAxios.get('/permisos');
      const permisos = adaptarPermisos(data.data.permisos.permisos);
      return permisos
    } catch (error) {
      throw error?.response?.data?.message || 'Error al obtener los permisos';
    }
  },
};
