import { useDispatch, useSelector } from "react-redux";
import {
  onToogleSidebar,
  onOpenProductoUpdateModal,
  onCloseProductoUpdateModal,
  onOpenProductosPedidoModal,
  onCloseProductosPedidoModal,
  onToogleNavbar,
  onToogleFilter
} from "../store/uiSlice";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const {
    isSidebarOpen,
    isNavbarOpen,
    isFilterOpen,
    isProductoUpdateModalOpen,
    isProductoPedidosModalOpen,

  } = useSelector((state) => state.ui);

  // SIDEBAR
  const toogleSidebar = () => {
    dispatch(onToogleSidebar());
  };

  // FILTER
  const toogleFilter = () => {
    dispatch(onToogleFilter());
  };

  // NAVBAR
  const toogleNavbar = () => {
    dispatch(onToogleNavbar());
  };

  // MODAL UPDATE EQUIPO
  const openProductoUpdateModal = () => {
    dispatch( onOpenProductoUpdateModal());
  };
  const closeProductoUpdateModal = () => {
    dispatch( onCloseProductoUpdateModal());
  };

    // MODAL PEDIDOS PRODUCTOS
    const openProductosPedidosModal = () => {
      dispatch( onOpenProductosPedidoModal());
    };
    const closeProductosPedidosModal = () => {
      dispatch( onCloseProductosPedidoModal());
    };

  return {
    isSidebarOpen,
    isFilterOpen,
    isNavbarOpen,
    isProductoUpdateModalOpen,
    isProductoPedidosModalOpen,

    openProductoUpdateModal,
    closeProductoUpdateModal,
    
    // MODAL PRODUCTO PEDIDOS
    openProductosPedidosModal,
    closeProductosPedidosModal,

    toogleSidebar,
    toogleNavbar,
    toogleFilter
  };
};
