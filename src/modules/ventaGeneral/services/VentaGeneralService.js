import { clienteAxios } from "../api/clienteAxios";

export const ventaGeneralService = {
  obtenerVentaGeneral: async (id) => {
    try {
      const data  = await clienteAxios.get(`/ventaGeneral/${id}`);
      return data.data.data;
    } catch (error) {
      throw error?.response?.data?.message || "Error al obtener la venta general";
    }
  },
};