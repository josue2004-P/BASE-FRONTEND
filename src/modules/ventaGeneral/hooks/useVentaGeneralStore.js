import { useDispatch, useSelector } from "react-redux";
import { ventaGeneralService } from "../services/VentaGeneralService";
import Swal from "sweetalert2";

import {
  onLoadVentaGeneral,
  onLogoutVentaGeneral,
} from "../store/ventaGeneralSlice";

export const useVentaGeneralStore = () => {
  const { error, ventasGeneral, ventaGeneral, isLoadingVentaGeneral } =
    useSelector((state) => state.ventaGeneral);
  const dispatch = useDispatch();

  const startVentaGeneral = async (id) => {
    try {
      const data = await ventaGeneralService.obtenerVentaGeneral(id);
      dispatch(onLoadVentaGeneral(data));
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      // navigate("clientes-ventas");
    }
  };

  const startCrearVentaGeneral = async (data) => {
    try {
      const response = await ventaGeneralService.crearVentaGeneral(data);
      Swal.fire({
        title: response.message,
        icon: "success",
      }).then(() => {
        // Recargar la página después de que el usuario haga clic en "OK"
        window.location.reload();
      });
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      // navigate("clientes-ventas");
    }
  };

  const startOnLogoutVentaGeneral = (id) => {
    dispatch(onLogoutVentaGeneral(id));
  };

  return {
    //* Propiedades
    error,
    ventaGeneral,
    ventasGeneral,
    isLoadingVentaGeneral,
    //* Métodos
    startVentaGeneral,
    startOnLogoutVentaGeneral,
    startCrearVentaGeneral,
  };
};
