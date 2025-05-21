import { clienteAxios } from "../api/clienteAxios";

export const ventaGeneralService = {
  obtenerVentaGeneral: async (id) => {
    try {
      const data = await clienteAxios.get(`/ventaGeneral/${id}`);
      console.log(data.data.data)
      return data.data.data;
      
    } catch (error) {
      throw (
        error?.response?.data?.message || "Error al obtener la venta general"
      );
    }
  },
  crearVentaGeneral: async (data) => {
    try {
      const response = await clienteAxios.post(`/ventaGeneral`, data);
      return response.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al crear la venta general";
    }
  },
};
