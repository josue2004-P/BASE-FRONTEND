import { createSlice } from '@reduxjs/toolkit';

export const permisoSlice = createSlice({
    name: 'permiso',
    initialState: {
        isLoadingPermisos: true,
        permisos: [],
        permiso: [
        ],
        activePermiso: null
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
        onLogoutPermiso: ( state ) => {
            state.isLoadingPermisos = true,
            state.permisos      = []
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    onLoadPermiso,
    onLoadPermisos,
    onLogoutPermiso
} = permisoSlice.actions;