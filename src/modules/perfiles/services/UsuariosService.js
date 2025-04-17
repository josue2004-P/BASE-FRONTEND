import { clienteAxios } from '../api/clienteAxios';
import { adaptarUsuarios } from '../adapter/UsuariosAdapter';

export const usuarioService = {

  obtenerUsuarios: async () => {
    try {
      const { data } = await clienteAxios.get('/usuarios');
      const usuarios= adaptarUsuarios(data.data);
      return usuarios;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al obtener los usuarios';
    }
  },
};
