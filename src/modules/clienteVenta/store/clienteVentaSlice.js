import { createSlice } from "@reduxjs/toolkit";

export const clienteVentaSlice = createSlice({
  name: "clienteVenta",
  initialState: {
    isLoadingClientes: true,
    clientes: [],
    cliente: [],
    filtros:[],
    error: null,
  },
  reducers: {
    onLoadClientes: (state, { payload = [] }) => {
      state.isLoadingClientes = false;
      state.clientes = payload;
    },
    onLoadCliente: (state, { payload = [] }) => {
      state.isLoadingClientes = false;
      state.cliente = payload;
    },
    onLogoutCliente: (state, { payload }) => {
      if (payload) {
        (state.isLoadingClientes = false), (state.cliente = []);
      }
      (state.isLoadingClientes = false), (state.clientes = []);
      state.cliente = [];
      state.filtros = [];
    },
    onFiltrosClientes: (state, { payload }) => {
      state.isLoadingClientes = false;
      state.filtros = payload;
    },
    onSetError: (state, { payload }) => {
      state.error = payload;
      state.isLoadingClientes = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
    onLoadClientes, 
    onLoadCliente, 
    onLogoutCliente ,
    onSetError,
    onClearError,
    onFiltrosClientes
} =
clienteVentaSlice.actions;
