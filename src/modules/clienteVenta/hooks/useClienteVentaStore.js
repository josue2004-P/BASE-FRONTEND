import { useDispatch, useSelector } from "react-redux";
import { clienteVentaService } from "../services/ClienteVentaService";
import Swal from "sweetalert2";

import {
  onLoadClientes,
  onFiltrosClientes,
  onClearError,
  onSetError,
  onLogoutCliente,
  onLoadCliente,
} from "../store/clienteVentaSlice";

export const useClienteVentaStore = () => {
  const { filtros, error, clientes, cliente, isLoadingClientes } = useSelector(
    (state) => state.clienteVenta
  );
  const dispatch = useDispatch();

  const startClientes = async ({ noCuenta = "", page = 1, limit }) => {
    try {
      const { data, pageActual, totalPages, totalClientes } =
        await clienteVentaService.obtenerClientes({
          noCuenta,
          page,
          limit,
        });
      dispatch(onLoadClientes(data));
      dispatch(
        onFiltrosClientes({
          pageActual: pageActual,
          totalPages: totalPages,
          totalClientes: totalClientes,
        })
      );

      dispatch(onClearError());
    } catch (error) {
      dispatch(onSetError(error));
    }
  };

  const startCliente = async (id) => {
    try {
      const data = await clienteVentaService.obtenerCliente(id);
      dispatch(onLoadCliente(data));
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      // navigate("ususarios");
    }
  };

  const startCrearCliente = async (datos) => {
    try {

      const data = await clienteVentaService.crearCliente(datos); // Pasamos el formData al servicio
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      // navigate("/usuarios");
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
    }
  };

  const startActualizarCliente = async (id, datos) => {
    try {
      const data = await clienteVentaService.actualizarCliente(id, datos);
      Swal.fire({
        title: data.message,
        icon: "success",
      });
      startCliente(id);
    } catch (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      startClientes({ nombre: "" });
    }
  };

  const startDesactivarCliente = async (items, limit) => {
    const result = await Swal.fire({
      title: `¿Deseas eliminar el usuario ${items.nombreCompleto}?`,
      text: `Los datos ya no podrán ser recuperados`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar usuario.",
    });

    if (result.isConfirmed) {
      try {
        const data = await clienteVentaService.desactivarUsuario(items.id);
        Swal.fire({
          title: data.message || "Usuario eliminado correctamente.",
          icon: "success",
        });
        startClientes({ limit: limit });
      } catch (error) {
        Swal.fire({
          title: "Error al eliminar",
          text: error.message || "Ocurrió un problema al eliminar el usuario.",
          icon: "error",
        });
      }
    }
  };

  const startOnLogoutCliente = (id) => {
    dispatch(onLogoutCliente(id));
  };

  return {
    //* Propiedades
    clientes,
    cliente,
    isLoadingClientes,
    error,
    filtros,
    //* Métodos
    startClientes,
    startCliente,
    startOnLogoutCliente,
    startCrearCliente,
    startActualizarCliente,
    startDesactivarCliente,
  };
};
