import { configureStore } from "@reduxjs/toolkit";

import {
  uiSlice,
} from "../modules/ui/store";

import {
  usuarioSlice
} from "../modules/usuario/store"

import {
  authSlice,
} from "../modules/auth/store";

import {
  permisoSlice,
} from "../modules/permiso/store";

import {
  perfilSlice,
} from "../modules/perfil/store";

import {
  clienteVentaSlice,
} from "../modules/clienteVenta/store";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    usuario: usuarioSlice.reducer,

    permiso: permisoSlice.reducer,
    perfil: perfilSlice.reducer,
    clienteVenta: clienteVentaSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
