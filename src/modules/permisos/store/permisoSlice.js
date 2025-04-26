import { createSlice } from "@reduxjs/toolkit";

export const permisoSlice = createSlice({
  name: "permiso",
  initialState: {
    isLoadingPermisos: true,
    permisos: [],
    permiso: [],
    filtros:[],
    error: null,
  },
  reducers: {
    onLoadPermisos: (state, { payload = [] }) => {
      state.isLoadingPermisos = false;
      state.permisos = payload;
    },
    onLoadPermiso: (state, { payload = [] }) => {
      state.isLoadingPermisos = false;
      state.permiso = payload;
    },
    onLogoutPermiso: (state, { payload }) => {
      if (payload) {
        (state.isLoadingPermisos = false), (state.permiso = []);
      }
      (state.isLoadingPermisos = false), (state.permisos = []);
      state.permiso = [];
    },
    onFiltrosPermiso: (state, { payload }) => {
      state.isLoadingUsuarios = false;
      state.filtros = payload;
    },
    onSetError: (state, { payload }) => {
      state.error = payload;
      state.isLoadingPermisos = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
    onLoadPermiso, 
    onLoadPermisos, 
    onLogoutPermiso ,
    onSetError,
    onClearError,
    onFiltrosPermiso
} =
  permisoSlice.actions;
