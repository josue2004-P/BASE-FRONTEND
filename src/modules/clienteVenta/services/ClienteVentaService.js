import { clienteAxios } from "../api/clienteAxios";
import {
  adaptarClientes,
  adaptarCrearCliente,
  adaptarCliente,
  adaptarActualizarCliente,
} from "../adapter/clienteVentaAdapter";

export const clienteVentaService = {
  obtenerClientes: async ({ noCuenta, page, limit }) => {
    try {
      const { data } = await clienteAxios.get(
        `/clientes?nNoCuenta06Clientes=${noCuenta}&page=${page}&limit=${limit}`
      );
      const clientes = adaptarClientes(data.data.clientes);

      return {
        data: clientes,
        pageActual: data.data.page,
        totalClientes: data.data.total,
        totalPages: data.data.totalPages,
      };
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener los clientes";
    }
  },
  obtenerCliente: async (id) => {
    try {
      const { data } = await clienteAxios.get(`/clientes/${id}`);
      const cliente = adaptarCliente(data.data);
      return cliente;
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener el cliente";
    }
  },
  crearCliente: async (cliente) => {
    // Recibe formData
    try {
      const createCliente = adaptarCrearCliente(cliente);

      const data = await clienteAxios.post("/clientes", createCliente);
      return data.data;
    } catch (error) {
      console.log(error);
      throw error?.response?.data?.message || "Error al crear el cliente";
    }
  },
  actualizarCliente: async (id, cliente) => {
    try {
      const updateCliente = adaptarActualizarCliente(cliente);

      const data = await clienteAxios.put(`/clientes/${id}`, updateCliente);
      return data.data;
    } catch (error) {
      console.log(error)
      throw error?.response?.data?.message || "Error al actualizar el cliente";
    }
  },
  desactivarCliente: async (id) => {
    try {
      const data = await clienteAxios.put(`/clientes/${id}/desactivar`);
      return data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al desactivar el cliente";
    }
  },
};
