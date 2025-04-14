import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startLoadingProductos, onLoadProductos, onLoadProductosError } from "../store/productoSlice";
import ProductosService from "../services/ProductosService";

export const useProductoStore = () => {
  const dispatch = useDispatch();
  const { productos, isLoading, error } = useSelector((state) => state.producto);

  const fetchProductos = async () => {
    dispatch(startLoadingProductos());

    try {
      const data = await ProductosService.getProductos();
      dispatch(onLoadProductos(data));
    } catch (error) {
      dispatch(onLoadProductosError(error.message));
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return { 
    productos, 
    isLoading, 
    error };
};

