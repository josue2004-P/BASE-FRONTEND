import { createSlice } from "@reduxjs/toolkit";

export const perfilSlice = createSlice({
  name: "perfil",
  initialState: {
    isLoadingPerfiles: true,
    perfiles: [],
    perfil: [],
    error: null,
  },
  reducers: {
    onLoadPerfiles: (state, { payload = [] }) => {
      state.isLoadingPerfiles = false;
      state.perfiles = payload;
    },
    onLoadPerfil: (state, { payload = [] }) => {
      state.isLoadingPerfiles = false;
      state.perfil = payload;
    },
    onLogoutPerfil: (state, { payload }) => {
      if (payload) {
        (state.isLoadingPerfiles = false), (state.perfil = []);
      }
      (state.isLoadingPerfiles = false), (state.perfiles = []);
      state.perfil = [];
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
  onLoadPerfiles,
  onLoadPerfil,
  onLogoutPerfil,
  onLogoutPerfiles,
  onSetError,
  onClearError
} = perfilSlice.actions;
