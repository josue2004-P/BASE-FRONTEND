import { createSlice } from '@reduxjs/toolkit';

export const perfilSlice = createSlice({
    name: 'perfil',
    initialState: {
        isLoadingPerfiles: true,
        perfiles: [],
        perfil: [
        ],
        activePerfil: null
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
        onLogoutPerfil: ( state ) => {
            state.isLoadingPerfiles = true,
            state.perfiles      = []
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    onLoadPerfiles,
    onLoadPerfil,
    onLogoutPerfil,
} = perfilSlice.actions;