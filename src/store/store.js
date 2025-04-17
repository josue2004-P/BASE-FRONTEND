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

import {
  perfilSlice,
} from "../modules/perfiles/store";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    usuario: usuarioSlice.reducer,

    permiso: permisoSlice.reducer,
    perfil: perfilSlice.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
