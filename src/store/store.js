import { configureStore } from "@reduxjs/toolkit";

import {
  uiSlice,
} from "../modules/ui/store";

import {
  usuarioSlice
} from "../modules/permisos copy 2/store"

import {
  authSlice,
} from "../modules/auth/store";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    usuario: usuarioSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
