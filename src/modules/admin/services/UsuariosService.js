import { clienteAxios } from '../api/clienteAxios';

export const usuarioService = {

  obtenerUsuarios: async () => {
    try {
      const { data } = await clienteAxios.get('/usuarios');
      return data;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al obtener los usuarios';
    }
  },
};
