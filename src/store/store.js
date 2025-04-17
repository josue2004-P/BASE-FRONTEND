import { configureStore } from "@reduxjs/toolkit";

import {
  uiSlice,
} from "../modules/ui/store";

import {
  usuarioSlice
} from "../modules/usuarios/store"

import {
  authSlice,
} from "../modules/auth/store";

import {
  permisoSlice,
} from "../modules/permisos/store";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    usuario: usuarioSlice.reducer,

    permiso: permisoSlice.reducer,
    perfil: usuarioSlice.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
