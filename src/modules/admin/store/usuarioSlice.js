import { createSlice } from '@reduxjs/toolkit';

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {
        isLoadingUsuarios: true,
        usuarios: [],
        usuario: [
        ],
        activeUsuario: null
    },
    reducers: {
        onLoadUsuarios: (state, { payload = [] }) => {
            state.isLoadingUsuarios = false;
            state.usuarios = payload;

        },
        onLoadUsuario: (state, { payload = [] }) => {
            state.isLoadingUsuarios = false;
            state.usuario = payload;

        },
        onLogoutUsuario: ( state ) => {
            state.isLoadingUsuarios = true,
            state.usuarios      = []
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    onLoadUsuarios,
    onLoadUsuario,
    onLogoutUsuario,
} = usuarioSlice.actions;