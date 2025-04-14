import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
  isLoading: false,
  error: null,
};

export const productoSlice = createSlice({
  name: "producto",
  initialState,
  reducers: {
    startLoadingProductos: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    onLoadProductos: (state, { payload }) => {
      state.isLoading = false;
      state.productos = payload;
    },
    onLoadProductosError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { 
  startLoadingProductos, 
  onLoadProductos, 
  onLoadProductosError 
} = productoSlice.actions;
