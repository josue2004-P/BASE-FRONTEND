import { configureStore } from "@reduxjs/toolkit";
import {
  // authSlice,
  // uiSlice,
  
  // equipoSlice,
  // clienteSlice,

  // PUBLIC
  marcaSlice,
  categoriaSlice,
  productoSlice

} from "../modules/public/store";

import {
  uiSlice,
} from "../modules/ui/store";

import {
  authSlice,
} from "../modules/auth/store";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    // equipo: equipoSlice.reducer,
    // cliente: clienteSlice.reducer,

    // PUBLIC
    marca: marcaSlice.reducer,
    categoria: categoriaSlice.reducer,
    producto: productoSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
