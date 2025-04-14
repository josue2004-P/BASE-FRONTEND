import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    //TOOGLE NAVBAR
    isSidebarOpen: false,

    //TOOGLE FILTER
    isFilterOpen: false,

    //NAVBAR
    isNavbarOpen: false,

    // UPDATE PRODCUTO
    isProductoUpdateModalOpen: false,

    // MODAL PRODUCTOS PEDIDO
    isProductoPedidosModalOpen: false,
  },
  reducers: {
    onToogleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    // FILTER
    onToogleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },

    // NAVBAR
    onToogleNavbar: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },

    // PRODUCTO
    onOpenProductoUpdateModal: (state) => {
      state.isProductoUpdateModalOpen = true;
    },
    onCloseProductoUpdateModal: (state) => {
      state.isProductoUpdateModalOpen = false;
    },

    //PRODUCTOS PEDIDO MODAL
    onOpenProductosPedidoModal: (state) => {
      state.isProductoPedidosModalOpen = true;
    },
    onCloseProductosPedidoModal: (state) => {
      state.isProductoPedidosModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onToogleSidebar,
  onToogleNavbar,
  onToogleFilter,

  onOpenProductoUpdateModal,
  onCloseProductoUpdateModal,
  // MODAL PRODUCTOS PEDIDO
  onOpenProductosPedidoModal,
  onCloseProductosPedidoModal,
} = uiSlice.actions;
