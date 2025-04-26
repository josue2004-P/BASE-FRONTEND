import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    isLoadingUsuarios: true,
    usuarios: [],
    usuario: [],
    filtros:[],
    error: null,
  },
  reducers: {
    onLoadUsuarios: (state, { payload = [] }) => {
      state.isLoadingUsuarios = false;
      state.usuarios = payload;
    },
    onLoadUsuario: (state, { payload = [] }) => {
      state.isLoadingUsuarios = false;
      state.usuario = payload;
    },
    onLogoutUsuario: (state, { payload }) => {
      if (payload) {
        (state.isLoadingPerfiles = false), (state.perfil = []);
      }
      (state.isLoadingPerfiles = false), (state.perfiles = []);
      state.perfil = [];
      state.filtros = [];
    },
    onFiltrosUsuario: (state, { payload }) => {
      state.isLoadingUsuarios = false;
      state.filtros = payload;
    },
    onSetError: (state, { payload }) => {
      state.error = payload;
      state.isLoadingPerfiles = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
    onLoadUsuarios, 
    onLoadUsuario, 
    onLogoutUsuario ,
    onSetError,
    onClearError,
    onFiltrosUsuario
} =
  usuarioSlice.actions;
