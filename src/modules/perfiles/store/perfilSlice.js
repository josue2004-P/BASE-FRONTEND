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
        onLogoutPerfil: ( state ,{payload} ) => {
            if(payload){
                state.isLoadingPerfiles = true,
                state.perfil      = []
            }
            state.isLoadingPerfiles = true,
            state.perfiles      = []
            state.perfil      = []
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    onLoadPerfiles,
    onLoadPerfil,
    onLogoutPerfil,
    onLogoutPerfiles,
} = perfilSlice.actions;