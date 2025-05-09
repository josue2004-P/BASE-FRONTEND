import { createSlice } from "@reduxjs/toolkit";

export const ventaGeneralSlice = createSlice({
  name: "ventaGeneral",
  initialState: {
    isLoadingVentaGeneral: true,
    ventasGeneral: [],
    ventaGeneral: [],
    error: null,
  },
  reducers: {
    onLoadVentasGeneral: (state, { payload = [] }) => {
      state.isLoadingVentaGeneral = false;
      state.ventasGeneral = payload;
    },
    onLoadVentaGeneral: (state, { payload = [] }) => {
      state.isLoadingVentaGeneral = false;
      state.ventaGeneral = payload;
    },
    onLogoutVentaGeneral: (state, { payload }) => {
      if (payload) {
        (state.isLoadingVentaGeneral = false), (state.ventaGeneral = []);
      }
      (state.isLoadingVentaGeneral = false), (state.ventasGeneral = []);
      state.ventaGeneral = [];
    },
    onSetError: (state, { payload }) => {
      state.error = payload;
      state.isLoadingVentaGeneral = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onLoadVentasGeneral,
  onLoadVentaGeneral,
  onLogoutVentaGeneral,
  onSetError,
  onClearError,
} = ventaGeneralSlice.actions;
