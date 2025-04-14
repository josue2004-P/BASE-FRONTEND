import { clienteAxios } from '../api/clienteAxios';

export const authService = {

  login: async ({ sEmail, sPassword }) => {
    try {
      const { data } = await clienteAxios.post('/usuarios', { sEmail, sPassword });
      return data;
    } catch (error) {
      throw error?.response?.data?.message || 'Error al iniciar sesión';
    }
  },

  register: async (userData) => {
    try {
      const { data } = await clienteAxios.post('/auth/register', userData);
      return data;
    } catch (error) {
      throw error?.response?.data?.msg || 'Error al registrar usuario';
    }
  },

  renewToken: async () => {
    try {
      const { data } = await clienteAxios.get('/usuarios/renew');
      return data;
    } catch (error) {
      throw error?.response?.data?.msg || 'Token inválido';
    }
  },

};
