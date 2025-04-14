// equipos/services/EquipoService.js
const API_URL = "https://fakestoreapi.com/products"; // Cambia esta URL por la de tu API real

const ProductosService = {
  async getProductos() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al obtener los equipos");
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      return [];
    }
  },
};

export default ProductosService;
