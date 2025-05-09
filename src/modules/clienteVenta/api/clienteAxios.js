import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

// Obtener variables de entorno
const { VITE_API_URL } = getEnvVariables();

// Instancia de Axios
export const clienteAxios = axios.create({
  baseURL: VITE_API_URL
});

// Interceptor para agregar token en las cabeceras
clienteAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  },
  (error) => {
    // Manejo de error al preparar request
    return Promise.reject(error);
  }
);
